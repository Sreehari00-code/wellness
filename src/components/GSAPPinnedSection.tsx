"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    number: "01",
    title: "Mindfulness",
    subtitle: "Present-Moment Awareness",
    body: "Cultivate deep presence through guided meditation, breathwork, and somatic practices that quieten the noise and awaken an unshakeable clarity.",
    icon: "◎",
    image: "/images/panel-mindfulness.png",
    tag: "Foundation",
  },
  {
    number: "02",
    title: "Nutrition",
    subtitle: "Nourishment & Vitality",
    body: "Discover an intuitive relationship with food. Personalised anti-inflammatory protocols that fuel sustainable energy, hormonal balance, and radiant health.",
    icon: "❋",
    image: "/images/panel-nutrition.png",
    tag: "Fuelling",
  },
  {
    number: "03",
    title: "Movement",
    subtitle: "Embodied Living",
    body: "Rediscover joy in movement. Bespoke routines integrating functional fitness, yoga, and restorative practices precisely tailored to your body and life.",
    icon: "⟡",
    image: "/images/panel-movement.png",
    tag: "Vitality",
  },
  {
    number: "04",
    title: "Recovery",
    subtitle: "Rest & Regeneration",
    body: "Optimise sleep architecture, nervous system regulation, and deep recovery — the invisible foundation upon which all lasting transformation is built.",
    icon: "⌁",
    image: "/images/panel-recovery.png",
    tag: "Restoration",
  },
  {
    number: "05",
    title: "Emotional Balance",
    subtitle: "Inner Harmony",
    body: "Navigate life's complexity with grace and resilience. Build the inner resourcefulness to meet every challenge from a grounded, centred place.",
    icon: "◈",
    image: "/images/journal-mindfulness.png",
    tag: "Wholeness",
  },
];

export default function GSAPPinnedSection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const triggerRef  = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const counterRef  = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only execute on client
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const track   = trackRef.current;
      const trigger = triggerRef.current;
      if (!track || !trigger) return;

      // Scroll distance = total track width minus one viewport width
      const getScrollDist = () => track.scrollWidth - window.innerWidth;

      const tl = gsap.to(track, {
        x: () => -getScrollDist(),
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top top",
          end: () => "+=" + getScrollDist(),
          pin: true,
          scrub: 1.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.round(self.progress * (panels.length - 1)),
              panels.length - 1
            );
            if (counterRef.current) {
              counterRef.current.textContent = `${String(idx + 1).padStart(2, "0")} / ${String(panels.length).padStart(2, "0")}`;
            }
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // Per-panel content fade-up using containerAnimation
      track.querySelectorAll<HTMLElement>(".gsap-panel-inner").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            containerAnimation: tl,
            start: "left 85%",
            toggleActions: "play none none reset",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pillars"
      ref={sectionRef}
      style={{ background: "var(--bg-primary)", position: "relative" }}
    >
      {/* ── Section Header ───────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "140px 40px 60px",
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
            gap: "24px",
          }}
        >
          <h2
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
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span
              ref={counterRef}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "42px",
                fontWeight: 300,
                color: "var(--gold-bright)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                minWidth: "90px",
                display: "block",
              }}
            >
              01 / 05
            </span>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "11px",
                color: "var(--text-muted)",
                maxWidth: "180px",
                lineHeight: 1.7,
              }}
            >
              Scroll down to explore each pillar in cinematic sequence
            </p>
          </div>
        </div>
      </div>

      {/* ── GSAP Pinned Track Container ───────────────────────────────── */}
      <div
        ref={triggerRef}
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          background: "var(--bg-secondary)",
        }}
      >
        {/* Dynamic progress bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "rgba(140,107,52,0.1)",
            zIndex: 30,
          }}
        >
          <div
            ref={progressRef}
            style={{
              height: "100%",
              width: "0%",
              background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
              transition: "width 0.05s linear",
            }}
          />
        </div>

        {/* Dot-grid navigation indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 30,
          }}
        >
          {panels.map((_, i) => (
            <div
              key={i}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                border: "1px solid var(--gold)",
                background: "transparent",
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        {/* Cinematic scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "52px",
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              opacity: 0.8,
            }}
          >
            Scroll to explore
          </span>
          <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
            <path
              d="M0 4h22M18 1l4 3-4 3"
              stroke="var(--gold)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.6 }}
            />
          </svg>
        </div>

        {/* ── Horizontal track ─────────────────────────────────────────── */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            width: `${panels.length * 100}vw`,
            height: "100%",
            willChange: "transform",
          }}
        >
          {panels.map((panel) => (
            <div
              key={panel.title}
              style={{
                width: "100vw",
                height: "100vh",
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                alignItems: "center",
                background: "var(--bg-secondary)",
              }}
            >
              {/* Left Column: Real high-resolution wellness background image */}
              <div
                style={{
                  position: "relative",
                  height: "100vh",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  sizes="55vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Elegant overlay gradient connecting the image column to content column */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, rgba(240,233,222,0.1) 60%, var(--bg-secondary) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Right Column: Detailed premium editorial copy */}
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0 8% 0 10%",
                  position: "relative",
                  background: "var(--bg-secondary)",
                }}
              >
                {/* Ghost number watermark */}
                <div
                  style={{
                    position: "absolute",
                    right: "5%",
                    bottom: "5%",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(120px, 18vw, 240px)",
                    fontWeight: 300,
                    color: "var(--gold-dim)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                    letterSpacing: "-0.04em",
                    opacity: 0.45,
                  }}
                >
                  {panel.number}
                </div>

                {/* ── Content box ── */}
                <div
                  className="gsap-panel-inner"
                  style={{
                    position: "relative",
                    zIndex: 5,
                    maxWidth: "520px",
                    width: "100%",
                  }}
                >
                  {/* Tag pill */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "40px",
                      padding: "6px 16px",
                      border: "1px solid var(--border)",
                      borderRadius: "1px",
                      background: "rgba(249, 247, 243, 0.4)",
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
                      {panel.tag}
                    </span>
                  </div>

                  {/* Symbol */}
                  <div
                    style={{
                      fontSize: "30px",
                      color: "var(--gold)",
                      opacity: 0.65,
                      marginBottom: "20px",
                      lineHeight: 1,
                    }}
                  >
                    {panel.icon}
                  </div>

                  {/* Big title */}
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(46px, 5.5vw, 76px)",
                      fontWeight: 300,
                      color: "var(--text-primary)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                      marginBottom: "12px",
                    }}
                  >
                    {panel.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--gold-light)",
                      fontWeight: 600,
                      marginBottom: "32px",
                    }}
                  >
                    {panel.subtitle}
                  </p>

                  {/* Gold rule */}
                  <div
                    style={{
                      width: "48px",
                      height: "1px",
                      background: "linear-gradient(90deg, var(--gold), transparent)",
                      marginBottom: "32px",
                    }}
                  />

                  {/* Body text */}
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "14.5px",
                      lineHeight: 1.85,
                      color: "var(--text-muted)",
                      fontWeight: 400,
                      maxWidth: "440px",
                    }}
                  >
                    {panel.body}
                  </p>

                  {/* Index counter */}
                  <div
                    style={{
                      marginTop: "48px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "12px",
                        color: "var(--gold-bright)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {panel.number} / {String(panels.length).padStart(2, "0")}
                    </span>
                    <div
                      style={{
                        width: "60px",
                        height: "1px",
                        background: "var(--border)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
