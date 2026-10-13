import React from 'react'

function NexusConceptVisual({ className = '' }) {
  return (
    <div
      className={`nexus-concept-visual-wrap ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f4f5f8 100%)',
        overflow: 'hidden',
      }}
      aria-label="Ilustrasi konseptual arsitektur multi-agent NEXUS AI OFFICE"
    >
      <svg
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          maxHeight: '100%',
        }}
        role="img"
      >
        <title>NEXUS AI OFFICE — Ilustrasi Konsep Shared Workspace</title>

        {/* Pola grid latar belakang */}
        <defs>
          <pattern id="nexus-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#0f1115" fillOpacity="0.06" />
          </pattern>
        </defs>
        <rect width="800" height="480" fill="url(#nexus-grid)" />

        {/* Status Badge di Pojok Kiri Atas */}
        <g transform="translate(30, 26)">
          <rect
            width="220"
            height="30"
            rx="15"
            fill="#ffffff"
            stroke="#0f1115"
            strokeWidth="1.2"
          />
          <circle cx="16" cy="15" r="4" fill="#059669" />
          <text
            x="30"
            y="19"
            fill="#0f1115"
            fontSize="11"
            fontWeight="700"
            letterSpacing="0.03em"
            fontFamily="monospace, system-ui, sans-serif"
          >
            Dalam Pengembangan / Konsep
          </text>
        </g>

        {/* Label Keterangan Kecil di Pojok Kanan Atas */}
        <g transform="translate(630, 26)">
          <text
            x="140"
            y="19"
            textAnchor="end"
            fill="#525866"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0.04em"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            ✦ Ilustrasi konsep
          </text>
        </g>

        {/* Garis Koneksi: AI Agent ke Shared Workspace */}
        {/* AI Agent 1 -> Shared Workspace */}
        <path
          d="M 230 135 C 280 155, 300 185, 330 215"
          stroke="#0f1115"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.45"
        />
        <circle cx="230" cy="135" r="3.5" fill="#0f1115" />
        <circle cx="330" cy="215" r="3.5" fill="#0f1115" />

        {/* AI Agent 2 -> Shared Workspace */}
        <path
          d="M 570 135 C 520 155, 500 185, 470 215"
          stroke="#0f1115"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.45"
        />
        <circle cx="570" cy="135" r="3.5" fill="#0f1115" />
        <circle cx="470" cy="215" r="3.5" fill="#0f1115" />

        {/* AI Agent 3 -> Shared Workspace */}
        <path
          d="M 230 345 C 280 325, 300 295, 330 265"
          stroke="#0f1115"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.45"
        />
        <circle cx="230" cy="345" r="3.5" fill="#0f1115" />
        <circle cx="330" cy="265" r="3.5" fill="#0f1115" />

        {/* AI Agent 4 -> Shared Workspace */}
        <path
          d="M 570 345 C 520 325, 500 295, 470 265"
          stroke="#0f1115"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.45"
        />
        <circle cx="570" cy="345" r="3.5" fill="#0f1115" />
        <circle cx="470" cy="265" r="3.5" fill="#0f1115" />

        {/* Inti Pusat: Shared Workspace */}
        <g transform="translate(285, 175)">
          {/* Bayangan halus */}
          <rect
            x="4"
            y="4"
            width="230"
            height="130"
            rx="12"
            fill="#0f1115"
            fillOpacity="0.04"
          />
          {/* Kotak Utama */}
          <rect
            x="0"
            y="0"
            width="230"
            height="130"
            rx="12"
            fill="#ffffff"
            stroke="#0f1115"
            strokeWidth="2"
          />
          {/* Garis batas header */}
          <line x1="20" y1="36" x2="210" y2="36" stroke="#0f1115" strokeWidth="1" strokeOpacity="0.12" />
          
          <text
            x="115"
            y="25"
            textAnchor="middle"
            fill="#525866"
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.12em"
            fontFamily="monospace, system-ui, sans-serif"
          >
            SHARED WORKSPACE
          </text>
          <text
            x="115"
            y="65"
            textAnchor="middle"
            fill="#0f1115"
            fontSize="16"
            fontWeight="800"
            letterSpacing="-0.02em"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            Shared Workspace
          </text>
          <text
            x="115"
            y="87"
            textAnchor="middle"
            fill="#525866"
            fontSize="11"
            fontWeight="500"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            Ruang Kerja &amp; Konteks Bersama
          </text>
          {/* Keterangan Konsep */}
          <rect
            x="50"
            y="98"
            width="130"
            height="18"
            rx="9"
            fill="#0f1115"
            fillOpacity="0.05"
          />
          <text
            x="115"
            y="110"
            textAnchor="middle"
            fill="#0f1115"
            fontSize="9.5"
            fontWeight="700"
            letterSpacing="0.04em"
            fontFamily="monospace, system-ui, sans-serif"
          >
            Ilustrasi konsep
          </text>
        </g>

        {/* Node 1: AI Agent 1 (Kiri Atas) */}
        <g transform="translate(60, 105)">
          <rect width="170" height="65" rx="10" fill="#ffffff" stroke="#0f1115" strokeWidth="1.5" />
          <text x="14" y="24" fill="#525866" fontSize="9.5" fontWeight="800" letterSpacing="0.08em" fontFamily="monospace">
            NODE 01
          </text>
          <text x="14" y="46" fill="#0f1115" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
            AI Agent 1
          </text>
        </g>

        {/* Node 2: AI Agent 2 (Kanan Atas) */}
        <g transform="translate(570, 105)">
          <rect width="170" height="65" rx="10" fill="#ffffff" stroke="#0f1115" strokeWidth="1.5" />
          <text x="14" y="24" fill="#525866" fontSize="9.5" fontWeight="800" letterSpacing="0.08em" fontFamily="monospace">
            NODE 02
          </text>
          <text x="14" y="46" fill="#0f1115" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
            AI Agent 2
          </text>
        </g>

        {/* Node 3: AI Agent 3 (Kiri Bawah) */}
        <g transform="translate(60, 315)">
          <rect width="170" height="65" rx="10" fill="#ffffff" stroke="#0f1115" strokeWidth="1.5" />
          <text x="14" y="24" fill="#525866" fontSize="9.5" fontWeight="800" letterSpacing="0.08em" fontFamily="monospace">
            NODE 03
          </text>
          <text x="14" y="46" fill="#0f1115" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
            AI Agent 3
          </text>
        </g>

        {/* Node 4: AI Agent 4 (Kanan Bawah) */}
        <g transform="translate(570, 315)">
          <rect width="170" height="65" rx="10" fill="#ffffff" stroke="#0f1115" strokeWidth="1.5" />
          <text x="14" y="24" fill="#525866" fontSize="9.5" fontWeight="800" letterSpacing="0.08em" fontFamily="monospace">
            NODE 04
          </text>
          <text x="14" y="46" fill="#0f1115" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
            AI Agent 4
          </text>
        </g>
      </svg>
    </div>
  )
}

export default NexusConceptVisual
