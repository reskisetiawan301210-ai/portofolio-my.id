import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Reveal.css'

function Reveal({
  children,
  delay = 0,
  effect = 'fade-up',
  threshold = 0.12,
  className = '',
  as: Component = 'div',
  style = {},
  ...props
}) {
  const [ref, isRevealed] = useScrollReveal({ threshold })

  const combinedStyles = {
    ...style,
    '--reveal-delay': `${delay}ms`,
  }

  return (
    <Component
      ref={ref}
      className={`reveal-wrapper reveal-${effect} ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={combinedStyles}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Reveal
