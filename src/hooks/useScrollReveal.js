import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook using IntersectionObserver for high-performance scroll reveal.
 * @param {Object} options
 * @param {number} options.threshold - Viewport threshold ratio (default: 0.15)
 * @param {string} options.rootMargin - Margin around the root (default: '0px 0px -40px 0px')
 * @param {boolean} options.triggerOnce - Whether to trigger only once (default: true)
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
} = {}) {
  const [isRevealed, setIsRevealed] = useState(() => {
    return typeof window !== 'undefined' && !('IntersectionObserver' in window)
  })
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries || !entries.length) return
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setIsRevealed(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsRevealed(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return [elementRef, isRevealed]
}

export default useScrollReveal
