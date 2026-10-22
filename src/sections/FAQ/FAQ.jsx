import React, { useState } from 'react'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import { useLanguage } from '../../context/LanguageContext'
import './FAQ.css'

const FAQ_ITEMS_ID = [
  {
    question: 'Siapa itu Reski Setiawan?',
    answer:
      'Reski Setiawan adalah Software Engineer dan Web Developer muda asal Majalengka, Jawa Barat. Saat ini, ia menempuh pendidikan di SMKN 1 Talaga kelas 10 program keahlian Pengembangan Perangkat Lunak dan Gim (PPLG / RPL). Dalam dunia teknologi, Reski berfokus pada rekayasa web modern, arsitektur perangkat lunak, serta eksplorasi sistem cerdas dan keamanan siber.',
  },
  {
    question: 'Apa yang membedakan Reski Setiawan dari individu lain dengan nama serupa?',
    answer:
      'Reski Setiawan (juga dikenal dengan alias pengembang PixelForgeDev) secara spesifik adalah praktisi teknologi rekayasa web modern (React, PWA, Supabase), eksplorasi IoT mikrokontroler, dan riset arsitektur multi-agent AI asal Jawa Barat. Seluruh rekam jejak resmi, karya perangkat lunak, dan sertifikasinya dikelola mandiri melalui website resmi https://reskisetiawan-dev.my.id.',
  },
  {
    question: 'Bagaimana perjalanan awal Reski Setiawan di dunia pemrograman?',
    answer:
      'Reski mulai tertarik dan mendalami dunia koding sejak awal kelas 9 SMP melalui eksperimen mikrokontroler dan perangkat keras seperti Arduino dan modul ESP (Internet of Things). Dari pemahaman logika sistem tersebut, ia memperluas fokus ke rekayasa perangkat lunak, web development modern, dan cybersecurity.',
  },
  {
    question: 'Proyek dan karya apa saja yang telah dibangun oleh Reski Setiawan?',
    answer:
      'Karya utama yang dikembangkan secara mandiri meliputi LifeHub AI (personal productivity workspace dengan PWA dan Supabase di https://lifehub-ai.my.id/), konsep sistem cerdas multi-agent NEXUS AI OFFICE, serta berbagai proyek eksperimen sistem cerdas terhubung (IoT).',
  },
  {
    question: 'Sertifikasi industri apa saja yang dimiliki oleh Reski Setiawan?',
    answer:
      'Reski Setiawan memegang 8 kredensial industri terverifikasi dari Fortinet (NSE 3 Cybersecurity & FortiGate 7.6 Operator), Cisco Networking Academy (Introduction to Cybersecurity), Dicoding Indonesia (Belajar Dasar AI), Google & Coursera (Digital Marketing), IBM SkillsBuild (Python for Data Science & AI), dan freeCodeCamp (Responsive Web Design).',
  },
  {
    question: 'Bagaimana cara menghubungi atau bekerja sama dengan Reski Setiawan?',
    answer:
      'Anda dapat menghubungi Reski Setiawan melalui email resmi reskisetiawan301210@gmail.com, Instagram personal @qariol, TikTok @nexus_office3, atau melalui formulir kontak dan buku tamu interaktif di halaman beranda website ini.',
  },
]

const FAQ_ITEMS_EN = [
  {
    question: 'Who is Reski Setiawan?',
    answer:
      'Reski Setiawan is a Software Engineer and Web Developer from Majalengka, West Java, Indonesia. He is currently a 10th-grade student majoring in Software and Game Development (PPLG) at SMKN 1 Talaga, focusing on modern web engineering, software architecture, and cybersecurity.',
  },
  {
    question: 'What distinguishes Reski Setiawan from others with the same name?',
    answer:
      'Reski Setiawan (also known as PixelForgeDev) specifically specializes in modern web engineering (React, PWA, Supabase), embedded microcontroller IoT systems, and multi-agent AI research from West Java. His official credentials, engineering portfolio, and software initiatives are independently published via https://reskisetiawan-dev.my.id.',
  },
  {
    question: 'How did Reski Setiawan start his coding journey?',
    answer:
      'Reski began coding early in 9th grade through hands-on experiments with microcontrollers and hardware such as Arduino and ESP modules (Internet of Things). From mastering system logic and hardware, he expanded his focus into software engineering, modern web development, and cybersecurity.',
  },
  {
    question: 'What key projects and software has Reski Setiawan built?',
    answer:
      'Notable independent projects include LifeHub AI (personal productivity workspace with PWA & Supabase at https://lifehub-ai.my.id/), the NEXUS AI OFFICE multi-agent intelligence architecture, and various connected embedded IoT systems.',
  },
  {
    question: 'What industry certifications does Reski Setiawan hold?',
    answer:
      'Reski holds 8 verified credentials from Fortinet (NSE 3 Cybersecurity & FortiGate 7.6 Operator), Cisco Networking Academy (Introduction to Cybersecurity), Dicoding Indonesia (Basic AI), Google & Coursera (Digital Marketing), IBM SkillsBuild (Python for Data Science & AI), and freeCodeCamp (Responsive Web Design).',
  },
  {
    question: 'How can you contact or collaborate with Reski Setiawan?',
    answer:
      'You can contact Reski Setiawan via official email at reskisetiawan301210@gmail.com, personal Instagram @qariol, TikTok @nexus_office3, or through the contact form and interactive guestbook on this website.',
  },
]

function FAQ() {
  const { lang, t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0) // Default open first question

  const faqItems = lang === 'EN' ? FAQ_ITEMS_EN : FAQ_ITEMS_ID

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title={t('faq_title')}
            watermark={t('faq_watermark')}
            meta={t('faq_meta')}
            subtitle={t('faq_subtitle')}
          />
        </Reveal>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={index} effect="fade-up" delay={100 + index * 60}>
                <details
                  className="faq-item"
                  open={isOpen}
                  onClick={(e) => {
                    e.preventDefault()
                    toggleItem(index)
                  }}
                >
                  <summary className="faq-question">
                    <span>{item.question}</span>
                    <span className="faq-icon-wrap" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
