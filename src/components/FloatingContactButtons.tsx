"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

// Easily customizable contact details
const WHATSAPP_NUMBER = "919000000000"; // Replace with actual WhatsApp number
const PHONE_NUMBER = "+919000000000";     // Replace with actual phone number

const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: "block" }}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.45.99c-5.448 0-9.886 4.374-9.89 9.802-.001 1.77.463 3.5 1.34 5.016l-.997 3.634 3.737-.968zm11.23-5.263c-.3-.149-1.772-.864-2.046-.962-.273-.099-.473-.149-.672.15-.199.299-.768.962-.941 1.16-.173.199-.347.223-.647.074-.3-.15-1.267-.462-2.41-1.472-.89-.785-1.492-1.754-1.667-2.052-.174-.297-.018-.458.13-.606.134-.133.3-.347.449-.52.149-.173.199-.297.299-.495.099-.198.05-.371-.025-.52-.075-.149-.672-1.62-.922-2.206-.24-.584-.487-.5-.672-.51-.172-.01-.37-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.772-.717 2.02-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
  </svg>
);

export default function FloatingContactButtons() {
  const [hoveredButton, setHoveredButton] = useState<"whatsapp" | "phone" | null>(null);

  return (
    <div className="floating-container">
      {/* WhatsApp Button Wrapper */}
      <div
        className="btn-wrapper"
        onMouseEnter={() => setHoveredButton("whatsapp")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <span
          className="btn-label"
          style={{
            color: "#3ce07d",
            border: "1px solid rgba(37, 211, 102, 0.25)",
            opacity: hoveredButton === "whatsapp" ? 1 : 0,
            transform: hoveredButton === "whatsapp" ? "translateX(0)" : "translateX(10px)",
          }}
        >
          WhatsApp Consultation
        </span>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-anchor whatsapp-btn"
          style={{
            background: hoveredButton === "whatsapp" ? "rgba(22, 22, 22, 0.95)" : "rgba(18, 18, 18, 0.85)",
            border: hoveredButton === "whatsapp" ? "1px solid #25d366" : "1px solid rgba(37, 211, 102, 0.3)",
            color: hoveredButton === "whatsapp" ? "#25d366" : "rgba(37, 211, 102, 0.8)",
            boxShadow: hoveredButton === "whatsapp"
              ? "0 10px 30px rgba(37, 211, 102, 0.25), 0 0 15px rgba(37, 211, 102, 0.15)"
              : "0 6px 20px rgba(0, 0, 0, 0.4)",
            transform: hoveredButton === "whatsapp" ? "scale(1.08)" : "scale(1)",
          }}
        >
          <WhatsAppIcon />
        </a>
      </div>

      {/* Phone Button Wrapper */}
      <div
        className="btn-wrapper"
        onMouseEnter={() => setHoveredButton("phone")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <span
          className="btn-label"
          style={{
            color: "var(--gold)",
            border: "1px solid rgba(197, 168, 128, 0.25)",
            opacity: hoveredButton === "phone" ? 1 : 0,
            transform: hoveredButton === "phone" ? "translateX(0)" : "translateX(10px)",
          }}
        >
          Direct Call
        </span>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="btn-anchor phone-btn"
          style={{
            background: hoveredButton === "phone" ? "rgba(22, 22, 22, 0.95)" : "rgba(18, 18, 18, 0.85)",
            border: hoveredButton === "phone" ? "1px solid var(--gold)" : "1px solid rgba(197, 168, 128, 0.3)",
            color: hoveredButton === "phone" ? "var(--gold-bright)" : "var(--gold)",
            boxShadow: hoveredButton === "phone"
              ? "0 10px 30px rgba(197, 168, 128, 0.25), 0 0 15px rgba(197, 168, 128, 0.15)"
              : "0 6px 20px rgba(0, 0, 0, 0.4)",
            transform: hoveredButton === "phone" ? "scale(1.08)" : "scale(1)",
          }}
        >
          <Phone size={18} />
        </a>
      </div>

      <style jsx>{`
        .floating-container {
          position: fixed;
          bottom: 32px;
          right: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 9999;
          pointer-events: none;
        }
        .btn-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          pointer-events: auto;
        }
        .btn-label {
          font-family: 'Manrope', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(10, 10, 10, 0.9);
          padding: 8px 16px;
          borderRadius: 4px;
          transition: opacity 0.3s ease, transform 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
          pointer-events: none;
        }
        .btn-anchor {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .floating-container {
            bottom: 16px;
            right: 16px;
            gap: 12px;
          }
          .btn-label {
            display: none !important; /* Hide slide-out label on mobile screens */
          }
          .btn-anchor {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </div>
  );
}
