import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './pages/Top';
import Access from './pages/Access';
import Pricing from './pages/Pricing';
import Staff from './pages/Staff';
import Reservation from './pages/Reservation';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="/access" element={<Access />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/reservation" element={<Reservation />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
