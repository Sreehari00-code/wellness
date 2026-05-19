"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Sparkles, Compass, Shield, Heart, ArrowUpRight, Wind, Sun } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  ctaText: string;
  icon: React.ReactNode;
  imagePath: string;
  index: number;
}

function ServiceCard({
  number,
  title,
  description,
  ctaText,
  icon,
  imagePath,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.0, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-between"
      style={{
        borderRadius: "24px",
        border: "1px solid rgba(197, 168, 128, 0.12)",
        backgroundColor: "rgba(18, 18, 18, 0.45)",
        backdropFilter: "blur(24px)",
        padding: "clamp(24px, 4vw, 40px)", // Mobile: 24px (p-6), Desktop: 40px (p-10)
        position: "relative",
        overflow: "hidden",
        minHeight: "clamp(520px, 45vw, 600px)",
        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.5s, box-shadow 0.5s",
      }}
    >
      {/* Soft background ambient radial glow */}
      <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(197,168,128,0.03)_0%,transparent_70%)] blur-[80px] pointer-events-none group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(95,114,95,0.03)_0%,transparent_70%)] blur-[80px] pointer-events-none group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Top Header Row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "32px", // Spacious 32px margin below icon row
        }}
      >
        {/* Rounded dark green icon container */}
        <div className="w-12 h-12 rounded-full bg-[rgba(95,114,95,0.14)] border border-[rgba(95,114,95,0.22)] flex items-center justify-center text-[var(--gold)] group-hover:scale-110 group-hover:bg-[rgba(95,114,95,0.22)] group-hover:border-[rgba(197,168,128,0.4)] transition-all duration-500 ease-[0.22,1,0.36,1]">
          {icon}
        </div>
        
        {/* Large service number in serif */}
        <span className="font-serif italic text-4xl lg:text-5xl font-light text-[var(--gold)]/10 group-hover:text-[var(--gold)]/25 select-none pointer-events-none transition-colors duration-500">
          {number}
        </span>
      </div>

      {/* Cinematic Image Container */}
      <div
        className="aspect-[16/10]"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: "20px", // Consistent elegant rounded image corners
          marginBottom: "32px", // Spacious 32px margin below image
          border: "1px solid rgba(255, 255, 255, 0.05)",
          backgroundColor: "rgba(30, 30, 30, 0.5)",
        }}
      >
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,18,18,0.7)] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
        <motion.div
          className="w-full h-full relative"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={imagePath}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-all duration-700 filter brightness-[0.85] contrast-[1.05] group-hover:brightness-100 group-hover:contrast-100"
          />
        </motion.div>
      </div>

      {/* Title */}
      <div style={{ marginBottom: "16px" }}>
        <h3 className="font-serif text-2xl lg:text-3xl font-light text-white tracking-tight leading-snug group-hover:text-[var(--gold-light)] transition-colors duration-500">
          {title}
        </h3>
      </div>

      {/* Description & CTA */}
      <div className="mt-auto">
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "14px",
            lineHeight: "1.8", // Highly readable line height
            color: "var(--text-muted)",
            marginBottom: "32px", // Spacious 32px margin below text
            fontWeight: 300,
            maxWidth: "100%",
          }}
          className="group-hover:text-white/80 transition-colors duration-500"
        >
          {description}
        </p>
        
        <div className="flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.22em] text-[var(--gold)] uppercase group-hover:gap-3 transition-all duration-300">
          <span>{ctaText}</span>
          <ArrowUpRight size={13} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      number: "01",
      title: "Wellness Coaching",
      description: "A complete mind-body reset with weekly coaching, rituals, reflection, and measurable growth.",
      ctaText: "Explore Ritual",
      icon: <Heart size={20} />,
      imagePath: "/images/service-coaching.png",
    },
    {
      number: "02",
      title: "Meditation Guidance",
      description: "Guided breathwork, stillness practices, and nervous-system support built around your real life.",
      ctaText: "Learn More",
      icon: <Compass size={20} />,
      imagePath: "/images/service-meditation.png",
    },
    {
      number: "03",
      title: "Nutrition Planning",
      description: "Grounded wellness nutrition rhythms that restore energy without rigid rules.",
      ctaText: "Discover Care",
      icon: <Sparkles size={20} />,
      imagePath: "/images/service-nutrition.png",
    },
    {
      number: "04",
      title: "Stress Management",
      description: "Somatic tools, decompression rituals, and mindful systems for sustained calm.",
      ctaText: "Explore Ritual",
      icon: <Wind size={20} />,
      imagePath: "/images/service-stress.png",
    },
    {
      number: "05",
      title: "Lifestyle Transformation",
      description: "Daily habit transformation focused on sleep, movement, clarity, and emotional balance.",
      ctaText: "Learn More",
      icon: <Shield size={20} />,
      imagePath: "/images/service-lifestyle.png",
    },
    {
      number: "06",
      title: "Holistic Healing",
      description: "Gentle integrative wellness practices that reconnect habits, environment, energy, and purpose.",
      ctaText: "Discover Care",
      icon: <Sun size={20} />,
      imagePath: "/images/service-healing.png",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "linear-gradient(to bottom, #060606, #090b09, #070707)",
        paddingTop: "clamp(80px, 8vw, 128px)", // py-20 (80px) on mobile, py-32 (128px) on desktop
        paddingBottom: "clamp(80px, 8vw, 128px)",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Luxury Background Accents & Glow Lighting */}
      <div className="absolute top-1/4 left-1/10 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(95,114,95,0.05)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(197,168,128,0.04)_0%,transparent_70%)] blur-[90px] pointer-events-none" />

      {/* Centered w-full Container aligning exactly to 1280px (max-w-7xl) grid */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px", // Exact max-w-7xl centered container
          margin: "0 auto", // Mathematically centers the section
          padding: "0 clamp(20px, 4vw, 40px)", // Mobile: 20px (px-5), Desktop: 40px (px-10)
          boxSizing: "border-box",
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: "clamp(64px, 7vw, 96px)" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px", // Spacious tag margins
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              Curated Services
            </span>
          </motion.div>

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
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 5vw, 56px)",
                fontWeight: 300,
                color: "var(--text-primary)",
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Curated Pathways
              <br />
              <em style={{ color: "var(--gold)" }} className="italic font-normal text-gold-gradient">
                To Absolute Wholeness
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "14.5px",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                maxWidth: "360px",
                margin: 0,
                fontWeight: 300,
              }}
            >
              A custom architecture merging integrative science, deep mindfulness rituals, and high-touch guidance to align your biological and emotional rhythm.
            </motion.p>
          </div>
        </div>

        {/* Rebuilt 3-Column Luxury Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "clamp(24px, 3vw, 40px)", // Mobile: 24px (gap-6), Tablet: ~32px (gap-8), Desktop: 40px (gap-10)
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              index={index}
              number={service.number}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              icon={service.icon}
              imagePath={service.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
