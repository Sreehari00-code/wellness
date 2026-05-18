"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cta"
      ref={ref}
      style={{
        position: "relative",
        padding: "180px 40px",
        textAlign: "center",
        overflow: "hidden",
        background: "#F0E9DE",
      }}
    >
      {/* Layered background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(140,107,52,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative lines */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          width: "15%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(140,107,52,0.3))",
          transformOrigin: "left",
        }}
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          width: "15%",
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(140,107,52,0.3), transparent)",
          transformOrigin: "right",
        }}
      />

      {/* Corner decorations */}
      {[
        { top: "60px", left: "60px" },
        { top: "60px", right: "60px" },
        { bottom: "60px", left: "60px" },
        { bottom: "60px", right: "60px" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + i * 0.1 }}
          style={{
            position: "absolute",
            ...pos,
            width: "20px",
            height: "20px",
            borderTop: i < 2 ? "1px solid rgba(140,107,52,0.2)" : "none",
            borderBottom: i >= 2 ? "1px solid rgba(140,107,52,0.2)" : "none",
            borderLeft: i % 2 === 0 ? "1px solid rgba(140,107,52,0.2)" : "none",
            borderRight: i % 2 === 1 ? "1px solid rgba(140,107,52,0.2)" : "none",
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            justifyContent: "center",
            marginBottom: "40px",
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
            Begin Today
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "#8C6B34",
            }}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(44px, 7vw, 84px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#1C140A",
            letterSpacing: "-0.02em",
            marginBottom: "32px",
          }}
        >
          Your Most Vital
          <br />
          <em
            style={{
              background:
                "linear-gradient(135deg, #8C6B34 0%, #A87E42 40%, #C09A5A 70%, #8C6B34 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Chapter Awaits
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "16px",
            lineHeight: 1.9,
            color: "#8A7968",
            maxWidth: "520px",
            margin: "0 auto 56px",
          }}
        >
          Every transformation begins with a single step. A free 30-minute
          discovery call — no obligation, no pressure. Simply a conversation
          about where you are and where you dream of being.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow:
                "0 12px 60px rgba(140,107,52,0.35), 0 0 0 1px rgba(140,107,52,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "linear-gradient(135deg, #8C6B34, #A87E42)",
              color: "#F9F7F3",
              border: "none",
              padding: "18px 48px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: "2px",
            }}
          >
            Book Discovery Call
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.04,
              borderColor: "rgba(231,217,200,0.5)",
              color: "#4A3B28",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "transparent",
              border: "1px solid rgba(100,85,65,0.4)",
              color: "#8A7968",
              padding: "18px 48px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: "2px",
              transition: "all 0.3s",
            }}
          >
            View Programs
          </motion.button>
        </motion.div>

        {/* Reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "14px",
            fontStyle: "italic",
            color: "rgba(100,85,65,0.6)",
            marginTop: "36px",
          }}
        >
          Complimentary · No commitment required · Completely confidential
        </motion.p>
      </div>
    </section>
  );
}
