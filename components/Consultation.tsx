"use client";

import { useState } from "react";

const consultationPaths = [
    {
        number: "01",
        title: "Astrology & Occult",
        subtitle: "Understand your patterns and cycles",
        symbol: "☼",
        description:
            "Astrology can help us look at different patterns and phases of life. If you're curious about your birth chart, certain periods of life, or traditional occult practices, we can explore them together.",
    },
    {
        number: "02",
        title: "Philosophy & Tantra",
        subtitle: "Go deeper into yourself",
        symbol: "ॐ",
        description:
            "Explore questions about consciousness, identity, life and transformation through Indian philosophical and Tantric traditions, meditation, contemplation and deeper inquiry.",
    },
    {
        number: "03",
        title: "Energy & Healing",
        subtitle: "Reconnect with yourself",
        symbol: "✦",
        description:
            "A space to slow down and become more aware of your inner experience through meditation, grounding, breath awareness and energetic exploration.",
    },
    {
        number: "04",
        title: "Integrated Guidance",
        subtitle: "When you don't know where to start",
        symbol: "◉",
        description:
            "Sometimes a question doesn't fit into one category. We can begin with your question and explore the perspective or combination of approaches that feels most relevant.",
    },
];

const processSteps = [
    {
        number: "01",
        title: "Tell Us",
        description:
            "Share what you're going through or what you'd like to explore. You don't need to explain everything perfectly.",
    },
    {
        number: "02",
        title: "We Listen",
        description:
            "We'll understand your question and see which approach may be most suitable for you.",
    },
    {
        number: "03",
        title: "We Explore",
        description:
            "We'll discuss relevant ideas, perspectives, practices and questions together.",
    },
    {
        number: "04",
        title: "Take It Forward",
        description:
            "Take whatever feels meaningful to you and continue exploring it in your own way.",
    },
];

const principles = [
    {
        title: "Awareness",
        description: "Pay attention to what is happening within you.",
    },
    {
        title: "Tradition",
        description:
            "Learn from the knowledge and traditions that have shaped these practices.",
    },
    {
        title: "Experience",
        description:
            "Don't simply believe something because someone tells you. Explore it and experience it for yourself.",
    },
];

