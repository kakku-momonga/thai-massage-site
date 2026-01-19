import React from 'react';
import { Clock } from 'lucide-react';
import './MenuCard.css';

interface MenuCardProps {
    imageSrc: string;
    title: string;
    description: string;
    duration: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ imageSrc, title, description, duration }) => {
    return (
        <div className="menu-card card">
            <div className="menu-card-image">
                <img src={imageSrc} alt={title} loading="lazy" />
            </div>
            <div className="menu-card-content">
                <h3 className="menu-card-title">{title}</h3>
                <p className="menu-card-desc">{description}</p>
                <div className="menu-card-footer">
                    <div className="menu-duration">
                        <Clock size={16} />
                        <span>目安: {duration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
