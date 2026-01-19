import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import MenuCard from '../components/MenuCard';
import { resolveImagePath } from '../utils/imagePath';
import './Top.css';

const Top: React.FC = () => {
    const testimonials = [
        { text: "まるでタイにいるかのような空間で、日頃の疲れが吹き飛びました。", author: "30代 女性" },
        { text: "力加減が絶妙で、終わった後のスッキリ感が違います。また来ます。", author: "40代 男性" },
        { text: "店内の雰囲気がとても良く、スタッフの方も親切でした。", author: "20代 女性" },
    ];

    return (
        <div className="top-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    {/* <div className="cash-only-hero">
                        <span>⚠️ お支払いは現金のみ</span>
                    </div> */}
                    <h1>深い癒しを、<br />上質な空間で。</h1>
                    <p className="hero-subtitle">タイ伝統の手技で、<br className="sp-only" />心身を整えるリラクゼーション</p>
                    <div className="hero-cta">
                        <Link to="/reservation" className="btn btn-accent btn-lg">
                            今すぐ予約する
                            <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section bg-pattern">
                <div className="container">
                    <h2 className="section-title">施術メニュー</h2>
                    <p className="section-desc">お客様一人ひとりに合わせた、至福のひとときをご提供します。</p>

                    <div className="services-grid">
                        <MenuCard
                            imageSrc={resolveImagePath("/image/foot.jpg")}
                            title="フットマッサージ"
                            description="足裏の反射区を刺激し、全身の血行を促進。むくみや疲れを解消します。"
                            duration="30分〜"
                        />
                        <MenuCard
                            imageSrc={resolveImagePath("/image/thai.jpg")}
                            title="タイ古式マッサージ"
                            description="「二人でするヨガ」とも呼ばれる伝統的な手法で、全身をゆっくりと伸ばします。"
                            duration="60分〜"
                        />
                        <MenuCard
                            imageSrc={resolveImagePath("/image/oil.jpg")}
                            title="オイルマッサージ"
                            description="アロマオイルを使用し、リンパの流れを整えながら深いリラックスへ導きます。"
                            duration="60分〜"
                        />
                        <MenuCard
                            imageSrc={resolveImagePath("/image/headspa.jpg")}
                            title="ヘッドスパ"
                            description="頭皮のコリをほぐし、眼精疲労やストレスを和らげます。"
                            duration="30分〜"
                        />
                    </div>

                    <div className="center-btn">
                        <Link to="/pricing" className="btn btn-primary">メニュー・料金一覧へ</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <h2 className="section-title text-gold">当店が選ばれる理由</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-number">01</div>
                            <h3>完全個室のプライベート空間</h3>
                            <p>周りを気にせず、ゆったりとした時間をお過ごしいただけます。</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">02</div>
                            <h3>熟練スタッフによる確かな技術</h3>
                            <p>本場で学んだ技術を持つスタッフが、お客様の状態に合わせて施術します。</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">03</div>
                            <h3>五感で感じる癒し</h3>
                            <p>インテリア、香り、音楽、照明。すべてにこだわり、深いリラックスを演出します。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">お客様の声</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="testimonial-card card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#d4af37" color="#d4af37" />)}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <p className="testimonial-author">- {t.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Top;
