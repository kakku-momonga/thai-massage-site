import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { path: '/', label: 'Top' },
        { path: '/access', label: 'Access' },
        { path: '/pricing', label: 'Pricing' },
        { path: '/staff', label: 'Staff' },
        { path: '/reservation', label: 'Reservation', isCta: true },
    ];

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    ぶむちゃんお店
                </Link>

                {/* Desktop Menu */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`nav-link ${location.pathname === item.path ? 'active' : ''} ${item.isCta ? 'nav-cta' : ''}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="mobile-nav">
                        <ul className="mobile-nav-list">
                            {menuItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
