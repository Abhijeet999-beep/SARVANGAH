const fsSync = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Load .env and .env.local from project root process.cwd()
const rootDir = process.cwd();
const envLocalPath = path.resolve(rootDir, ".env.local");
const envPath = path.resolve(rootDir, ".env");

if (fsSync.existsSync(envLocalPath)) {
    dotenv.config({ path: envLocalPath, override: true });
}
if (fsSync.existsSync(envPath)) {
    dotenv.config({ path: envPath, override: false });
}

const { Pool } = require("pg");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs").promises;

// Environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_PUBLISHABLE_KEY;
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

let supabaseClient = null;
if (supabaseUrl && supabaseKey) {
    try {
        supabaseClient = createClient(supabaseUrl, supabaseKey);
        console.log("[DB Adapter] Connected to Supabase Cloud:", supabaseUrl);
    } catch (err) {
        console.error("[DB Adapter] Supabase Client init error:", err);
    }
}

let pool = null;
if (connectionString && !connectionString.includes("localhost:5432")) {
    const isLocalhost = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
    try {
        pool = new Pool({
            connectionString,
            ssl: isLocalhost ? false : { rejectUnauthorized: false }
        });
        console.log("[DB Adapter] PostgreSQL Pool initialized.");
    } catch (err) {
        console.error("[DB Adapter] PostgreSQL Pool init error:", err);
    }
}

// Local JSON Storage Fallback
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "consultations.json");

async function initLocalJsonDb() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        try {
            await fs.access(DATA_FILE);
        } catch {
            await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), "utf8");
        }
    } catch (err) {
        console.error("Local JSON storage init error:", err);
    }
}

async function readLocalJson() {
    await initLocalJsonDb();
    try {
        const data = await fs.readFile(DATA_FILE, "utf8");
        return JSON.parse(data || "[]");
    } catch {
        return [];
    }
}

