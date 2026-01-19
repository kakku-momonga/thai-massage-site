import React from 'react';
import { resolveImagePath } from '../utils/imagePath';
import './Staff.css';

interface StaffMember {
    name: string;
    specialty: string;
    comment: string;
    image: string;
}

const Staff: React.FC = () => {
    const staffMembers: StaffMember[] = [
        {
            name: "Nana",
            specialty: "タイ古式マッサージ",
            comment: "本場で学んだ技術で、お客様の体をしっかりとほぐします。強めのマッサージがお好きな方はぜひお任せください。",
            image: resolveImagePath("/image/staff-nana.png")
        },
        {
            name: "Aki",
            specialty: "オイルマッサージ",
            comment: "アロマの香りに包まれながら、心身ともにリラックスできる時間を提供します。丁寧な施術を心がけています。",
            image: resolveImagePath("/image/staff-aki.jpg")
        },
        {
            name: "Mai",
            specialty: "ヘッドスパ / フェイシャル",
            comment: "細かい部分への気配りを大切にしています。お疲れの箇所があれば、遠慮なくお申し付けください。",
            image: resolveImagePath("/image/staff-03.jpg")
        },
    ];

    return (
        <div className="staff-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Staff</h1>
                </div>
            </div>

            <div className="container section">
                <div className="staff-intro">
                    <p>経験豊富なスタッフが、心を込めて施術いたします。</p>
                </div>

                <div className="staff-grid">
                    {staffMembers.map((staff, idx) => (
                        <div key={idx} className="staff-card card">
                            <div className="staff-image">
                                <img src={staff.image} alt={staff.name} loading="lazy" />
                            </div>
                            <div className="staff-content">
                                <h3 className="staff-name">{staff.name}</h3>
                                <div className="staff-specialty">得意施術: {staff.specialty}</div>
                                <p className="staff-comment">{staff.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Staff;
