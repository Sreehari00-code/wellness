"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: "one-to-one",
    title: "1:1 Wellness Coaching",
    tagline: "Deeply Personal",
    duration: "12 Weeks",
    sessions: "24 Sessions",
    description:
      "A fully bespoke coaching journey designed around your unique physiology, lifestyle, and aspirations. The most intimate and transformative experience we offer.",
    features: [
      "Comprehensive wellness assessment",
      "Personalized protocol design",
      "Bi-weekly coaching calls",
      "24/7 messaging support",
      "Custom meal & movement plans",
    ],
    badge: "Most Popular",
  },
  {
    id: "lifestyle",
    title: "Lifestyle Transformation",
    tagline: "Wholistic Reset",
    duration: "8 Weeks",
    sessions: "16 Sessions",
    description:
      "A deep-dive reset of your daily habits, routines, and environment — creating the conditions for lasting vitality and aligned living.",
    features: [
      "Habit architecture design",
      "Sleep & recovery optimization",
      "Stress response rewiring",
      "Digital wellness protocol",
      "Community circle access",
    ],
    badge: null,
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    tagline: "Teams & Organizations",
    duration: "Ongoing",
    sessions: "Custom",
    description:
      "Bring the Serenova philosophy to your organization. Measurable improvements in team wellbeing, performance, and retention.",
    features: [
      "Team wellbeing assessment",
      "Workshops & masterclasses",
      "Leadership stress resilience",
      "Wellbeing policy consulting",
      "Quarterly reporting",
    ],
    badge: "Enterprise",
  },
  {
    id: "mind-body",
    title: "Mind & Body Alignment",
    tagline: "Somatic Integration",
    duration: "6 Weeks",
    sessions: "12 Sessions",
    description:
      "A focused program bridging the gap between mental clarity and physical vitality using somatic practices, breathwork, and mindfulness.",
    features: [
      "Somatic body-awareness work",
      "Pranayama & breathwork",
      "Guided meditation library",
      "Movement integration",
      "Weekly live sessions",
    ],
    badge: null,
  },
  {
    id: "stress-recovery",
    title: "Stress Recovery",
    tagline: "Burnout Restoration",
    duration: "10 Weeks",
    sessions: "20 Sessions",
    description:
      "Specifically designed for those navigating burnout, overwhelm, or chronic stress — a gentle yet powerful path back to yourself.",
    features: [
      "Nervous system regulation",
      "Adrenal recovery protocol",
      "Boundary & priority coaching",
      "Energy restoration practices",
      "Daily support check-ins",
    ],
    badge: "Specialist",
  },
];

export default function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="programs"
      ref={ref}
      style={{
        background: "var(--bg-primary)",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(140,107,52,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 500,
              }}
            >
              Transformation Programs
            </span>
          </motion.div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px, 4.5vw, 62px)",
                fontWeight: 300,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Choose Your Path
              <br />
              <em style={{ color: "var(--gold)" }}>to Transformation</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                maxWidth: "320px",
              }}
            >
              Every journey begins with a discovery call. Let&apos;s find the
              program that speaks to where you are.
            </motion.p>
          </div>
        </div>

        {/* Programs grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="programs-grid"
        >
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: hovered === program.id ? -4 : 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(program.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                padding: "48px 36px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: hovered === program.id ? "0 20px 40px rgba(0,0,0,0.08)" : "0 10px 30px rgba(0,0,0,0.04)",
                cursor: "pointer",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
              }}
            >
              {/* Badge */}
              {program.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    padding: "5px 12px",
                    background: "rgba(140,107,52,0.15)",
                    border: "1px solid rgba(140,107,52,0.3)",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  {program.badge}
                </div>
              )}

              {/* Tagline */}
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 500,
                  marginBottom: "16px",
                }}
              >
                {program.tagline}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}
              >
                {program.title}
              </h3>

              {/* Duration pills */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "24px",
                  marginTop: "12px",
                }}
              >
                {[program.duration, program.sessions].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div
                style={{
                  width: "30px",
                  height: "1px",
                  background: "rgba(140,107,52,0.25)",
                  marginBottom: "20px",
                }}
              />

              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "var(--text-muted)",
                  marginBottom: "28px",
                }}
              >
                {program.description}
              </p>

              {/* Features */}
              <AnimatePresence>
                {hovered === program.id && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      listStyle: "none",
                      marginBottom: "28px",
                      overflow: "hidden",
                    }}
                  >
                    {program.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: fi * 0.06 }}
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: "12px",
                          color: "var(--text-primary)",
                          padding: "6px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        <span style={{ color: "var(--gold)", fontSize: "8px" }}>◆</span>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* CTA */}
              <motion.button
                whileHover={{ gap: "12px" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  padding: 0,
                  transition: "gap 0.3s",
                }}
              >
                Learn More <ArrowRight size={14} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              fontStyle: "italic",
              color: "var(--text-muted)",
              marginBottom: "24px",
            }}
          >
            Not sure which program is right for you?
          </p>
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 40px rgba(140,107,52,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--gold)",
              padding: "14px 36px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: "2px",
            }}
          >
            Book a Free Discovery Call
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .programs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 700px) {
          .programs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
