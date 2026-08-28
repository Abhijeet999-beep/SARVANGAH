"use client";

import { ArrowUpRight } from "lucide-react";

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

interface FooterProps {
  brand: {
    symbol: string;
    name: string;
    description: string;
  };
  navigation: {
    title: string;
    links: FooterLink[];
  };
  explore: {
    title: string;
    links: FooterLink[];
  };
  social: FooterLink[];
  copyright: string;
}

export default function Footer({
  brand,
  navigation,
  explore,
  social,
  copyright,
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="/"
              className="footer-brand-mark"
              aria-label={brand.name}
            >
              <span>{brand.symbol}</span>
              <strong>{brand.name}</strong>
            </a>

            <p>{brand.description}</p>
          </div>

          <div className="footer-column">
            <h3>{navigation.title}</h3>

            <nav aria-label={navigation.title}>
              {navigation.links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h3>{explore.title}</h3>

            <nav aria-label={explore.title}>
              {explore.links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>

            <nav aria-label="Social links">
              {social.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.4}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{copyright}</span>

          <span className="footer-mantra">
            ॐ शान्तिः शान्तिः शान्तिः
          </span>
        </div>
      </div>
    </footer>
  );
}