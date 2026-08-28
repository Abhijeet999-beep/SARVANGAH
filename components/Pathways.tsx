interface PathwayItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

interface PathwaysProps {
  eyebrow: string;
  title: string;
  description: string;
  items: PathwayItem[];
}

export default function Pathways({
  eyebrow,
  title,
  description,
  items,
}: PathwaysProps) {
  return (
    <section className="pathways">
      <div className="pathways-inner">
        <div className="pathways-heading">
          <p className="pathways-eyebrow">{eyebrow}</p>

          <h2>{title}</h2>

          <p className="pathways-description">
            {description}
          </p>
        </div>

        <div className="pathways-grid">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="pathway-card"
            >
              <span className="pathway-number">
                {String(items.indexOf(item) + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="pathway-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}