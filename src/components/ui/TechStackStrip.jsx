import React from 'react'
import { techStackData } from '../../data/portfolioData'
import Reveal from '../common/Reveal'
import './TechStackStrip.css'

function TechStackStrip() {
  return (
    <div className="tech-stack-strip-wrap">
      <div className="container">
        <Reveal effect="fade-up" delay={0}>
          <div className="tech-stack-header">
            <span className="tech-stack-label">/TECH STACK</span>
            <span className="tech-stack-sub">
              Teknologi yang saya pakai dan pelajari
            </span>
          </div>
        </Reveal>

        <Reveal effect="fade-up" delay={120}>
          <div className="tech-stack-grid">
            {techStackData.map((item, index) => (
              <div key={index} className="tech-item-card">
                <span className="tech-item-category">{item.category}</span>
                <h4 className="tech-item-name">{item.name}</h4>
                <p className="tech-item-role">{item.role}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default TechStackStrip
