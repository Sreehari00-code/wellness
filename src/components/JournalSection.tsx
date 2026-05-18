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
      "In a culture that glorifies busyness, learning to rest with intention is a radical — and transformative — practice.",
    readTime: "6 min read",
    date: "May 2025",
    featured: true,
  },
  {
    category: "Sleep Optimization",
    title: "The Architecture of Deep Sleep: A Science-Backed Protocol",
    excerpt:
      "How to design your sleep environment, timing, and pre-sleep rituals for truly restorative, regenerative rest.",
    readTime: "8 min read",
    date: "Apr 2025",
    featured: false,
  },
  {
    category: "Stress Management",
    title: "Rewiring Your Nervous System: Beyond Meditation",
    excerpt:
      "Somatic tools, breathwork sequences, and daily micro-practices that retrain your body's stress response at the root level.",
    readTime: "7 min read",
    date: "Apr 2025",
    featured: false,
  },
  {
    category: "Nutrition",
    title: "Eating for Energy: The Anti-Inflammatory Approach",
    excerpt:
      "Move beyond calorie counting. Understand how food becomes information for your cells, hormones, and mood.",
    readTime: "5 min read",
    date: "Mar 2025",
    featured: false,
  },
  {
    category: "Productivity & Balance",
    title: "The Integrated Life: Ending the War Between Work and Wellbeing",
    excerpt:
      "A new framework for high achievers who refuse to choose between ambition and health — because they should never have to.",
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
        background: "#F9F7F3",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-100px",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(140,107,52,0.04) 0%, transparent 70%)",
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
                Wellness Journal
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
              Insights for the
              <br />
              <em style={{ color: "#8C6B34" }}>Conscious Life</em>
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ gap: "10px" }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8C6B34",
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            marginBottom: "2px",
            border: "1px solid rgba(140,107,52,0.12)",
            cursor: "pointer",
            transition: "border-color 0.4s",
            overflow: "hidden",
          }}
          className="featured-article"
        >
          {/* Featured Image */}
          <div
            style={{
              aspectRatio: "16/10",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/journal-hero.png"
              alt="Serene morning wellness ritual with tea and lavender"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            {/* Subtle premium warm gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(240,233,222,0.3) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                padding: "6px 14px",
                background: "rgba(249,247,243,0.92)",
                border: "1px solid rgba(140,107,52,0.22)",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#8C6B34",
                fontWeight: 600,
                borderRadius: "1px",
                boxShadow: "0 4px 12px rgba(21, 61, 53, 0.05)",
                zIndex: 2,
              }}
            >
              Featured
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              padding: "60px 52px",
              background: "#F0E9DE",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
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
                  color: "#8C6B34",
                  fontWeight: 600,
                }}
              >
                {featured.category}
              </span>
              <span style={{ color: "rgba(100,85,65,0.4)", fontSize: "10px" }}>·</span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  color: "#8A7968",
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
                color: "#1C140A",
                lineHeight: 1.3,
                marginBottom: "20px",
              }}
            >
              {featured.title}
            </h3>

            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "#8A7968",
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
                  color: "#8A7968",
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
                    color: "#8C6B34",
                    fontWeight: 600,
                  }}
                >
                  Read
                </span>
                <ArrowUpRight size={14} color="#8C6B34" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
          className="articles-grid"
        >
          {rest.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, backgroundColor: "rgba(240,233,222,0.95)" }}
              style={{
                padding: "36px 28px",
                background: "#F0E9DE",
                border: "1px solid rgba(140,107,52,0.08)",
                cursor: "pointer",
                transition: "all 0.4s",
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
                    color: "#8C6B34",
                    fontWeight: 600,
                  }}
                >
                  {article.category}
                </span>
              </div>

              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#1C140A",
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
                  color: "#8A7968",
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
                  borderTop: "1px solid rgba(140,107,52,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    color: "#8A7968",
                  }}
                >
                  {article.readTime}
                </span>
                <ArrowUpRight size={14} color="rgba(140,107,52,0.5)" />
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