export default function Consultation() {
    const [selectedPath, setSelectedPath] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [submitted, setSubmitted] = useState(false);

    /* =========================================================
       PROFESSIONAL TIME SLOTS
  
       Consultation duration: 21 minutes
       Sessions begin on clean hourly times.
  
       09:00 – 09:21
       10:00 – 10:21
       11:00 – 11:21
       etc.
  
       This intentionally gives a 39-minute buffer between
       sessions instead of displaying awkward times such as
       09:51, 10:42, 11:33.
    ========================================================= */

    const generateTimeSlots = () => {
        const slots: string[] = [];

        const sessionDuration = 21;

        const startHour = 9;
        const endHour = 20;

        const formatTime = (minutes: number) => {
            const hour24 = Math.floor(minutes / 60);
            const mins = minutes % 60;

            const period = hour24 >= 12 ? "PM" : "AM";
            const hour12 = hour24 % 12 || 12;

            return `${hour12}:${mins
                .toString()
                .padStart(2, "0")} ${period}`;
        };

        for (let hour = startHour; hour <= endHour; hour++) {
            const startMinutes = hour * 60;
            const endMinutes = startMinutes + sessionDuration;

            slots.push(
                `${formatTime(startMinutes)} – ${formatTime(endMinutes)}`
            );
        }

        return slots;
    };

    const timeSlots = generateTimeSlots();

    /* =========================================================
       TODAY
    ========================================================= */

    const today = new Date();

    const todayString = `${today.getFullYear()}-${String(
        today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    /* =========================================================
       SCROLL TO FORM
    ========================================================= */

    const scrollToForm = (path?: string) => {
        if (path) {
            setSelectedPath(path);
        }

        document
            .getElementById("consultation-form")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    /* =========================================================
       FORM SUBMIT
    ========================================================= */

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedDate || !selectedTime) {
            return;
        }

        /*
         * Backend / email connection will be added here.
         */

        setSubmitted(true);
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#f7f3ea] text-[#243b2a]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:px-20 lg:pb-20 lg:pt-28">

                <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#dfe7d8]/50 blur-3xl" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#eadcc6]/50 blur-3xl" />

                <div className="relative mx-auto max-w-6xl text-center">

                    <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-[#96754c]">
                        Sarvangah · Consultation
                    </p>

                    <h1 className="mx-auto max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                        A space to{" "}
                        <span className="italic text-[#765936]">
                            understand,
                        </span>
                        <br />
                        reflect & explore.
                    </h1>

                    <div className="mx-auto my-5 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-[#a58a66]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#a58a66]" />
                        <span className="h-px w-12 bg-[#a58a66]" />
                    </div>

                    <p className="mx-auto max-w-2xl text-base leading-7 text-[#5d685f] sm:text-lg">
                        Every journey is different. Sometimes we seek clarity about what
                        lies ahead. Sometimes we want to understand ourselves more deeply.
                        And sometimes, we simply need a space where we can pause and listen.
                    </p>

                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

                        <button
                            type="button"
                            onClick={() => scrollToForm()}
                            className="rounded-full bg-[#29452f] px-8 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f3825] hover:shadow-lg"
                        >
                            Begin Your Consultation
                        </button>

                        <a
                            href="#consultation-paths"
                            className="rounded-full border border-[#aeb6a9] px-8 py-3.5 text-sm font-medium text-[#29452f] transition hover:bg-white/60"
                        >
                            Explore the Paths
                        </a>

                    </div>

                </div>
            </section>


            {/* =========================================================
          INTRODUCTION
      ========================================================= */}

            <section className="border-y border-[#ddd9cf] bg-[#f1ede3] px-6 py-12 sm:px-10 lg:px-20 lg:py-16">

                <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.9fr_1.3fr] lg:items-center">

                    <div>

                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#997548]">
                            Begin with a question
                        </p>

                        <h2 className="font-serif text-4xl leading-tight text-[#29452f] sm:text-5xl">
                            Sometimes the journey begins with a question.
                        </h2>

                    </div>

                    <div className="text-[#626b63]">

                        <p className="text-base leading-7">
                            Sometimes we have questions about life, ourselves, our
                            relationships, or things we're going through.
                        </p>

                        <p className="mt-4 text-base leading-7">
                            Sometimes we simply feel stuck and don't know where to begin.
                        </p>

                        <p className="mt-4 text-base leading-7">
                            A consultation at Sarvangah is a space where you can talk, ask
                            questions, explore your thoughts, and look at your situation
                            from a different perspective.
                        </p>

                        <p className="mt-4 font-serif text-xl italic text-[#29452f]">
                            You don't need to have everything figured out. You can simply
                            begin with what's on your mind.
                        </p>

                    </div>

                </div>
            </section>


            {/* =========================================================
          CONSULTATION PATHS
      ========================================================= */}

            <section
                id="consultation-paths"
                className="px-6 py-16 sm:px-10 lg:px-20 lg:py-20"
            >

                <div className="mx-auto max-w-6xl">

                    <div className="mb-9 max-w-2xl">

                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#997548]">
                            Choose your path
                        </p>

                        <h2 className="font-serif text-4xl leading-tight text-[#29452f] sm:text-5xl">
                            What would you like to explore?
                        </h2>

                        <p className="mt-4 text-base leading-7 text-[#657066]">
                            Everyone's journey is different. Choose the path that feels
                            closest to the question you're carrying right now.
                        </p>

                    </div>

                    <div className="grid gap-4 md:grid-cols-2">

                        {consultationPaths.map((path) => (

                            <article
                                key={path.number}
                                className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8d6cc] bg-[#fbfaf6] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#aab5a4] hover:shadow-[0_20px_55px_rgba(50,65,48,0.09)] sm:p-7"
                            >

                                <div className="pointer-events-none absolute -right-8 -top-10 font-serif text-[130px] leading-none text-[#29452f]/[0.025]">
                                    {path.symbol}
                                </div>

                                <div className="relative">

                                    <div className="mb-6 flex items-center justify-between">

                                        <span className="font-serif text-3xl text-[#a88961]">
                                            {path.number}
                                        </span>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8dcd3] text-lg text-[#5c725e] transition-all duration-300 group-hover:bg-[#29452f] group-hover:text-white">
                                            {path.symbol}
                                        </div>

                                    </div>

                                    <h3 className="font-serif text-3xl text-[#29452f]">
                                        {path.title}
                                    </h3>

                                    <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.17em] text-[#977448]">
                                        {path.subtitle}
                                    </p>

                                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#646d66]">
                                        {path.description}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => scrollToForm(path.title)}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#29452f]"
                                    >
                                        Begin your enquiry

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>
            </section>


            {/* =========================================================
          WHY CONSULTATION
      ========================================================= */}

            <section className="border-y border-[#ddd9cf] bg-[#f2eee4] px-6 py-14 sm:px-10 lg:px-20 lg:py-18">

                <div className="mx-auto max-w-5xl text-center">

                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#997548]">
                        Why consultation?
                    </p>

                    <h2 className="font-serif text-4xl leading-tight text-[#29452f] sm:text-5xl">
                        Sometimes we already know something isn't feeling right.
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#626b63]">
                        But we don't always know how to understand it. Talking about it
                        can help us see things from another angle.
                    </p>

                    <p className="mx-auto mt-4 max-w-3xl font-serif text-xl italic leading-8 text-[#765936]">
                        A consultation isn't about someone giving you all the answers.
                        It's about having a space where you can talk openly, ask
                        questions, and understand yourself a little better.
                    </p>

                </div>
            </section>


            {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#29452f] px-6 py-16 text-[#f7f3ea] sm:px-10 lg:px-20 lg:py-20">

                <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-white/[0.03] blur-3xl" />

                <div className="relative mx-auto max-w-6xl">

                    <div className="max-w-2xl">

                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d6b889]">
                            The process
                        </p>

                        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                            How it works.
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#d6ddd4]">
                            A consultation isn't about receiving all the answers. It's
                            about creating enough space to ask better questions.
                        </p>

                    </div>

                    <div className="mt-10 grid gap-7 md:grid-cols-4">

                        {processSteps.map((step) => (

                            <div
                                key={step.number}
                                className="border-t border-white/20 pt-5"
                            >

                                <span className="text-sm text-[#d6b889]">
                                    {step.number}
                                </span>

                                <h3 className="mt-4 font-serif text-2xl">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-7 text-[#d3ddd4]">
                                    {step.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* =========================================================
          OUR APPROACH
      ========================================================= */}

            <section className="px-6 py-16 sm:px-10 lg:px-20 lg:py-20">

                <div className="mx-auto max-w-5xl text-center">

                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#997548]">
                        Our approach
                    </p>

                    <h2 className="font-serif text-4xl leading-tight text-[#29452f] sm:text-5xl">
                        No fear. No pressure. No dependency.
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#626b63]">
                        We don't want you to feel like you need someone else to make
                        every decision for you. Our intention is to help you understand
                        yourself, ask better questions, and become more aware.
                    </p>

                    <div className="mx-auto mt-9 grid max-w-4xl gap-4 text-left md:grid-cols-3">

                        {principles.map((principle) => (

                            <div
                                key={principle.title}
                                className="rounded-3xl border border-[#dedbd1] bg-[#faf8f2] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="mb-5 h-1.5 w-10 rounded-full bg-[#a88961]" />

                                <h3 className="font-serif text-2xl text-[#29452f]">
                                    {principle.title}
                                </h3>

                                <p className="mt-2 text-sm leading-7 text-[#6b736c]">
                                    {principle.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* =========================================================
          DISCLAIMER
      ========================================================= */}

            <section className="px-6 pb-16 sm:px-10 lg:px-20">

                <div className="mx-auto max-w-4xl rounded-3xl border border-[#d8d5cb] bg-[#eee9dc] p-6 sm:p-8">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#997548]">
                        A small note
                    </p>

                    <h2 className="mt-2 font-serif text-3xl text-[#29452f]">
                        Spiritual guidance has its place.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#626b63]">
                        Spiritual guidance can be meaningful, but it doesn't replace
                        professional medical, psychological, legal, or financial advice.
                        If you need professional help, please seek the right qualified
                        professional.
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[#626b63]">
                        Our consultations are meant for spiritual exploration, reflection,
                        learning, and personal growth.
                    </p>

                </div>
            </section>


            {/* =========================================================
          CONSULTATION FORM
      ========================================================= */}

            <section
                id="consultation-form"
                className="bg-[#eee9dc] px-6 py-14 sm:px-10 lg:px-20 lg:py-20"
            >

                <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#d5d0c2] bg-[#faf8f2] p-6 shadow-sm sm:p-9">

                    {!submitted ? (

                        <>

                            <div className="text-center">

                                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#997548]">
                                    Begin your journey
                                </p>

                                <h2 className="mt-3 font-serif text-4xl text-[#29452f] sm:text-5xl">
                                    Request a Consultation
                                </h2>

                                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#687169]">
                                    Tell us a little about yourself and what you'd like to
                                    explore. There is no perfect way to explain it.
                                </p>

                            </div>


                            <form
                                onSubmit={handleSubmit}
                                className="mt-8 space-y-5"
                            >

                                {/* =====================================================
                    CONSULTATION TYPE
                ===================================================== */}

                                <div>

                                    <label
                                        htmlFor="consultation"
                                        className="mb-2 block text-sm font-medium text-[#29452f]"
                                    >
                                        What would you like to explore?
                                    </label>

                                    <select
                                        id="consultation"
                                        name="consultation"
                                        value={selectedPath}
                                        onChange={(e) => setSelectedPath(e.target.value)}
                                        required
                                        className="w-full rounded-xl border border-[#d4d2c8] bg-white px-4 py-3.5 text-sm text-[#39443b] outline-none transition focus:border-[#6d806d] focus:ring-2 focus:ring-[#6d806d]/10"
                                    >

                                        <option value="">
                                            Select a consultation
                                        </option>

                                        {consultationPaths.map((path) => (

                                            <option
                                                key={path.title}
                                                value={path.title}
                                            >
                                                {path.title}
                                            </option>

                                        ))}

                                    </select>

                                </div>


                                {/* =====================================================
                    NAME + EMAIL
                ===================================================== */}

                                <div className="grid gap-5 sm:grid-cols-2">

                                    <div>

                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium text-[#29452f]"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            className="w-full rounded-xl border border-[#d4d2c8] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0a39e] focus:border-[#6d806d] focus:ring-2 focus:ring-[#6d806d]/10"
                                        />

                                    </div>


                                    <div>

                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-[#29452f]"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-[#d4d2c8] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0a39e] focus:border-[#6d806d] focus:ring-2 focus:ring-[#6d806d]/10"
                                        />

                                    </div>

                                </div>


                                {/* =====================================================
                    PHONE
                ===================================================== */}

                                <div>

                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-medium text-[#29452f]"
                                    >
                                        Phone / WhatsApp
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full rounded-xl border border-[#d4d2c8] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0a39e] focus:border-[#6d806d] focus:ring-2 focus:ring-[#6d806d]/10"
                                    />

                                </div>


                                {/* =====================================================
                    DATE
                ===================================================== */}

                                <div>

                                    <label
                                        htmlFor="date"
                                        className="mb-2 block text-sm font-medium text-[#29452f]"
                                    >
                                        Preferred Date
                                    </label>

                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        required
                                        value={selectedDate}
                                        min={todayString}
                                        onChange={(e) => {
                                            setSelectedDate(e.target.value);
                                            setSelectedTime("");
                                        }}
                                        className="w-full rounded-xl border border-[#d4d2c8] bg-white px-4 py-3.5 text-sm text-[#39443b] outline-none transition focus:border-[#6d806d] focus:ring-2 focus:ring-[#6d806d]/10"
                                    />

                                </div>


                                {/* =====================================================
                    TIME
                ===================================================== */}

                                <div className="rounded-2xl border border-[#d8d6cc] bg-[#f5f2e9] p-4">

                                    <div className="mb-3">

                                        <label
                                            htmlFor="time"
                                            className="block text-sm font-medium text-[#29452f]"
                                        >
                                            Preferred Time
                                        </label>

                                        <p className="mt-1 text-xs leading-5 text-[#858b84]">
                                            Consultation sessions are 21 minutes long.
                                        </p>

                                    </div>


                                    <select
                                        id="time"
                                        name="time"
                                        required
                                        value={selectedTime}
                                        disabled={!selectedDate}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className={`w-full rounded-xl border border-[#d4d2c8] px-4 py-3.5 text-sm outline-none transition ${!selectedDate
                                                ? "cursor-not-allowed bg-[#ebe8df] text-[#999d97]"
                                                : "bg-white text-[#39443b] focus:border-[#6d806d] focus:ring-2 focus:ring-[#6d806d]/10"
                                            }`}
                                    >

                                        <option value="">
                                            {selectedDate
                                                ? "Select an available session"
                                                : "Select a date first"}
                                        </option>

                                        {timeSlots.map((slot) => (

                                            <option
                                                key={slot}
                                                value={slot}
                                            >
                                                {slot}
                                            </option>

                                        ))}

                                    </select>


                                    <p className="mt-2 text-[11px] text-[#8a8f89]">
                                        {selectedDate
                                            ? "Available sessions for your selected date."
                                            : "Choose a preferred date above to view sessions."}
                                    </p>

                                </div>


                                {/* =====================================================
                    QUESTION
                ===================================================== */}

                                <div>

                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-[#29452f]"
                                    >
                                        Tell us a little about your question
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        placeholder="Share what you would like to explore..."
                                        className="w-full resize-none rounded-xl border border-[#d4d2c8] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0a39e] focus:border-[#6d806d] focus:ring-2 focus:ring-[#6d806d]/10"
                                    />

                                </div>


                                {/* =====================================================
                    SUBMIT
                ===================================================== */}

                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-[#29452f] px-8 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f3825] hover:shadow-lg"
                                >
                                    Request Consultation →
                                </button>

                                <p className="text-center text-xs leading-5 text-[#858b84]">
                                    Your information will only be used to respond to your
                                    consultation enquiry.
                                </p>

                            </form>

                        </>

                    ) : (

                        /* =====================================================
                           SUCCESS STATE
                        ===================================================== */

                        <div className="py-12 text-center sm:py-14">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#29452f] text-2xl text-white">
                                ✓
                            </div>

                            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#997548]">
                                Thank you
                            </p>

                            <h2 className="mt-3 font-serif text-4xl text-[#29452f] sm:text-5xl">
                                Your enquiry has been received.
                            </h2>

                            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#687169]">
                                Thank you for reaching out to Sarvangah. We'll review your
                                enquiry and get in touch with you soon.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setSubmitted(false);
                                    setSelectedTime("");
                                }}
                                className="mt-7 rounded-full border border-[#aeb6a9] px-7 py-3 text-sm font-medium text-[#29452f] transition hover:bg-white"
                            >
                                Submit another enquiry
                            </button>

                        </div>

                    )}

                </div>
            </section>


            {/* =========================================================
          CONTACT
      ========================================================= */}

            <section className="px-6 py-14 sm:px-10 lg:px-20 lg:py-18">

                <div className="mx-auto max-w-5xl text-center">

                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#997548]">
                        Contact Sarvangah
                    </p>

                    <h2 className="font-serif text-4xl text-[#29452f] sm:text-5xl">
                        Not sure where to begin?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#626b63]">
                        That's completely okay. If you're unsure which consultation is
                        right for you, reach out to us. Tell us what's on your mind and
                        we'll help you find the right place to start.
                    </p>


                    <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">

                        {/* EMAIL */}

                        <a
                            href="mailto:sarvangah.shakti@gmail.com"
                            className="group rounded-3xl border border-[#dedbd1] bg-[#faf8f2] p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#997548]">
                                Email
                            </span>

                            <p className="mt-2 break-all font-serif text-lg text-[#29452f]">
                                sarvangah.shakti@gmail.com
                            </p>

                            <span className="mt-3 inline-block text-sm font-medium text-[#5c725e] group-hover:underline">
                                Send us an email →
                            </span>

                        </a>


                        {/* INSTAGRAM */}

                        <a
                            href="https://instagram.com/sarvangah.shakti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-3xl border border-[#dedbd1] bg-[#faf8f2] p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#997548]">
                                Instagram
                            </span>

                            <p className="mt-2 font-serif text-lg text-[#29452f]">
                                @sarvangah.shakti
                            </p>

                            <span className="mt-3 inline-block text-sm font-medium text-[#5c725e] group-hover:underline">
                                Message us on Instagram →
                            </span>

                        </a>

                    </div>

                </div>
            </section>


            {/* =========================================================
          FINAL CTA
      ========================================================= */}

            <section className="px-6 pb-20 pt-6 text-center sm:px-10 lg:px-20 lg:pb-24">

                <div className="mx-auto max-w-4xl">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#997548]">
                        Sarvangah
                    </p>

                    <h2 className="mt-4 font-serif text-4xl leading-tight text-[#29452f] sm:text-5xl lg:text-6xl">
                        You don't need to know the whole path.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#687169]">
                        Sometimes all you need is the courage to take the first step.
                    </p>

                    <p className="mt-5 font-serif text-xl italic text-[#765936]">
                        Explore. Reflect. Understand.
                    </p>

                    <button
                        type="button"
                        onClick={() => scrollToForm()}
                        className="mt-7 rounded-full bg-[#29452f] px-9 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f3825] hover:shadow-lg"
                    >
                        Begin Your Consultation →
                    </button>

                </div>

            </section>

        </main>
    );
}