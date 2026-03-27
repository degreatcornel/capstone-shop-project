import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null, info: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
    // You can also log to an external service here
    console.error('ErrorBoundary caught an error', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '24px', color: '#222', background: '#f8d7da', minHeight: '80vh' }}>
          <h1>Something went wrong.</h1>
          <p>We’re sorry — the page failed to load. Please refresh or try again later.</p>
          {this.state.error && <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error.message}</pre>}
        </div>
      )
    }

    return this.props.children
  }
}
