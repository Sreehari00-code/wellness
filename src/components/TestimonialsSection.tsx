"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      style={{
        width: "clamp(280px, 25vw, 360px)",
        flexShrink: 0,
        padding: "clamp(18px, 2vw, 24px) clamp(16px, 1.8vw, 20px)",
        background: "var(--bg-primary)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        whiteSpace: "normal",
      }}
    >
      {testimonial.image && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1.2/1",
            overflow: "hidden",
            border: "1px solid rgba(197, 168, 128, 0.15)",
            borderRadius: "2px",
          }}
        >
          <img
            src={testimonial.image}
            alt={`${testimonial.author} transformation`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.95) contrast(1.05)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "8px",
              right: "8px",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "8px",
              letterSpacing: "0.15em",
              color: "var(--gold)",
              textTransform: "uppercase",
              fontWeight: 600,
              background: "rgba(10, 10, 10, 0.8)",
              padding: "4px 8px",
              borderRadius: "1px",
            }}
          >
            <span>Before</span>
            <span>After</span>
          </div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between", gap: "16px" }}>
        <div>
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "8.5px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 600,
              display: "block",
              marginBottom: "6px",
            }}
          >
            {testimonial.duration}
          </span>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "14.5px",
              fontStyle: "italic",
              lineHeight: "1.5",
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid var(--border)", paddingTop: "12px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(197,168,128,0.15), rgba(18,18,18,0.8))",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "13px",
              color: "var(--gold)",
            }}
          >
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <h5
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--gold)",
                margin: 0,
              }}
            >
              {testimonial.author}
            </h5>
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "9px",
                color: "var(--text-muted)",
                display: "block",
              }}
            >
              {testimonial.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: "var(--bg-secondary)",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
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

      <div style={{ maxWidth: "100%", margin: "0 auto", boxSizing: "border-box" }}>
        {/* Header */}
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto 48px auto",
            padding: "0 clamp(20px, 4vw, 40px)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
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
              margin: 0,
            }}
          >
            Realised <em className="text-gold-gradient italic not-italic">Transformation</em>
          </motion.h2>
        </div>

        {/* Infinite Marquee */}
        <div className="w-full overflow-hidden py-4 relative">
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "clamp(32px, 8vw, 120px)",
              background: "linear-gradient(90deg, var(--bg-secondary) 0%, transparent 100%)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: "clamp(32px, 8vw, 120px)",
              background: "linear-gradient(-90deg, var(--bg-secondary) 0%, transparent 100%)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />

          <div className="marquee-track">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={`first-${idx}`} testimonial={t} />
            ))}
            {testimonials.map((t, idx) => (
              <TestimonialCard key={`second-${idx}`} testimonial={t} />
            ))}
          </div>

          <style>{`
            @keyframes marqueeScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .marquee-track {
              display: flex;
              gap: clamp(16px, 2.5vw, 28px);
              width: max-content;
              animation: marqueeScroll 60s linear infinite;
              padding: 10px 0;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
