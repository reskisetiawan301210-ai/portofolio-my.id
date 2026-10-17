import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/common/SectionHeader'
import BrowserPreviewFrame from '../../components/ui/BrowserPreviewFrame'
import Reveal from '../../components/common/Reveal'
import { projectsData } from '../../data/portfolioData'
import './Projects.css'

function Projects() {
  const [activeTab, setActiveTab] = useState('All')

  // Tabs filter persis seperti referensi (All / Real Project / Exploration)
  const filterTabs = [
    { label: 'All', key: 'All' },
    { label: 'Real Project', key: 'Real' },
    { label: 'Exploration', key: 'Concept' },
  ]

  const displayedProjects = (projectsData || []).filter((p) => {
    if (activeTab === 'All') return true
    if (activeTab === 'Real') return !p.isConcept
    if (activeTab === 'Concept') return p.isConcept
    return true
  })

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Header: /SELECTED WORK with PORTFOLIO Watermark (Ref: Frame 00:02) */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="SELECTED WORK"
            watermark="PORTFOLIO"
            meta="Karya &amp; Produk Terverifikasi"
          />
        </Reveal>

        {/* Filter Bar Row: Left Tabs + Right "View All Work ↗" (Ref: Frame 00:02) */}
        <Reveal effect="fade-up" delay={120}>
          <div className="projects-control-bar">
            <div className="filter-tabs-group">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`filter-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="view-all-wrap">
              <Link
                to="/proyek"
                className="view-all-btn"
                aria-label="Buka katalog lengkap semua karya"
              >
                <span>View All Work</span>
                <span className="arrow">↗</span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 2-Column Grid of Showcase Project Cards (Ref: Frame 00:02 & 00:03) */}
        <div className="projects-grid-2col">
          {displayedProjects.map((item, index) => (
            <Reveal key={item.id} effect="scale-up" delay={120 + index * 100}>
              <Link
                to={`/proyek/${item.slug}`}
                className="project-showcase-card"
                aria-label={`Buka detail proyek ${item.title}`}
              >
                {/* Media Preview Box */}
                <div className="project-media-box">
                  <div className="project-badge-pill">
                    <span>{item.isConcept ? 'EXPLORATION' : 'REAL PROJECT'}</span>
                  </div>

                  <div className="project-media-inner">
                    <BrowserPreviewFrame
                      title={item.title}
                      imageSrc={item.image}
                      alt={item.imageAlt}
                      isConcept={item.isConcept}
                      loading="lazy"
                      aspectRatio="16/10"
                      minHeight="240px"
                      className="project-frame"
                    />
                  </div>
                </div>

                {/* Typography & Metadata Below Card */}
                <div className="project-meta-bottom">
                  <h3 className="project-card-title">{item.title}</h3>
                  <div className="project-chips-row">
                    <span className="project-chip">{item.category}</span>
                    <span className="project-chip">{item.institution || item.status}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
