import React from 'react';
import './Access.css';

const Access: React.FC = () => {
    return (
        <div className="access-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Access</h1>
                </div>
            </div>

            <div className="container section">
                <div className="access-layout">
                    <div className="access-info">
                        <h2 className="info-title">店舗情報</h2>

                        <div className="info-row">
                            <h3>住所</h3>
                            <p>
                                〒231-0002<br />
                                神奈川県横浜市中区海岸通1-1
                            </p>
                        </div>

                        <div className="info-row">
                            <h3>アクセス</h3>
                            <p>みなとみらい線「日本大通り駅」より徒歩約5分</p>
                        </div>

                        <div className="info-row">
                            <h3>営業時間</h3>
                            <p>10:00 - 22:00（最終受付 21:00）</p>
                            <p>定休日：不定休</p>
                        </div>

                        <div className="info-row">
                            <h3>電話番号</h3>
                            <p className="phone">03-1234-5678</p>
                        </div>

                        <div className="info-row note">
                            <span className="badge-cash">現金のみ</span>
                            <p>※お支払いは現金のみとなりますので、予めご了承ください。</p>
                        </div>
                    </div>

                    <div className="access-map">
                        <iframe
                            src="https://maps.google.com/maps?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E4%B8%AD%E5%8C%BA%E6%B5%B7%E5%B2%B8%E9%80%9A1-1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Access;
