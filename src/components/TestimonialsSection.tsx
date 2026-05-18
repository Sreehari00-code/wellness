"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Sophia changed the trajectory of my life. I came to her exhausted, disconnected, and running on empty. Within three months, I had rebuilt my relationship with myself from the ground up.",
    author: "Elena Marchetti",
    title: "Creative Director, Milan",
    duration: "12-Week 1:1 Program",
  },
  {
    quote:
      "I was deeply skeptical of wellness coaching. What I found was something entirely different — a rigorous, evidence-based approach that honoured my intelligence while addressing the root causes of my burnout.",
    author: "James Whitfield",
    title: "Investment Partner, London",
    duration: "Stress Recovery Program",
  },
  {
    quote:
      "The corporate program transformed not just our team's wellbeing metrics, but our entire organizational culture. We are sharper, calmer, and more resilient than ever before.",
    author: "Amara Osei",
    title: "People Director, Amsterdam",
    duration: "Corporate Wellness",
  },
  {
    quote:
      "For the first time in a decade, I genuinely look forward to mornings. The Mind & Body Alignment program gave me practices I'll carry for life — not just temporary fixes.",
    author: "Priya Nair",
    title: "Surgeon & Mother, Dubai",
    duration: "Mind & Body Alignment",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: "#F0E9DE",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large background quote mark */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "60px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "300px",
          color: "rgba(140,107,52,0.07)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </div>

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "80px",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <div>
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
              <div style={{ width: "40px", height: "1px", background: "#8C6B34" }} />
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
                Client Stories
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px, 4.5vw, 62px)",
                fontWeight: 300,
                color: "#1C140A",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Lives <em style={{ color: "#8C6B34" }}>Transformed</em>
            </motion.h2>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{ display: "flex", gap: "12px" }}
          >
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid rgba(140,107,52,0.3)",
                background: "transparent",
                color: "#8C6B34",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
              className="nav-btn"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid rgba(140,107,52,0.3)",
                background: "rgba(140,107,52,0.08)",
                color: "#8C6B34",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Testimonial display */}
        <div style={{ position: "relative", minHeight: "340px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 300px",
                gap: "80px",
                alignItems: "start",
              }}
              className="testimonial-layout"
            >
              {/* Quote */}
              <div>
                <blockquote
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(24px, 3.5vw, 40px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.45,
                    color: "#1C140A",
                    marginBottom: "48px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  {/* Avatar placeholder */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(140,107,52,0.2), rgba(240,233,222,0.8))",
                      border: "1px solid rgba(140,107,52,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "18px",
                      color: "#8C6B34",
                    }}
                  >
                    {testimonials[current].author.charAt(0)}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#4A3B28",
                        marginBottom: "4px",
                      }}
                    >
                      {testimonials[current].author}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "12px",
                        color: "#8A7968",
                      }}
                    >
                      {testimonials[current].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Side card */}
              <div
                style={{
                  padding: "40px 32px",
                  background: "#F0E9DE",
                  border: "1px solid rgba(140,107,52,0.15)",
                  alignSelf: "flex-start",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#8C6B34",
                    marginBottom: "16px",
                    fontWeight: 500,
                  }}
                >
                  Program Completed
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                    color: "#1C140A",
                    marginBottom: "32px",
                    lineHeight: 1.4,
                  }}
                >
                  {testimonials[current].duration}
                </p>
                <div
                  style={{
                    width: "30px",
                    height: "1px",
                    background: "rgba(140,107,52,0.3)",
                    marginBottom: "24px",
                  }}
                />

                {/* Rating */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#8C6B34", fontSize: "14px" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "11px",
                    color: "#8A7968",
                    lineHeight: 1.6,
                  }}
                >
                  Verified client experience
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "60px",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === current ? "32px" : "8px",
                height: "2px",
                background: i === current ? "#8C6B34" : "rgba(140,107,52,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                borderRadius: "1px",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-layout {
          @media (max-width: 900px) {
            grid-template-columns: 1fr !important;
          }
        }
        .nav-btn:hover {
          background: rgba(140, 107, 52, 0.1) !important;
        }
      `}</style>
    </section>
  );
}
