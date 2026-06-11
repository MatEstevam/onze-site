"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#scores", label: "Scores" },
  { href: "#onze-da-semana", label: "Vitrine" },
  { href: "#waitlist", label: "Waitlist" },
];

function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      id="mobile-menu-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#1a1a1a",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-barlow-condensed), sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <img src="/logo-symbol.svg" alt="Onze" style={{ height: "36px" }} />
        <button
          onClick={onClose}
          style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer" }}
          aria-label="Fechar menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div style={{ padding: "32px 24px", flex: 1 }}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{
              display: "block",
              padding: "16px 0",
              fontSize: "22px",
              fontWeight: 600,
              color: "#ffffff",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/login"
          onClick={onClose}
          style={{
            display: "block",
            marginTop: "32px",
            padding: "16px",
            borderRadius: "12px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 700,
            background: "#dfff03",
            color: "#1a1a1a",
            textDecoration: "none",
          }}
        >
          Entrar
        </a>
      </div>
    </div>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/[0.06] transition-colors"
        aria-label="Abrir menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <MenuOverlay onClose={() => setOpen(false)} />,
        document.body
      )}
    </>
  );
}
