import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';
import ContactSupport from './components/ContactSupport';
import HelpCenter from './components/HelpCenter';
import TermsConditions from './components/TermsConditions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <header className="app-header">
                <h1>Welcome to Team4Stack</h1>
                <p>Your modern web solution</p>
              </header>
              <main className="app-main">
                <section className="hero">
                  <h2>Modern Web Development</h2>
                  <p>Team4Stack provides cutting-edge solutions for your business needs.</p>
                </section>
                <section className="features">
                  <div className="feature-card">
                    <h3>Responsive Design</h3>
                    <p>Our websites work perfectly on all devices.</p>
                  </div>
                  <div className="feature-card">
                    <h3>Fast Performance</h3>
                    <p>Optimized for speed and user experience.</p>
                  </div>
                  <div className="feature-card">
                    <h3>Easy Management</h3>
                    <p>Admin panel for easy content updates.</p>
                  </div>
                </section>
              </main>
              <Footer />
            </>
          } />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/contact" element={<ContactSupport />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;