"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pillars", label: "Pillars" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Stories" },
  { href: "#journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        position: "fixed",
        top: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(1280px, calc(100% - 48px))",
        zIndex: 1000,
        borderRadius: "999px",
        background: scrolled
          ? "rgba(255, 255, 255, 0.75)"
          : "rgba(255, 255, 255, 0.35)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: scrolled ? "1px solid rgba(255, 255, 255, 0.6)" : "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: scrolled
          ? "0 20px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
          : "0 10px 30px rgba(0, 0, 0, 0.04)",
        transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 24px",
          height: "64px",
        }}
      >
        {/* Logo block */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "0.08em",
              }}
            >
              SERENOVA
            </span>
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.28em",
                color: "var(--gold)",
                fontWeight: 500,
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Wellness Studio
            </span>
          </div>
        </Link>

        {/* Minimal Navigation links */}
        <ul
          style={{
            listStyle: "none",
          }}
          className="hidden md:flex items-center gap-[32px] p-0 m-0"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontWeight: 600,
                  position: "relative",
                  padding: "6px 0",
                }}
                className="nav-link group"
              >
                <span className="hover:text-[var(--gold)] transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Elegant CTA button inside the pill navbar */}
        <div className="hidden md:flex items-center">
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(197, 168, 128, 0.25)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#programs"
              style={{
                display: "inline-flex",
                background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                color: "var(--bg-primary)",
                border: "none",
                padding: "10px 24px",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              Request Session
            </Link>
          </motion.div>
        </div>

        {/* Responsive Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "rgba(0, 0, 0, 0.04)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            color: "var(--text-primary)",
            cursor: "pointer",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
          }}
          className="md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Floating Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "76px",
              left: 0,
              right: 0,
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              borderRadius: "24px",
              padding: "24px 32px 32px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  style={{ padding: "14px 0", borderBottom: "1px solid rgba(0, 0, 0, 0.06)" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "20px",
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                style={{ marginTop: "24px" }}
              >
                <Link
                  href="#programs"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                    color: "var(--bg-primary)",
                    border: "none",
                    padding: "12px 32px",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    width: "100%",
                    borderRadius: "999px",
                    textDecoration: "none",
                  }}
                >
                  Request Session
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
