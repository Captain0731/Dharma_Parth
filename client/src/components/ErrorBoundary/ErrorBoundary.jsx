import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Check if error is from MetaMask extension
    const errorMessage = (error?.message || '') + 
                        (error?.toString() || '') +
                        (error?.stack || '');
    const isMetaMaskError = 
      errorMessage.includes('MetaMask') ||
      errorMessage.includes('Failed to connect') ||
      errorMessage.includes('ethereum') ||
      errorMessage.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
      errorMessage.includes('inpage.js');

    if (isMetaMaskError) {
      // Suppress MetaMask errors - don't show error state
      return { hasError: false, error: null };
    }

    // For other errors, show error state
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Check if error is from MetaMask extension
    const errorMessage = (error?.message || '') + 
                        (error?.toString() || '') +
                        (error?.stack || '') +
                        (errorInfo?.componentStack || '');
    const isMetaMaskError = 
      errorMessage.includes('MetaMask') ||
      errorMessage.includes('Failed to connect') ||
      errorMessage.includes('ethereum') ||
      errorMessage.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
      errorMessage.includes('inpage.js');

    if (isMetaMaskError) {
      // Completely suppress MetaMask errors - don't log or show anything
      return;
    }

    // Log other errors normally
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    // If it's a MetaMask error, just render children normally
    if (this.state.error && (
      this.state.error?.message?.includes('MetaMask') ||
      this.state.error?.toString().includes('MetaMask')
    )) {
      return this.props.children;
    }

    // For other errors, show error UI
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          color: '#1f2b6c'
        }}>
          <h2>Something went wrong</h2>
          <p>Please refresh the page.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              background: '#4f7cff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

