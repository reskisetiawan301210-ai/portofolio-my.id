import React from 'react'
import './SectionHeader.css'

function SectionHeader({
  title,
  watermark,
  meta,
  subtitle,
  dark = false,
  as: HeadingTag = 'h2',
}) {
  return (
    <div className={`section-header-wrap ${dark ? 'section-header-dark' : ''}`}>
      {watermark && <div className="section-watermark">{watermark}</div>}
      <div className="section-header-inner">
        <HeadingTag className="section-title">
          <span className="section-title-slash">/</span>
          {title}
        </HeadingTag>
        {meta && <span className="section-meta">{meta}</span>}
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
