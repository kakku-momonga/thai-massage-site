import React from 'react';
import './Pricing.css';

interface PriceRow {
    duration: string;
    price: string;
}

interface MenuSectionProps {
    title: string;
    description: string;
    prices: PriceRow[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, description, prices }) => (
    <div className="menu-section card">
        <div className="menu-header">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="price-list">
            {prices.map((p, idx) => (
                <div key={idx} className="price-row">
                    <span className="price-duration">{p.duration}</span>
                    <span className="price-line"></span>
                    <span className="price-val">{p.price}</span>
                </div>
            ))}
        </div>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <div className="pricing-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Menu & Pricing</h1>
                </div>
            </div>

            <div className="container section">
                <div className="cash-alert">
                    <h2>お支払いについて</h2>
                    <p>
                        当店のお支払いは<span className="highlight-red">現金のみ</span>となっております。<br />
                        クレジットカード、電子マネー等はご利用いただけませんのでご注意ください。
                    </p>
                </div>

                <div className="pricing-grid">
                    <MenuSection
                        title="フットマッサージ"
                        description="足の疲れやむくみをスッキリ解消。クリームとオイルを使用します。"
                        prices={[
                            { duration: '30分', price: '¥3,500' },
                            { duration: '60分', price: '¥6,500' },
                        ]}
                    />
                    <MenuSection
                        title="タイ古式マッサージ"
                        description="全身の筋肉をほぐし、ストレッチで伸ばす伝統的なマッサージです。"
                        prices={[
                            { duration: '60分', price: '¥7,500' },
                            { duration: '90分', price: '¥10,500' },
                            { duration: '120分', price: '¥13,500' },
                        ]}
                    />
                    <MenuSection
                        title="オイルマッサージ"
                        description="厳選されたアロマオイルを使用し、極上のリラックスへ導きます。"
                        prices={[
                            { duration: '60分', price: '¥9,000' },
                            { duration: '90分', price: '¥12,500' },
                            { duration: '120分', price: '¥16,000' },
                        ]}
                    />
                    <MenuSection
                        title="ヘッドスパ"
                        description="頭皮のコリをほぐし、眼精疲労や睡眠不足の方におすすめです。"
                        prices={[
                            { duration: '30分', price: '¥4,000' },
                            { duration: '60分', price: '¥7,000' },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Pricing;
