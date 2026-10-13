import React from 'react'
import './EditorialPortraitFrame.css'

function EditorialPortraitFrame({ className = '' }) {
  return (
    <div className={`editorial-portrait-card ${className}`}>
      <div className="editorial-portrait-inner">
        {/* Monogram Badge */}
        <div className="portrait-monogram-circle">
          <span className="monogram-text-outline">R</span>
          <span className="monogram-text-solid">S</span>
        </div>

        {/* Identity Details */}
        <div className="portrait-identity-block">
          <h3 className="portrait-name">Reski Setiawan</h3>
          <p className="portrait-role">Software Engineer · Web Developer</p>
        </div>

        {/* Status Chip */}
        <div className="portrait-status-chip">
          <span className="status-indicator-dot"></span>
          <span>Jawa Barat, Indonesia</span>
        </div>
      </div>
    </div>
  )
}

export default EditorialPortraitFrame

