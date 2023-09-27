import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, useLocation } from 'react-router-dom'; // Import useLocation

function ScrollToTop() {
  const location = useLocation(); // Get the current location using useLocation

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the location changes
  }, [location]); // Run the effect whenever the location changes

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/my-app'>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
