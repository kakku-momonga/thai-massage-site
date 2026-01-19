import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3 className="footer-logo">ぶむちゃんお店</h3>
                    <p className="footer-desc">
                        究極の癒しとリラクゼーションを提供する<br />
                        本格タイマッサージサロン
                    </p>
                </div>

                <div className="footer-section">
                    <h4>店舗情報</h4>
                    <ul className="footer-info">
                        <li>
                            <MapPin size={18} className="footer-icon" />
                            <span>〒231-0002 神奈川県横浜市中区海岸通1-1</span>
                        </li>
                        <li>
                            <Phone size={18} className="footer-icon" />
                            <span>03-1234-5678</span>
                        </li>
                        <li>
                            <Clock size={18} className="footer-icon" />
                            <span>10:00 - 22:00（最終受付 21:00）</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-section payment-alert">
                    <h4>お支払いについて</h4>
                    <div className="cash-only-box">
                        <p>※当店のお支払いは<strong>現金のみ</strong>となっております。</p>
                        <p>クレジットカード・電子マネーはご利用いただけません。</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Bumuchan Massage. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
