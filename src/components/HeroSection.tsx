"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking (performance-optimized GPU transforms)
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);
  const contentY = useTransform(scrollY, [0, 800], [0, -40]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Art-directed line splits for perfect vertical center alignment
  const line1Words = ["Reconnect", "With", "Your"];
  const line2Words = ["Inner", "Balance"];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#060606]"
      style={{ isolation: "isolate" }}
    >
      {/* ── Background Layer (Parallax + Vignette) ── */}
      <motion.div
        className="absolute inset-0 z-0 scale-105"
        style={{ y: bgY }}
      >
        <Image
          src="/images/luxury-hero-bg.png"
          alt="Cinematic peaceful natural environment for premium wellness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.32] contrast-[1.08] saturate-[0.88]"
        />
        {/* Cinematic vignette and vertical gradient shadows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg, rgba(6,6,6,0.65) 0%, rgba(6,6,6,0.2) 50%, rgba(6,6,6,0.95) 100%),
              radial-gradient(circle at center, transparent 30%, rgba(6,6,6,0.7) 100%)
            `,
          }}
        />
      </motion.div>

      {/* ── Layered Depth Effects (Pulsing Ambient Lights) ── */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Soft gold light leak in center-right */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.28, 0.15],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[15%] w-[450px] h-[450px] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(197,168,128,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Soft earthy-green light leak in bottom-left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.22, 0.1],
            x: [0, -30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[5%] w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(95,114,95,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Grid Overlay (Subtle Awwwards structure) ── */}
      <div
        className="absolute inset-0 z-1 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(197, 168, 128, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197, 168, 128, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
        }}
      />

      {/* ── Mathematically Aligned Max-w-5xl Container System ── */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 text-center flex flex-col items-center justify-center mt-12 sm:mt-16 md:mt-20"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Luxury Kicker Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
          <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[var(--gold)]">
            Serenova Wellness Coaching
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--gold)]" />
        </motion.div>

        {/* Headline: Clean dual-line blocks for perfect axis centering */}
        <h1 className="font-serif text-[clamp(36px,6.8vw,80px)] font-light leading-[1.12] tracking-tight text-white mb-12 text-center w-full">
          {/* Line 1: Reconnect With Your */}
          <div className="block overflow-hidden pb-1 sm:pb-2">
            {line1Words.map((word, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden"
                style={{ marginRight: index === line1Words.length - 1 ? "0" : "0.24em" }}
              >
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.4 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>
          {/* Line 2: Inner Balance */}
          <div className="block overflow-hidden">
            {line2Words.map((word, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden"
                style={{ marginRight: index === line2Words.length - 1 ? "0" : "0.24em" }}
              >
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.7 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-gold-gradient italic font-normal not-italic"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>
        </h1>

        {/* Restricted paragraph width to prevent visual over-stretching */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
          className="font-sans text-[clamp(13.5px,1.4vw,16px)] text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-20 font-light"
        >
          Crafted for individuals seeking clarity, restoration, and elevated wellbeing through immersive wellness experiences that harmonize the mind, body, and inner rhythm.
        </motion.p>

        {/* Symmetrical buttons container with identical weights and heights */}
        <motion.div
          initial={{ opacity: 0, y: 52 }}
          animate={{ opacity: 1, y: 32 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto pb-0"
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 35px rgba(197, 168, 128, 0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-[280px] h-[48px] rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center transition-all duration-300"
          >
            <Link
              href="#programs"
              className="w-full h-full flex items-center justify-center font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--bg-primary)] text-center no-underline"
            >
              Start Journey
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{
              scale: 1.04,
              backgroundColor: "rgba(197, 168, 128, 0.15)",
              borderColor: "rgba(197, 168, 128, 0.8)",
              boxShadow: "0 0 30px rgba(197, 168, 128, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-[280px] h-[48px] rounded-full border border-[rgba(197,168,128,0.3)] bg-[rgba(10,10,10,0.55)] backdrop-blur-md flex items-center justify-center transition-all duration-300"
          >
            <Link
              href="#services"
              className="w-full h-full flex items-center justify-center font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-white text-center no-underline"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator (Slow elegant floating vertical mouse) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-sans text-[9px] font-semibold tracking-[0.28em] text-[var(--gold)] uppercase opacity-80">
          Scroll to Explore
        </span>
        {/* Animated vertical track */}
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-[var(--gold)] to-transparent relative overflow-hidden">
          <motion.div
            animate={{
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-[12px] bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
