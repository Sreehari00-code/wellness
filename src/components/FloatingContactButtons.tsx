"use client";

import { Phone } from "lucide-react";

// Easily customizable contact details
const WHATSAPP_NUMBER = "919809745714"; // Replace with actual WhatsApp number
const PHONE_NUMBER = "+919809745714";     // Replace with actual phone number

const WhatsAppIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: "block" }}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.45.99c-5.448 0-9.886 4.374-9.89 9.802-.001 1.77.463 3.5 1.34 5.016l-.997 3.634 3.737-.968zm11.23-5.263c-.3-.149-1.772-.864-2.046-.962-.273-.099-.473-.149-.672.15-.199.299-.768.962-.941 1.16-.173.199-.347.223-.647.074-.3-.15-1.267-.462-2.41-1.472-.89-.785-1.492-1.754-1.667-2.052-.174-.297-.018-.458.13-.606.134-.133.3-.347.449-.52.149-.173.199-.297.299-.495.099-.198.05-.371-.025-.52-.075-.149-.672-1.62-.922-2.206-.24-.584-.487-.5-.672-.51-.172-.01-.37-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.772-.717 2.02-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
  </svg>
);

export default function FloatingContactButtons() {
  return (
    <div className="floating-container">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-anchor premium-btn"
        aria-label="Contact via WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="btn-anchor premium-btn"
        aria-label="Call directly"
      >
        <Phone size={18} />
      </a>

      <style jsx>{`
        .floating-container {
          position: fixed;
          bottom: 32px;
          right: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 9999;
        }
        .btn-anchor {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          cursor: pointer;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .btn-anchor:hover {
          background: #161616;
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #ffffff;
          transform: scale(1.08);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 255, 255, 0.05);
        }
        @media (max-width: 768px) {
          .floating-container {
            bottom: 16px;
            right: 16px;
            gap: 10px;
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
