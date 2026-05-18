"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Years of Practice" },
  { value: "2,400+", label: "Lives Transformed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "35+", label: "Global Retreats" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "#F9F7F3",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-200px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(140,107,52,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "#8C6B34",
            }}
          />
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#8C6B34",
              fontWeight: 500,
            }}
          >
            About the Coach
          </span>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            {/* Coach portrait */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                position: "relative",
                overflow: "hidden",
                borderRadius: "2px",
              }}
            >
              <Image
                src="/images/coach-portrait.png"
                alt="Sophia Laurent — Wellness Coach"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              {/* Subtle warm overlay at bottom for fade */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "30%",
                  background: "linear-gradient(to top, rgba(240,233,222,0.4), transparent)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                padding: "24px 28px",
                background: "rgba(240,233,222,0.95)",
                border: "1px solid rgba(140,107,52,0.2)",
                maxWidth: "220px",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#4A3B28",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                &ldquo;Wellness is not a destination — it is a way of
                living.&rdquo;
              </p>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10px",
                  color: "#8C6B34",
                  letterSpacing: "0.15em",
                }}
              >
                — Sophia Laurent
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Story */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4.5vw, 58px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "#1C140A",
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}
            >
              A Philosophy Born From{" "}
              <em style={{ color: "#8C6B34" }}>Personal Transformation</em>
            </motion.h2>

            {["After years navigating burnout, chronic stress, and disconnection, I found my way back to myself through an integrative approach to wellness — one that honours the body, mind, and spirit as a unified whole.",
              "Today, I guide high-achieving individuals and teams toward a life of sustainable vitality. My methodology is grounded in evidence-based practices, ancient wisdom traditions, and deep listening — because real transformation begins within.",
              "Every program I offer is a personalized journey. There are no generic prescriptions here — only genuine partnership in the pursuit of your most vital, aligned, and purposeful self."
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "#8A7968",
                  marginBottom: "20px",
                  fontWeight: 400,
                }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              style={{
                marginTop: "40px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(140,107,52,0.15)",
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
              }}
            >
              {["IIN Certified Health Coach", "Mind-Body Medicine", "Positive Psychology", "Somatic Healing"].map((cred) => (
                <span
                  key={cred}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#8C6B34",
                    fontWeight: 500,
                    padding: "6px 14px",
                    border: "1px solid rgba(140,107,52,0.2)",
                    borderRadius: "1px",
                  }}
                >
                  {cred}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            marginTop: "100px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(140,107,52,0.12)",
            border: "1px solid rgba(140,107,52,0.12)",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "48px 32px",
                textAlign: "center",
                background: "#EBE4D8",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 300,
                  color: "#8C6B34",
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8A7968",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
