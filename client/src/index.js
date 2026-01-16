import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Disable Browser Scroll Restore (most important)
if (typeof window !== 'undefined' && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Suppress MetaMask errors before React renders
if (typeof window !== 'undefined') {
  // Completely block window.ethereum to prevent MetaMask connection attempts
  try {
    delete window.ethereum;
  } catch(e) {}
  
  try {
    Object.defineProperty(window, 'ethereum', {
      value: undefined,
      writable: false,
      configurable: false,
      enumerable: false
    });
  } catch (e) {
    // Ignore if already defined
  }
  
  // Block web3 as well
  try {
    delete window.web3;
  } catch(e) {}
  
  try {
    Object.defineProperty(window, 'web3', {
      value: undefined,
      writable: false,
      configurable: false,
      enumerable: false
    });
  } catch (e) {}

  // Suppress React error overlay for MetaMask errors
  const originalError = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
    const errorMessage = (message || '') + (source || '') + 
                        ((error && error.message) || '') +
                        ((error && error.toString) ? error.toString() : '');
    
    if (errorMessage.includes('MetaMask') || 
        errorMessage.includes('Failed to connect') ||
        errorMessage.includes('ethereum') ||
        errorMessage.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
        errorMessage.includes('inpage.js')) {
      return true; // Suppress the error
    }
    
    if (originalError) {
      return originalError.call(this, message, source, lineno, colno, error);
    }
    return false;
  };

  // Aggressively catch unhandled rejections
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const errorMessage = (reason?.message || '') + 
                        (reason?.toString() || '') +
                        (reason?.stack || '');
    
    if (errorMessage.includes('MetaMask') || 
        errorMessage.includes('Failed to connect') ||
        errorMessage.includes('ethereum') ||
        errorMessage.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
        errorMessage.includes('inpage.js')) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  }, true);
  
  // Suppress console.error for MetaMask (affects React error overlay)
  const originalConsoleError = console.error;
  console.error = function(...args) {
    const errorString = args.map(arg => {
      if (typeof arg === 'string') return arg;
      if (arg && typeof arg === 'object') {
        return (arg.message || '') + (arg.toString ? arg.toString() : '') + (arg.stack || '');
      }
      return String(arg || '');
    }).join(' ');
    
    if (errorString.includes('MetaMask') || 
        errorString.includes('Failed to connect') ||
        errorString.includes('ethereum') ||
        errorString.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
        errorString.includes('inpage.js')) {
      return; // Completely suppress
    }
    originalConsoleError.apply(console, args);
  };
  
  // Override React's error overlay hook to suppress MetaMask errors
  if (window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__) {
    const originalOnError = window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.onError;
    window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.onError = function(errors) {
      const errorString = errors.map(e => {
        return (e.message || '') + (e.toString ? e.toString() : '') + (e.stack || '');
      }).join(' ');
      
      if (errorString.includes('MetaMask') || 
          errorString.includes('Failed to connect') ||
          errorString.includes('ethereum') ||
          errorString.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
          errorString.includes('inpage.js')) {
        return; // Suppress React error overlay
      }
      
      if (originalOnError) {
        originalOnError.apply(this, arguments);
      }
    };
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
