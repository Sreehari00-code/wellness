"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Pillars" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Stories" },
  { href: "#journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled
          ? "rgba(249,247,243,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(140,107,52,0.12)"
          : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ opacity: 0.8 }}
            style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px",
                fontWeight: 600,
                color: "#4A3B28",
                letterSpacing: "0.08em",
              }}
            >
              SERENOVA
            </span>
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.25em",
                color: "#8C6B34",
                fontWeight: 500,
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Wellness Studio
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            gap: "40px",
            listStyle: "none",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#8A7968",
                  textDecoration: "none",
                  fontWeight: 500,
                  position: "relative",
                }}
                className="nav-link"
              >
                <motion.span
                  whileHover={{ color: "#4A3B28" }}
                  style={{ display: "block" }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "20px" }}>
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(140,107,52,0.25)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#programs"
              style={{
                display: "inline-flex",
                background: "linear-gradient(135deg, #8C6B34, #A87E42)",
                color: "#F9F7F3",
                border: "none",
                padding: "10px 26px",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Book a Session
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#4A3B28",
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: "rgba(249,247,243,0.98)",
              borderTop: "1px solid rgba(140,107,52,0.12)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "24px 40px 32px" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  style={{ padding: "12px 0", borderBottom: "1px solid rgba(140,107,52,0.08)" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "20px",
                      color: "#4A3B28",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: "24px" }}
              >
                <Link
                  href="#programs"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #8C6B34, #A87E42)",
                    color: "#F9F7F3",
                    border: "none",
                    padding: "12px 32px",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    width: "100%",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  Book a Session
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
