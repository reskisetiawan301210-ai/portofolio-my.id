import React from 'react'

/**
 * Robust React Error Boundary to catch UI rendering crashes
 * and prevent whole-page blanking/unmounting.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div
          style={{
            minHeight: '40vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 1.5rem',
            textAlign: 'center',
            backgroundColor: 'var(--bg-primary, #fbfbfb)',
            color: 'var(--text-primary, #0f1115)',
            fontFamily: 'var(--font-family, sans-serif)',
          }}
        >
          <div
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 17, 21, 0.05)',
              border: '1px solid var(--border-light, rgba(15, 17, 21, 0.08))',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
            }}
          >
            DISPLAY NOTICE
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            Unable to load this section
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary, #646a78)',
              maxWidth: '480px',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
            }}
          >
            An unexpected error occurred while rendering content. Other parts of the portfolio remain operational.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            style={{
              padding: '0.65rem 1.75rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--text-primary, #0f1115)',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              transition: 'transform 0.2s ease',
            }}
          >
            Reload Page ↻
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

