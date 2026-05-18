"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transform on background image
  const yBg = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={containerRef}
      className="pillar-item-row"
      style={{
        position: "relative",
        height: "clamp(600px, 85vh, 800px)",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: isEven ? "flex-start" : "flex-end",
        backgroundColor: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Background Image Container */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          y: yBg,
          height: "120%", // Extra height to allow room for parallax shifting
          width: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src={pillar.image}
          alt={`${pillar.title} - ${pillar.subtitle}`}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </motion.div>

      {/* Luxury Gradient Overlay connecting to background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isEven
            ? "linear-gradient(90deg, rgba(240,233,222,0.94) 0%, rgba(240,233,222,0.72) 45%, transparent 100%)"
            : "linear-gradient(-90deg, rgba(240,233,222,0.94) 0%, rgba(240,233,222,0.72) 45%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Floating Premium Copy Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          zIndex: 5,
          width: "min(560px, calc(100% - 40px))",
          margin: isEven ? "0 0 0 8%" : "0 8% 0 0",
          padding: "48px 44px",
          background: "rgba(249, 247, 243, 0.88)",
          backdropFilter: "blur(24px)",
          border: "1px solid var(--border)",
          boxShadow: "0 24px 70px rgba(74, 59, 40, 0.08)",
          borderRadius: "4px",
        }}
        className="glass-copy-card"
      >
        {/* Top bar with tag & number */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "36px",
          }}
        >
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 700,
              border: "1px solid var(--border)",
              padding: "4px 12px",
              background: "rgba(240,233,222,0.3)",
              borderRadius: "1px",
            }}
          >
            {pillar.tag}
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "24px",
              fontStyle: "italic",
              color: "var(--gold-bright)",
              fontWeight: 300,
            }}
          >
            {pillar.number}
          </span>
        </div>

        {/* Custom Icon Glyph */}
        <div
          style={{
            fontSize: "28px",
            color: "var(--gold)",
            opacity: 0.7,
            marginBottom: "16px",
            lineHeight: 1,
          }}
        >
          {pillar.icon}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 300,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            marginBottom: "6px",
          }}
        >
          {pillar.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "9.5px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold-light)",
            fontWeight: 600,
            marginBottom: "28px",
          }}
        >
          {pillar.subtitle}
        </p>

        {/* Golden Rule Line */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "linear-gradient(90deg, var(--gold), transparent)",
            marginBottom: "28px",
          }}
        />

        {/* Description Body */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "14px",
            lineHeight: 1.85,
            color: "var(--text-muted)",
            fontWeight: 400,
          }}
        >
          {pillar.description}
        </p>

        {/* Index counter at bottom */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              color: "var(--gold-bright)",
              letterSpacing: "0.15em",
            }}
          >
            {pillar.number} / 05
          </span>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "var(--border)",
            }}
          />
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .pillar-item-row {
            height: auto !important;
            min-height: 520px;
            padding: 80px 20px !important;
            justify-content: center !important;
          }
          .glass-copy-card {
            margin: 0 !important;
            padding: 32px 24px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function PillarsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="pillars"
      style={{
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Section Header ───────────────────────────────────────── */}
      <div
        ref={headerRef}
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "140px 40px 80px",
        }}
      >
        <div
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
            Wellness Pillars
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 5vw, 68px)",
              fontWeight: 300,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Five Dimensions
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>of Wholeness</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "14.5px",
              lineHeight: 1.8,
              color: "var(--text-muted)",
              maxWidth: "340px",
            }}
          >
            True wellness emerges when all dimensions of the self are tended to
            with equal care, presence, and intentionality.
          </motion.p>
        </div>
      </div>

      {/* ── Pillars Stack: Beautiful Parallax alternated cinematic rows ── */}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {pillars.map((pillar, index) => (
          <PillarCard key={pillar.title} pillar={pillar} index={index} />
        ))}
      </div>
    </section>
  );
}
