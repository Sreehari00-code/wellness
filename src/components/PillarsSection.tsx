"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Mindfulness",
    subtitle: "Present-Moment Awareness",
    tag: "Foundation",
    description:
      "Cultivate deep presence through guided meditation, breathwork, and somatic practices that quieten the mind, reduce cortisol, and awaken unshakeable clarity.",
    icon: "◎",
    image: "/images/panel-mindfulness.png",
  },
  {
    number: "02",
    title: "Nutrition",
    subtitle: "Nourishment & Vitality",
    tag: "Fuelling",
    description:
      "Discover an intuitive relationship with food. Personalized anti-inflammatory nutrition protocols designed to restore gut health, balance hormones, and fuel clean energy.",
    icon: "❋",
    image: "/images/panel-nutrition.png",
  },
  {
    number: "03",
    title: "Movement",
    subtitle: "Embodied Living",
    tag: "Vitality",
    description:
      "Rediscover the joy of intentional movement. Bespoke routines blending functional fitness, somatic alignment, and restorative yoga precisely tailored to your body's wisdom.",
    icon: "⟡",
    image: "/images/panel-movement.png",
  },
  {
    number: "04",
    title: "Recovery",
    subtitle: "Rest & Regeneration",
    tag: "Restoration",
    description:
      "Optimize sleep architecture, nervous system regulation, and deep recovery pathways — the invisible yet critical foundation upon which all lasting transformation is built.",
    icon: "⌁",
    image: "/images/panel-recovery.png",
  },
  {
    number: "05",
    title: "Emotional Balance",
    subtitle: "Inner Harmony",
    tag: "Wholeness",
    description:
      "Navigate life's complexities with emotional resilience. Build the self-awareness and somatic tools to meet every challenge from a grounded, centered, and peaceful state.",
    icon: "◈",
    image: "/images/journal-mindfulness.png",
  },
];

export default function PillarsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="pillars"
      style={{
        background: "var(--bg-primary)",
        position: "relative",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
      }}
      className="border-b border-[var(--border)]"
    >
      <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 40px)", boxSizing: "border-box" }}>
        
        {/* ── Section Header ───────────────────────────────────────── */}
        <div ref={headerRef} style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}
          >
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500 }}>
              Wellness Pillars
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 300, color: "var(--text-primary)", lineHeight: 1.12, letterSpacing: "-0.01em", margin: 0 }}
          >
            Five Dimensions <em style={{ color: "var(--gold)", fontStyle: "italic", fontWeight: 400 }}>of Wholeness</em>
          </motion.h2>
        </div>

        {/* ── Bento Grid ───────────────────────────────────────────── */}
        <div className="pillars-bento-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className={`bento-card bento-card-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image Section */}
              <div className="card-image">
                <Image 
                  src={pillar.image} 
                  alt={pillar.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  style={{ objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)" }} 
                  className="hover-scale" 
                />
                <div className="image-overlay" />
              </div>
              
              {/* Content Section */}
              <div className="card-content">
                <div className="card-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="card-tag">{pillar.tag}</span>
                    <span style={{ color: "var(--gold)", opacity: 0.8, fontSize: "12px" }}>{pillar.icon}</span>
                  </div>
                  <span className="card-number">{pillar.number}</span>
                </div>
                
                <h3 className="card-title">{pillar.title}</h3>
                <p className="card-subtitle">{pillar.subtitle}</p>
                
                <div className="card-divider" />
                
                <p className="card-description">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .pillars-bento-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: clamp(16px, 2vw, 24px);
        }
        
        .bento-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .bento-card:hover {
          border-color: rgba(197, 168, 128, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
        }
        
        .bento-card:hover :global(.hover-scale) {
          transform: scale(1.05);
        }

        .bento-card-0, .bento-card-1 {
          grid-column: span 3;
        }

        .bento-card-2, .bento-card-3, .bento-card-4 {
          grid-column: span 2;
        }

        .card-image {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 10, 10, 0.2), transparent);
          pointer-events: none;
        }

        .bento-card-2 .card-image, .bento-card-3 .card-image, .bento-card-4 .card-image {
          height: 140px; /* Slightly shorter images for bottom row */
        }

        .card-content {
          padding: clamp(16px, 2.5vw, 24px);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .card-tag {
          font-family: 'Manrope', sans-serif;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(197, 168, 128, 0.25);
          padding: 4px 10px;
          border-radius: 2px;
          background: rgba(197, 168, 128, 0.05);
        }

        .card-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-style: italic;
          color: var(--gold-bright);
        }

        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 300;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .card-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-light);
          margin-bottom: 12px;
        }

        .card-divider {
          width: 32px;
          height: 1px;
          background: var(--gold);
          margin-bottom: 12px;
        }

        .card-description {
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          line-height: 1.7;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .pillars-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-card-0, .bento-card-1, .bento-card-2, .bento-card-3 {
            grid-column: span 1;
          }
          .bento-card-4 {
            grid-column: span 2;
          }
        }

        @media (max-width: 650px) {
          .pillars-bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-card-0, .bento-card-1, .bento-card-2, .bento-card-3, .bento-card-4 {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
