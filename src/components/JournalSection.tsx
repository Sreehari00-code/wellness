"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    category: "Mindfulness",
    title: "The Art of Doing Nothing: Why Rest Is Your Most Productive Act",
    excerpt:
      "In a culture that glorifies busyness, learning to rest with biological intention is a radical — and highly therapeutic — practice.",
    readTime: "6 min read",
    date: "May 2025",
    featured: true,
  },
  {
    category: "Sleep Optimization",
    title: "Circadian Synchronization: A Science-Backed Protocol",
    excerpt:
      "How to design your light exposure, temperature cycles, and pre-sleep rituals for truly restorative, deep cellular repair.",
    readTime: "8 min read",
    date: "Apr 2025",
    featured: false,
  },
  {
    category: "Stress Management",
    title: "Vagal Recalibration: Somatic Pacing Beyond Meditation",
    excerpt:
      "Daily micro-practices, somatic release techniques, and respiratory drills that retrain your body's stress threshold.",
    readTime: "7 min read",
    date: "Apr 2025",
    featured: false,
  },
  {
    category: "Nutrition",
    title: "Mitochondrial Feeding: An Integrative Nutrition Strategy",
    excerpt:
      "Beyond standard macros. Learn how raw food elements become cellular instruction codes for thyroid, hormone, and cognitive pacing.",
    readTime: "5 min read",
    date: "Mar 2025",
    featured: false,
  },
  {
    category: "Circadian Pacing",
    title: "Ending the Chronic Burnout Cycle: A New Framework",
    excerpt:
      "An intensive guide for high-performers who refuse to select between creative leadership and physical wellbeing.",
    readTime: "9 min read",
    date: "Mar 2025",
    featured: false,
  },
];

export default function JournalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section
      id="journal"
      ref={ref}
      style={{
        background: "var(--bg-primary)",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
      className="border-b border-[var(--border)]"
    >
      {/* Soft warm-beige glow in top right */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-100px",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(197, 168, 128, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
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
            gap: "24px",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
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
                Wellness Journal
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px, 4.5vw, 62px)",
                fontWeight: 300,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Insights for the
              <br />
              <em className="text-gold-gradient italic not-italic">Sovereign Mind</em>
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.4 }}
            whileHover={{ gap: "10px" }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
              fontWeight: 600,
              transition: "gap 0.3s",
            }}
          >
            All Articles <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            marginBottom: "32px",
            border: "1px solid var(--border)",
            cursor: "pointer",
            transition: "border-color 0.4s, transform 0.3s",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          }}
          className="featured-article"
        >
          {/* Featured Image */}
          <div
            style={{
              aspectRatio: "16/10",
              position: "relative",
              overflow: "hidden",
              borderRight: "1px solid var(--border)",
            }}
          >
            <Image
              src="/images/journal-hero.png"
              alt="Serene morning wellness ritual with tea and lavender"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.75)" }}
            />
            {/* Dark gradient fade-in overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(6,6,6,0.6) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                padding: "6px 14px",
                background: "rgba(18, 18, 18, 0.95)",
                border: "1px solid var(--border)",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                borderRadius: "1px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                zIndex: 2,
              }}
            >
              Featured Text
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              padding: "60px 52px",
              background: "rgba(18, 18, 18, 0.45)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                {featured.category}
              </span>
              <span style={{ color: "rgba(197, 168, 128, 0.3)", fontSize: "10px" }}>·</span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                }}
              >
                {featured.date}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 2.5vw, 34px)",
                fontWeight: 400,
                color: "var(--text-primary)",
                lineHeight: 1.35,
                marginBottom: "20px",
              }}
            >
              {featured.title}
            </h3>

            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "13.5px",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                marginBottom: "36px",
              }}
            >
              {featured.excerpt}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                }}
              >
                {featured.readTime}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  Read Article
                </span>
                <ArrowUpRight size={14} color="var(--gold)" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="articles-grid"
        >
          {rest.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, backgroundColor: "rgba(18, 18, 18, 0.75)", borderColor: "rgba(197, 168, 128, 0.35)" }}
              style={{
                padding: "36px 28px",
                background: "rgba(18, 18, 18, 0.45)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                transition: "all 0.4s",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  {article.category}
                </span>
              </div>

              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "19px",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                  lineHeight: 1.35,
                  marginBottom: "14px",
                }}
              >
                {article.title}
              </h4>

              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "12px",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                  marginBottom: "24px",
                }}
              >
                {article.excerpt}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                  }}
                >
                  {article.readTime}
                </span>
                <ArrowUpRight size={14} color="rgba(197, 168, 128, 0.5)" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .featured-article {
            grid-template-columns: 1fr !important;
          }
          .articles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 600px) {
          .articles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
