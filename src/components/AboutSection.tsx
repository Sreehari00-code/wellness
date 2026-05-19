"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Years of Practice" },
  { value: "2,400+", label: "Lives Transformed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "35+", label: "Global Retreats" },
];

function Counter({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const numericString = value.replace(/[^0-9]/g, "");
    const target = parseInt(numericString, 10);
    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const suffix = value.replace(/[0-9,]/g, "");
    const hasComma = value.includes(",");

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      const currentVal = Math.floor(easeProgress * target);

      const formattedVal = hasComma
        ? currentVal.toLocaleString()
        : currentVal.toString();

      setDisplayValue(`${formattedVal}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, inView]);

  return <>{displayValue}</>;
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "var(--bg-primary)",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        position: "relative",
        overflow: "hidden",
      }}
      className="border-b border-[var(--border)]"
    >
      {/* Subtle background earth-green accent glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-200px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(95, 114, 95, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Muted gold glow on right */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197, 168, 128, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 40px)",
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
            marginBottom: "clamp(40px, 6vw, 80px)",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--gold)",
            }}
          />
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
            About the Coach
          </span>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
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
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src="/images/coach-portrait.png"
                alt="Sophia Laurent — Wellness Coach"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.85) contrast(1.05)" }}
              />
              {/* Subtle dark overlay at bottom for cinematic fade */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "35%",
                  background: "linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Floating luxury quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              style={{
                position: "absolute",
                bottom: "clamp(-15px, -1vw, -10px)",
                right: "clamp(-15px, -1vw, -10px)",
                padding: "clamp(12px, 2.5vw, 18px) clamp(14px, 3vw, 22px)",
                background: "rgba(18, 18, 18, 0.85)",
                border: "1px solid var(--border)",
                maxWidth: "clamp(170px, 45vw, 220px)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(11.5px, 2.5vw, 14.5px)",
                  fontStyle: "italic",
                  color: "#FFFFFF",
                  lineHeight: 1.6,
                  marginBottom: "clamp(8px, 1.5vw, 12px)",
                }}
              >
                &ldquo;Wellness is not a destination — it is a way of living with sovereignty.&rdquo;
              </p>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(8px, 1.5vw, 9px)",
                  color: "var(--gold)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
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
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "var(--text-primary)",
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}
            >
              A Philosophy Born From{" "}
              <em className="text-gold-gradient italic not-italic">Personal Sovereignty</em>
            </motion.h2>

            {["After years navigating burnout, chronic stress, and spiritual disconnection, I found my way back to myself through an integrative approach to wellness — one that honours the body, mind, and spirit as a unified sovereign whole.",
              "Today, I guide high-achieving individuals and teams toward a life of sustainable vitality. My methodology is grounded in evidence-based neurobiology, ancient somatic traditions, and deep listening — because real transformation begins within.",
              "Every program I offer is a personalized, high-touch journey. There are no generic templates here — only genuine partnership in the pursuit of your most vital, aligned, and purposeful self."
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "14.5px",
                  lineHeight: 1.85,
                  color: "var(--text-muted)",
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
                borderTop: "1px solid var(--border)",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {["IIN Certified Health Coach", "Mind-Body Medicine", "Positive Psychology", "Somatic Healing"].map((cred) => (
                <span
                  key={cred}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold-bright)",
                    fontWeight: 600,
                    padding: "6px 14px",
                    border: "1px solid var(--border)",
                    borderRadius: "1px",
                    background: "rgba(10, 10, 10, 0.85)",
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
            marginTop: "clamp(60px, 8vw, 100px)",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
          className="stats-grid animate-gpu"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "clamp(16px, 3vw, 48px) clamp(4px, 1.5vw, 32px)",
                textAlign: "center",
                background: "var(--bg-card)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(18px, 4.5vw, 52px)",
                  fontWeight: 300,
                  color: "var(--gold)",
                  marginBottom: "4px",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                <Counter value={stat.value} inView={inView} />
              </div>
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(8px, 1.2vw, 10px)",
                  letterSpacing: "clamp(0.04em, 1.8vw, 0.2em)",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
