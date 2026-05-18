"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  { value: "2.4k+", label: "clients guided" },
  { value: "98%", label: "satisfaction" },
  { value: "12+", label: "years practice" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
      const bg = el.querySelector(".hero-bg") as HTMLElement;
      if (bg) {
        bg.style.transform = `translate(${x * 12}px, ${y * 8}px) scale(1.04)`;
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="hero-shell">
      {/* Background with subtle parallax */}
      <div className="hero-bg">
        <Image
          className="hero-bg-image"
          src="/images/hero-bg.png"
          alt="Calming wellness studio interior with warm morning light"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Luxury atmosphere overlay */}
      <div className="hero-overlay" />
      <div className="hero-grid" />

      {/* Decorative ambient glows */}
      <div className="hero-glow-right" />
      <div className="hero-glow-left" />

      {/* Content */}
      <motion.div
        className="hero-kicker"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="line" />
        <Sparkles size={13} className="text-[#8C6B34]" />
        <strong>Premium Wellness Studio</strong>
        <span className="line" />
      </motion.div>

      <div className="hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Mindful coaching for modern lives
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif"
        >
          Create your <em className="text-gold-gradient font-normal not-italic">calm.</em>
        </motion.h1>

        <motion.p
          className="hero-quote font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          &ldquo;Small rituals create lasting balance.&rdquo;
        </motion.p>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          A fresh coaching experience for people who want calmer routines,
          stronger energy, and a life that feels intentionally designed.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="#programs" className="hero-primary">
            Start your plan
            <ArrowRight size={16} />
          </Link>
          <Link href="#pillars" className="hero-secondary">
            View the method
          </Link>
        </motion.div>
      </div>

      {/* Stats box */}
      <motion.div
        className="hero-highlights card-luxury"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.74, ease: [0.22, 1, 0.36, 1] }}
      >
        {highlights.map((item) => (
          <div key={item.label} className="highlight-item">
            <strong className="font-serif">{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        .hero-shell {
          min-height: 100svh;
          position: relative;
          display: grid;
          place-items: center;
          isolation: isolate;
          overflow: hidden;
          padding: 120px 28px 130px;
          background-color: var(--bg-primary);
        }

        .hero-bg {
          position: absolute;
          inset: -4%;
          z-index: 0;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .hero-bg-image {
          filter: brightness(0.96) contrast(0.99);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(249, 247, 243, 0.72) 0%,
            rgba(249, 247, 243, 0.65) 60%,
            rgba(249, 247, 243, 0.85) 100%
          );
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(140, 107, 52, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140, 107, 52, 0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%);
          opacity: 0.65;
        }

        .hero-glow-right {
          position: absolute;
          top: 10%;
          right: 5%;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 126, 66, 0.09) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-glow-left {
          position: absolute;
          bottom: 10%;
          left: -5%;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(240, 233, 222, 0.6) 0%, transparent 70%);
          filter: blur(70px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-kicker {
          position: absolute;
          top: 100px;
          left: 0;
          right: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 0 24px;
          color: var(--gold);
        }

        .hero-kicker .line {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }

        .hero-kicker .line:last-child {
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .hero-kicker strong {
          font-family: "Manrope", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(100%, 820px);
          text-align: center;
          margin: 40px auto 0;
        }

        .hero-eyebrow {
          margin-bottom: 20px;
          color: var(--cognac);
          font-family: "Manrope", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        h1 {
          font-size: clamp(54px, 7.5vw, 96px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 24px;
          text-wrap: balance;
        }

        .hero-quote {
          width: fit-content;
          max-width: 600px;
          margin: 0 auto 24px;
          padding: 10px 24px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: rgba(240, 233, 222, 0.45);
          color: var(--cognac);
          font-size: clamp(18px, 2.2vw, 26px);
          font-style: italic;
          line-height: 1.3;
          backdrop-filter: blur(10px);
        }

        .hero-copy {
          max-width: 600px;
          margin: 0 auto 40px;
          color: var(--text-muted);
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.8;
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-primary {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 2px;
          padding: 0 32px;
          font-family: "Manrope", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          color: #F9F7F3;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          box-shadow: 0 10px 30px var(--gold-dim);
          cursor: pointer;
        }

        .hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px var(--gold-dim);
        }

        .hero-secondary {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          padding: 0 32px;
          font-family: "Manrope", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--text-primary);
          background: rgba(240, 233, 222, 0.6);
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .hero-secondary:hover {
          background: rgba(240, 233, 222, 0.85);
          transform: translateY(-2px);
        }

        .hero-highlights {
          width: min(760px, calc(100% - 40px));
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          overflow: hidden;
          border-radius: 4px;
          margin-top: 60px;
        }

        .highlight-item {
          padding: 24px 16px;
          display: grid;
          gap: 4px;
          text-align: center;
          border-right: 1px solid var(--border);
        }

        .highlight-item:last-child {
          border-right: none;
        }

        .highlight-item strong {
          color: var(--gold);
          font-size: clamp(26px, 3vw, 36px);
          line-height: 1;
          font-weight: 300;
        }

        .highlight-item span {
          color: var(--text-muted);
          font-family: "Manrope", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .hero-shell {
            padding: 140px 20px 80px;
          }

          .hero-content {
            margin-top: 60px;
            text-align: center;
          }

          h1 {
            font-size: clamp(44px, 10vw, 68px);
          }

          .hero-quote {
            padding: 8px 18px;
            font-size: 16px;
          }

          .hero-actions {
            flex-direction: column;
            gap: 12px;
          }

          .hero-primary,
          .hero-secondary {
            width: 100%;
          }

          .hero-highlights {
            grid-template-columns: 1fr;
            border-radius: 4px;
          }

          .highlight-item {
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding: 16px;
          }

          .highlight-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
