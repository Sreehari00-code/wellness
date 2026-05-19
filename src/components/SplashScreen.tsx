"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Disable scrolling when splash is active
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0, 
            y: "-100dvh",
            transition: { 
              opacity: { duration: 0.6, ease: "easeInOut" },
              y: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
            } 
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            background: "#070707",
            zIndex: 100000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Subtle background ambient glow */}
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197, 168, 128, 0.08) 0%, transparent 70%)",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Brand Logo Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "60px",
                height: "46px",
                position: "relative",
                marginBottom: "4px",
              }}
            >
              <Image
                src="/images/brand-logo.png"
                alt="Mission 444 Logo"
                fill
                sizes="60px"
                style={{ objectFit: "contain" }}
              />
            </motion.div>

            {/* Logo text */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 300,
                color: "#FFFFFF",
                letterSpacing: "0.22em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              MISSION 444
            </motion.h1>

            {/* Elegant Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.6, duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: "1px",
                background: "var(--gold)",
              }}
            />

            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(8px, 1.5vw, 10px)",
                letterSpacing: "0.4em",
                color: "var(--gold)",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Wellness World
            </motion.span>
          </div>

          {/* Loading status (subtle circle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.4, duration: 0.2 }}
            style={{
              position: "absolute",
              bottom: "40px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              className="loading-dot"
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#FFFFFF",
              }}
            />
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.2em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              Loading Experience
            </span>
          </motion.div>

          <style jsx>{`
            .loading-dot {
              animation: pulse 1.5s infinite ease-in-out;
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.2; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
