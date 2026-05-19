"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was constantly exhausted and struggling with severe back stiffness. The somatic pacing, postural integration, and breathing practices thoroughly restored my physical energy and aligned my daily focus.",
    author: "Priya Sharma",
    title: "Lead Tech Architect, Bangalore",
    duration: "12-Week Somatic Restoration",
    image: "/images/transform-1.jpg",
  },
  {
    quote:
      "Being in active law enforcement, my sleep rhythms were completely broken by irregular shifts. Sophia's circadian pacing protocol and vagal nerve activation saved me from chronic fatigue.",
    author: "Kavitha Nair",
    title: "Deputy Superintendent, Chennai",
    duration: "Circadian Rhythm Alignment",
    image: "/images/transform-2.jpg",
  },
  {
    quote:
      "My visceral health and breathing patterns had deteriorated. Through metabolic balancing, deep somatic recovery, and structured nervous system pacing, I gained absolute clarity and cellular vitality.",
    author: "Dr. Rajesh Krishnan",
    title: "Chief Sanskrit Scholar, Kochi",
    duration: "Metabolic & Somatic Pacing",
    image: "/images/transform-3.jpg",
  },
  {
    quote:
      "I had hit a profound plateau in my daily physical training. Recalibrating my sleep architecture, chronotype, and micro-nutrients restored my vitality. I feel lighter, stronger, and completely grounded.",
    author: "Meera Deshmukh",
    title: "Somatic Yoga Educator, Pune",
    duration: "Nervous System Regulation",
    image: "/images/transform-4.jpg",
  },
  {
    quote:
      "Managing high-stress corporate environments left my nervous system in constant fight-or-flight. Simple, daily somatic decompression rituals shifted me back into sustainable health and deep peace.",
    author: "Anjali Menon",
    title: "HR Director, Hyderabad",
    duration: "Corporate Burnout Recovery",
    image: "/images/transform-5.jpg",
  },
  {
    quote:
      "The intensive shifts in the ICU left my circadian rhythms shattered and my metabolic energy drained. Sophia's somatic pacing and chronobiology protocols completely restored my cellular endurance.",
    author: "Dr. Sunitha Rao",
    title: "Chief Cardiologist, Mumbai",
    duration: "Chronobiology & Sleep Reset",
    image: "/images/transform-6.jpg",
  },
  {
    quote:
      "I had tried endless skin treatments for my stress-induced acne. Sophia looked deeper, targeting gut inflammation, nervous system regulation, and lymphatic drainage. The results speak for themselves.",
    author: "Kiran Reddy",
    title: "Research Biochemist, Pune",
    duration: "Lymphatic & Gut Reclamation",
    image: "/images/transform-7.jpg",
  },
  {
    quote:
      "Years of high-stress operational deadlines took a massive toll on my cardiovascular health and weight. Rebuilding my somatic baseline and metabolic pacing completely transformed my vitality.",
    author: "Madhavan Pillai",
    title: "Operations Director, Kochi",
    duration: "Metabolic Pacing Pathway",
    image: "/images/transform-8.jpg",
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
        background: "var(--bg-secondary)",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
      className="border-b border-[var(--border)]"
    >
      {/* Large background quote mark */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "60px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "300px",
          color: "rgba(197, 168, 128, 0.03)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </div>

      {/* Muted green ambient glow in corner */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-100px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(95, 114, 95, 0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

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
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Realised <em className="text-gold-gradient italic not-italic">Transformation</em>
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
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--gold)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
              className="hover:bg-[rgba(197,168,128,0.08)] hover:border-[rgba(197,168,128,0.35)]"
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
                border: "1px solid rgba(197, 168, 128, 0.25)",
                background: "rgba(197, 168, 128, 0.08)",
                color: "var(--gold)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
              className="hover:bg-[rgba(197,168,128,0.15)] hover:border-[rgba(197,168,128,0.4)]"
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
                gridTemplateColumns: "1fr 320px",
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
                    fontSize: "clamp(24px, 3.5vw, 36px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.45,
                    color: "var(--text-primary)",
                    marginBottom: "48px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  {/* Monogram avatar */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(197,168,128,0.15), rgba(18,18,18,0.8))",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "18px",
                      color: "var(--gold)",
                    }}
                  >
                    {testimonials[current].author.charAt(0)}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "14.5px",
                        fontWeight: 600,
                        color: "var(--gold)",
                        marginBottom: "4px",
                      }}
                    >
                      {testimonials[current].author}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "12px",
                        color: "var(--text-muted)",
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
                  padding: "32px 28px",
                  background: "rgba(18, 18, 18, 0.65)",
                  border: "1px solid var(--border)",
                  alignSelf: "flex-start",
                  backdropFilter: "blur(12px)",
                  borderRadius: "4px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                {testimonials[current].image && (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1.1/1",
                      marginBottom: "24px",
                      overflow: "hidden",
                      border: "1px solid rgba(197, 168, 128, 0.15)",
                      borderRadius: "2px",
                    }}
                  >
                    <img
                      src={testimonials[current].image}
                      alt={`${testimonials[current].author} transformation`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.95) contrast(1.05)",
                      }}
                    />
                    {/* Before & After Badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        left: "8px",
                        right: "8px",
                        display: "flex",
                        justifyContent: "space-between",
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "8.5px",
                        letterSpacing: "0.15em",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        background: "rgba(10, 10, 10, 0.8)",
                        padding: "4px 10px",
                        borderRadius: "1px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      <span>Before</span>
                      <span>After</span>
                    </div>
                  </div>
                )}
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "16px",
                    fontWeight: 600,
                  }}
                >
                  Completed Path
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "19px",
                    color: "var(--text-primary)",
                    marginBottom: "28px",
                    lineHeight: 1.4,
                  }}
                >
                  {testimonials[current].duration}
                </p>
                <div
                  style={{
                    width: "30px",
                    height: "1px",
                    background: "var(--border)",
                    marginBottom: "24px",
                  }}
                />

                {/* Rating */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "var(--gold)", fontSize: "14px" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  Verified physical &amp; somatic transformation
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
                background: i === current ? "var(--gold)" : "rgba(197, 168, 128, 0.25)",
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
        @media (max-width: 900px) {
          .testimonial-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