async function writeLocalJson(data) {
    await initLocalJsonDb();
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

function generateReferenceCode(dateStr) {
    const cleanDate = (dateStr || "").replace(/-/g, "");
    const randomHex = Math.floor(1000 + Math.random() * 9000).toString();
    return `SAR-${cleanDate || "BOOK"}-${randomHex}`;
}

function formatRow(row) {
    if (!row) return null;
    return {
        id: row.id,
        referenceCode: row.reference_code || row.referenceCode,
        name: row.name,
        email: row.email,
        phone: row.phone || "",
        consultation: row.consultation,
        date: row.date,
        time: row.time,
        message: row.message,
        status: row.status,
        notes: row.notes || "",
        createdAt: row.created_at || row.createdAt,
        updatedAt: row.updated_at || row.updatedAt
    };
}

const db = {
    async getAll(filters = {}) {
        if (supabaseClient) {
            let query = supabaseClient.from("consultations").select("*");
            if (filters.status) query = query.eq("status", filters.status);
            if (filters.date) query = query.eq("date", filters.date);
            if (filters.email) query = query.ilike("email", filters.email);
            
            const { data, error } = await query.order("created_at", { ascending: false });
            if (!error && Array.isArray(data)) {
                return data.map(formatRow);
            } else if (error) {
                console.error("[DB Adapter Error] Supabase getAll:", error.message, error.details || "");
                throw new Error(`Supabase query error: ${error.message}`);
            }
        }

        if (pool) {
            try {
                let query = `
                    SELECT id, reference_code AS "referenceCode", name, email, phone, consultation, date, time, message, status, notes, created_at AS "createdAt", updated_at AS "updatedAt"
                    FROM consultations
                `;
                const conditions = [];
                const params = [];
                if (filters.status) { params.push(filters.status); conditions.push(`status = $${params.length}`); }
                if (filters.date) { params.push(filters.date); conditions.push(`date = $${params.length}`); }
                if (filters.email) { params.push(filters.email.toLowerCase()); conditions.push(`LOWER(email) = $${params.length}`); }

                if (conditions.length > 0) query += " WHERE " + conditions.join(" AND ");
                query += " ORDER BY created_at DESC";

                const res = await pool.query(query, params);
                return res.rows;
            } catch (err) {
                console.error("[DB Adapter Error] PostgreSQL getAll:", err.message);
                throw err;
            }
        }

        // Fallback
        let list = await readLocalJson();
        if (filters.status) list = list.filter(c => c.status === filters.status);
        if (filters.date) list = list.filter(c => c.date === filters.date);
        if (filters.email) list = list.filter(c => c.email.toLowerCase() === filters.email.toLowerCase());
        return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },

    async getById(idOrRef) {
        if (supabaseClient) {
            const { data, error } = await supabaseClient
                .from("consultations")
                .select("*")
                .or(`id.eq.${idOrRef},reference_code.eq.${idOrRef}`)
                .maybeSingle();

            if (!error && data) return formatRow(data);
            if (error) {
                console.error("[DB Adapter Error] Supabase getById:", error.message);
                throw new Error(`Supabase error: ${error.message}`);
            }
        }

        if (pool) {
            try {
                const query = `
                    SELECT id, reference_code AS "referenceCode", name, email, phone, consultation, date, time, message, status, notes, created_at AS "createdAt", updated_at AS "updatedAt"
                    FROM consultations
                    WHERE id = $1 OR reference_code = $1
                `;
                const res = await pool.query(query, [idOrRef]);
                if (res.rows[0]) return res.rows[0];
            } catch (err) {
                console.error("[DB Adapter Error] PostgreSQL getById:", err.message);
                throw err;
            }
        }

        const list = await readLocalJson();
        return list.find(c => c.id === idOrRef || c.referenceCode === idOrRef) || null;
    },

    async getBookedSlots(date) {
        if (supabaseClient) {
            const { data, error } = await supabaseClient
                .from("consultations")
                .select("time")
                .eq("date", date)
                .neq("status", "cancelled");

            if (!error && Array.isArray(data)) {
                return data.map(r => r.time);
            }
            if (error) {
                console.error("[DB Adapter Error] Supabase getBookedSlots:", error.message);
                throw new Error(`Supabase error: ${error.message}`);
            }
        }

        if (pool) {
            try {
                const query = `SELECT time FROM consultations WHERE date = $1 AND status != 'cancelled'`;
                const res = await pool.query(query, [date]);
                return res.rows.map(r => r.time);
            } catch (err) {
                console.error("[DB Adapter Error] PostgreSQL getBookedSlots:", err.message);
                throw err;
            }
        }

        const list = await readLocalJson();
        return list.filter(c => c.date === date && c.status !== "cancelled").map(c => c.time);
    },

    async isSlotTaken(date, time) {
        const bookedSlots = await this.getBookedSlots(date);
        return bookedSlots.includes(time);
    },

    async create(data) {
        const now = new Date().toISOString();
        const id = `consult_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        const referenceCode = generateReferenceCode(data.date);

        const newRecord = {
            id,
            reference_code: referenceCode,
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            phone: (data.phone || "").trim(),
            consultation: data.consultation.trim(),
            date: data.date.trim(),
            time: data.time.trim(),
            message: data.message.trim(),
            status: "pending",
            notes: "",
            created_at: now,
            updated_at: now
        };

        if (supabaseClient) {
            const { data: inserted, error } = await supabaseClient
                .from("consultations")
                .insert([newRecord])
                .select()
                .single();

            if (!error && inserted) {
                console.log("[DB Adapter Success] Saved to Supabase Cloud:", inserted.reference_code);
                return formatRow(inserted);
            }
            if (error) {
                console.error("[DB Adapter Error] Supabase insert failed:", error.message, error.details || "", error.hint || "");
                throw new Error(`Supabase Insert Error: ${error.message} ${error.hint ? '(' + error.hint + ')' : ''}`);
            }
        }

        if (pool) {
            try {
                const query = `
                    INSERT INTO consultations (
                        id, reference_code, name, email, phone, consultation, date, time, message, status, notes, created_at, updated_at
                    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
                    RETURNING id, reference_code AS "referenceCode", name, email, phone, consultation, date, time, message, status, notes, created_at AS "createdAt", updated_at AS "updatedAt"
                `;
                const params = [
                    id, referenceCode, data.name.trim(), data.email.trim().toLowerCase(),
                    (data.phone || "").trim(), data.consultation.trim(), data.date.trim(),
                    data.time.trim(), data.message.trim(), "pending", "", now, now
                ];
                const res = await pool.query(query, params);
                if (res.rows[0]) return res.rows[0];
            } catch (err) {
                console.error("[DB Adapter Error] PostgreSQL insert failed:", err.message);
                throw err;
            }
        }

        // Fallback local JSON
        console.warn("[DB Adapter] No Cloud DB configured, writing to local JSON file.");
        const localList = await readLocalJson();
        const jsonRecord = {
            id,
            referenceCode,
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            phone: (data.phone || "").trim(),
            consultation: data.consultation.trim(),
            date: data.date.trim(),
            time: data.time.trim(),
            message: data.message.trim(),
            status: "pending",
            notes: "",
            createdAt: now,
            updatedAt: now
        };
        localList.push(jsonRecord);
        await writeLocalJson(localList);
        return jsonRecord;
    },

    async update(idOrRef, updates) {
        const now = new Date().toISOString();

        if (supabaseClient) {
            const allowed = ["status", "notes", "name", "email", "phone", "consultation", "date", "time", "message"];
            const updateObj = { updated_at: now };
            allowed.forEach(f => {
                if (updates[f] !== undefined) updateObj[f] = updates[f];
            });

            const { data, error } = await supabaseClient
                .from("consultations")
                .update(updateObj)
                .or(`id.eq.${idOrRef},reference_code.eq.${idOrRef}`)
                .select()
                .single();

            if (!error && data) return formatRow(data);
            if (error) {
                console.error("[DB Adapter Error] Supabase update:", error.message);
                throw new Error(`Supabase update error: ${error.message}`);
            }
        }

        if (pool) {
            try {
                const existing = await this.getById(idOrRef);
                if (existing) {
                    const fields = [];
                    const params = [];
                    const allowed = ["status", "notes", "name", "email", "phone", "consultation", "date", "time", "message"];

                    allowed.forEach(f => {
                        if (updates[f] !== undefined) {
                            params.push(updates[f]);
                            fields.push(`${f} = $${params.length}`);
                        }
                    });

                    params.push(now);
                    fields.push(`updated_at = $${params.length}`);
                    params.push(existing.id);

                    const query = `
                        UPDATE consultations 
                        SET ${fields.join(", ")} 
                        WHERE id = $${params.length}
                        RETURNING id, reference_code AS "referenceCode", name, email, phone, consultation, date, time, message, status, notes, created_at AS "createdAt", updated_at AS "updatedAt"
                    `;
                    const res = await pool.query(query, params);
                    if (res.rows[0]) return res.rows[0];
                }
            } catch (err) {
                console.error("[DB Adapter Error] PostgreSQL update:", err.message);
                throw err;
            }
        }

        const list = await readLocalJson();
        const idx = list.findIndex(c => c.id === idOrRef || c.referenceCode === idOrRef);
        if (idx === -1) return null;
        const allowed = ["status", "notes", "name", "email", "phone", "consultation", "date", "time", "message"];
        allowed.forEach(f => {
            if (updates[f] !== undefined) list[idx][f] = updates[f];
        });
        list[idx].updatedAt = now;
        await writeLocalJson(list);
        return list[idx];
    },

    async delete(idOrRef) {
        if (supabaseClient) {
            const { error } = await supabaseClient
                .from("consultations")
                .delete()
                .or(`id.eq.${idOrRef},reference_code.eq.${idOrRef}`);

            if (!error) return true;
            if (error) {
                console.error("[DB Adapter Error] Supabase delete:", error.message);
                throw new Error(`Supabase delete error: ${error.message}`);
            }
        }

        if (pool) {
            try {
                const query = `DELETE FROM consultations WHERE id = $1 OR reference_code = $1`;
                const res = await pool.query(query, [idOrRef]);
                if (res.rowCount > 0) return true;
            } catch (err) {
                console.error("[DB Adapter Error] PostgreSQL delete:", err.message);
                throw err;
            }
        }

        const list = await readLocalJson();
        const idx = list.findIndex(c => c.id === idOrRef || c.referenceCode === idOrRef);
        if (idx === -1) return false;
        list.splice(idx, 1);
        await writeLocalJson(list);
        return true;
    }
};

module.exports = db;
