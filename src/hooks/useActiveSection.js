import { useEffect, useState } from 'react'

/**
 * Hook to determine which section is currently active in the viewport.
 * @param {string[]} sectionIds - Array of element IDs to monitor
 * @param {number} offset - Scroll offset from top
 */
export function useActiveSection(sectionIds = [], offset = 140) {
  const [activeSection, setActiveSection] = useState(() => sectionIds[0] || '')

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + offset

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i]
            const element = document.getElementById(id)
            if (element) {
              const rect = element.getBoundingClientRect()
              const top = rect.top + window.scrollY
              if (scrollPosition >= top) {
                setActiveSection(prev => (prev === id ? prev : id))
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}

export default useActiveSection
