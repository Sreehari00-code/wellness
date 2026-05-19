"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Inline SVG social icons
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const footerLinks = {
  Programs: [
    "1:1 Sovereignty Coaching",
    "Somatic Habit Reset",
    "Executive Sanctuary",
    "Mind & Body Alignment",
    "Stress Recovery",
  ],
  Explore: ["About Sophia", "Our Philosophy", "Sovereign Ecosystem", "Client Stories", "Wellness Journal"],
  Connect: ["Book a Call", "Contact Studio", "Partnerships", "Press Enquiries", "Gift a Session"],
};

const socials = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        padding: "100px 0 0",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
            gap: "60px",
            marginBottom: "80px",
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "26px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.08em",
                  }}
                >
                  SERENOVA
                </div>
                <div
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    color: "var(--gold)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    marginTop: "3px",
                  }}
                >
                  Wellness Studio
                </div>
              </div>
            </Link>

            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                marginBottom: "36px",
                maxWidth: "280px",
              }}
            >
              A high-end sanctuary for those seeking sovereignty. Premium wellness coaching rooted in molecular science, somatic soul, and sustainable biology.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "14px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, color: "var(--text-primary)", borderColor: "rgba(197, 168, 128, 0.35)" }}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "all 0.3s",
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  marginBottom: "28px",
                }}
              >
                {heading}
              </h4>
              <ul style={{ listStyle: "none" }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: "14px" }}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: "var(--text-primary)" }}
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        display: "block",
                        transition: "all 0.3s",
                      }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div
          style={{
            padding: "52px 60px",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            marginBottom: "52px",
            background: "rgba(18, 18, 18, 0.2)",
          }}
          className="newsletter-row"
        >
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 400,
                color: "var(--text-primary)",
                marginBottom: "10px",
                lineHeight: 1.3,
              }}
            >
              Letters from the Studio
            </h4>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "13.5px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              Bi-weekly neurological wellness audits, circadian insights, and exclusive seasonal retreats — curated with absolute presence, never noise.
            </p>
          </div>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold)" }} />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "var(--gold)",
                }}
              >
                Thank you for joining. Welcome to our sanctuary.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{
                display: "flex",
                gap: "0",
                border: "1px solid var(--border)",
                background: "rgba(6, 6, 6, 0.4)",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  padding: "16px 20px",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "13px",
                  color: "var(--text-primary)",
                  outline: "none",
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ background: "var(--gold-light)", color: "var(--bg-primary)" }}
                style={{
                  background: "var(--gold)",
                  color: "var(--bg-primary)",
                  border: "none",
                  padding: "16px 28px",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                Subscribe
              </motion.button>
            </form>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 0 40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              opacity: 0.8,
            }}
          >
            © 2026 Serenova Wellness Studio. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "28px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Protocol"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  opacity: 0.8,
                }}
                className="hover:text-[var(--text-primary)]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1000px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 700px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .newsletter-row {
            grid-template-columns: 1fr !important;
            padding: 36px 28px !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
}
