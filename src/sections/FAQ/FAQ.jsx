import React, { useState } from 'react'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import './FAQ.css'

const FAQ_ITEMS = [
  {
    question: 'Siapa itu Reski Setiawan?',
    answer:
      'Reski Setiawan adalah seorang software engineer dan web developer muda asal Talaga, Majalengka, Jawa Barat. Ia merupakan lulusan SMPN 1 Talaga (2026) dan saat ini menempuh pendidikan di SMKN 1 Talaga jurusan Pengembangan Perangkat Lunak dan Gim (PPLG / RPL). Di dunia teknologi, Reski aktif sebagai solo developer di balik platform LifeHub AI, perancang konsep NEXUS AI OFFICE, serta mendalami bidang IoT (Arduino & ESP) dan keamanan siber (Cybersecurity).',
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

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0) // Default open first question

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="PERTANYAAN UMUM"
            watermark="FAQ"
            meta="Disambiguasi &amp; Tanya Jawab Resmi"
            subtitle="Pertanyaan dan jawaban penting mengenai identitas, latar belakang keahlian, dan inisiatif teknologi yang dibangun oleh Reski Setiawan."
          />
        </Reveal>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
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
