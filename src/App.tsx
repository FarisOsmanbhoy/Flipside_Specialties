import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Division8Page from './pages/Division8Page';
import Division10Page from './pages/Division10Page';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ThankYouPage from './pages/ThankYouPage';
import Footer from './components/Footer';
import EntryScreen from './components/EntryScreen';

function App() {
  const [showEntryScreen, setShowEntryScreen] = useState(true);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {showEntryScreen && (
          <EntryScreen onComplete={() => setShowEntryScreen(false)} />
        )}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/division8" element={<Division8Page />} />
            <Route path="/division10" element={<Division10Page />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;