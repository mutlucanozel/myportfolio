import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';  // createRoot doğru yerden import ediliyor
import './index.css';
import App from './App';
import { BrowserRouter, useLocation } from 'react-router-dom';  // BrowserRouter kullanıyoruz

function ScrollToTop() {
  const location = useLocation(); // Get the current location using useLocation

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the location changes
  }, [location]); // Run the effect whenever the location changes

  return null;
}

const container = document.getElementById('root');
const root = createRoot(container);  // ReactDOM.createRoot yerine createRoot kullanıyoruz
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
