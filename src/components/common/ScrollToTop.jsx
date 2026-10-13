import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Memastikan posisi scroll kembali ke paling atas setiap kali berpindah rute,
 * kecuali jika navigasi memiliki hash anchor (misal #kontak).
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      // Jika ada hash, beri sedikit jeda agar DOM terpasang lalu scroll ke elemen
      const targetId = hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop

