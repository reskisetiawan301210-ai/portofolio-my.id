import React, { useState } from 'react'
import NexusConceptVisual from './NexusConceptVisual'
import './BrowserPreviewFrame.css'

function BrowserPreviewFrame({
  title,
  imageSrc,
  alt,
  isConcept = false,
  loading = 'lazy',
  aspectRatio = '16/10',
  minHeight = '220px',
  className = '',
}) {
  const [hasError, setHasError] = useState(false)

  const showImage = Boolean(imageSrc) && !hasError && !isConcept

  return (
    <div
      className={`browser-preview-frame ${className}`}
      style={{ aspectRatio, minHeight }}
    >
      {/* Top Browser Bar: tipis dengan tiga titik kontrol tanpa URL palsu */}
      <div className="browser-top-bar" aria-hidden="true">
        <div className="browser-dots">
          <span className="dot dot-close"></span>
          <span className="dot dot-minimize"></span>
          <span className="dot dot-expand"></span>
        </div>
      </div>

      {/* Screen Canvas / Media Body */}
      <div className="browser-screen-canvas">
        {isConcept ? (
          <NexusConceptVisual />
        ) : showImage ? (
          <div className="browser-screen-media">
            <img
              src={imageSrc}
              alt={alt || `Tangkapan layar ${title}`}
              width="1440"
              height="900"
              loading={loading}
              className="browser-preview-img"
              onError={() => setHasError(true)}
            />
          </div>
        ) : (
          /* Fallback bersih bila gambar belum tersedia atau gagal dimuat */
          <div className="browser-fallback-canvas">
            <div className="canvas-center-content">
              <div className="canvas-monogram">
                {title ? title.slice(0, 2).toUpperCase() : 'PR'}
              </div>
              <h4 className="canvas-title">{title}</h4>
              <div className="canvas-accent-line"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowserPreviewFrame
