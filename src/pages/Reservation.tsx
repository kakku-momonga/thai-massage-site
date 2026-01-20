import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import './Reservation.css';

interface ReservationFormInputs {
    name: string;
    contact: string;
    menu: string;
    duration: string;
    date: string;
    time: string;
    remarks?: string;
}

const Reservation: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ReservationFormInputs>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit: SubmitHandler<ReservationFormInputs> = (data) => {
        console.log(data);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <div className="reservation-complete-page container section">
                <div className="complete-card card">
                    <CheckCircle size={64} color="#1a472a" />
                    <h2>予約リクエストを受け付けました</h2>
                    <p>
                        ご予約ありがとうございます。<br />
                        担当者より折り返しご連絡させていただきます。
                    </p>
                    <div className="complete-note">
                        <p>※まだ予約は確定しておりません。</p>
                        <p className="cash-reminder">当日のお支払いは<strong>現金のみ</strong>となります。</p>
                    </div>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">
                        トップページへ戻る
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="reservation-page">
            {/* LP Hero */}
            <div className="lp-hero">
                <div className="lp-hero-content container">
                    <h1>至福の時間を予約する</h1>
                    <p>Web限定の簡単予約受付中</p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('reservation-form');
                            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="btn btn-accent btn-lg"
                    >
                        予約入力フォームへ
                    </button>
                </div>
            </div>

            <div className="container section">
                {/* Reasons */}
                <div className="reasons-section">
                    <h2 className="section-title">当店が選ばれる理由</h2>
                    <div className="reasons-grid">
                        <div className="reason-item">
                            <div className="icon">01</div>
                            <h3>確かな技術力</h3>
                            <p>本場で修行を積んだセラピストが担当します</p>
                        </div>
                        <div className="reason-item">
                            <div className="icon">02</div>
                            <h3>完全個室</h3>
                            <p>周りを気にせずリラックスできる空間</p>
                        </div>
                        <div className="reason-item">
                            <div className="icon">03</div>
                            <h3>衛生管理徹底</h3>
                            <p>清潔なリネンと空間を提供します</p>
                        </div>
                    </div>
                </div>

                {/* Steps */}
                <div className="steps-section">
                    <h2 className="section-title">ご予約の流れ</h2>
                    <div className="steps-container">
                        <div className="step">
                            <div className="step-num">1</div>
                            <p>フォーム入力</p>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-num">2</div>
                            <p>確認連絡</p>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-num">3</div>
                            <p>予約確定</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div id="reservation-form" className="reservation-form-container card">
                    <div className="form-header">
                        <h2>予約入力フォーム</h2>
                        <div className="form-alert">
                            <AlertTriangle size={20} />
                            <span>お支払いは当日<strong>現金のみ</strong>となります</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="reservation-form">
                        <div className="form-group">
                            <label>お名前 <span className="required">必須</span></label>
                            <input
                                {...register("name", { required: "お名前は必須です" })}
                                placeholder="例：山田 花子"
                            />
                            {errors.name && <span className="error-msg">{errors.name.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>連絡先（電話番号 or メール） <span className="required">必須</span></label>
                            <input
                                {...register("contact", { required: "連絡先は必須です" })}
                                placeholder="例：090-0000-0000"
                            />
                            {errors.contact && <span className="error-msg">{errors.contact.message}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>希望メニュー <span className="required">必須</span></label>
                                <select {...register("menu", { required: "メニューを選択してください" })}>
                                    <option value="">選択してください</option>
                                    <option value="foot">フットマッサージ</option>
                                    <option value="thai">タイ古式マッサージ</option>
                                    <option value="oil">オイルマッサージ</option>
                                    <option value="head">ヘッドスパ</option>
                                </select>
                                {errors.menu && <span className="error-msg">{errors.menu.message}</span>}
                            </div>

                            <div className="form-group">
                                <label>希望時間 <span className="required">必須</span></label>
                                <select {...register("duration", { required: "時間を選択してください" })}>
                                    <option value="">選択してください</option>
                                    <option value="30">30分</option>
                                    <option value="60">60分</option>
                                    <option value="90">90分</option>
                                    <option value="120">120分</option>
                                </select>
                                {errors.duration && <span className="error-msg">{errors.duration.message}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>希望日 <span className="required">必須</span></label>
                                <input
                                    type="date"
                                    {...register("date", { required: "日付を選択してください" })}
                                />
                                {errors.date && <span className="error-msg">{errors.date.message}</span>}
                            </div>

                            <div className="form-group">
                                <label>開始時間 <span className="required">必須</span></label>
                                <input
                                    type="time"
                                    {...register("time", { required: "時間を選択してください" })}
                                />
                                {errors.time && <span className="error-msg">{errors.time.message}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>備考（任意）</label>
                            <textarea
                                {...register("remarks")}
                                placeholder="ご要望や指名希望があればご記入ください"
                                rows={4}
                            ></textarea>
                        </div>

                        <div className="form-submit">
                            <button type="submit" className="btn btn-primary btn-submit">予約を申し込む</button>
                        </div>
                    </form>
                </div>

                {/* FAQ */}
                <div className="faq-section">
                    <h2 className="section-title">よくある質問</h2>
                    <div className="faq-item">
                        <h4>Q. クレジットカードは使えますか？</h4>
                        <p>A. 申し訳ございませんが、<strong>現金のみ</strong>のお支払いとなっております。</p>
                    </div>
                    <div className="faq-item">
                        <h4>Q. 着替えはありますか？</h4>
                        <p>A. はい、無料でお着替えをご用意しております。</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reservation;
