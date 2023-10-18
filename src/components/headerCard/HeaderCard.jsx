import React from 'react';
import './HeaderCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';


const HeaderCard = ({ text, length }) => {
    return (
        <div className="header-card">
            <div className="header-card-main">
                <div className="first-content">
                    <div className="header-card-icon"></div>
                    <span className='header-card-text'>{text}</span>
                    <span className="length">{length}</span>
                </div>
                <div className="second-content">
                    <div className="plus">+</div>
                    <div className="dots"><FontAwesomeIcon icon={faEllipsis} style={{ color: "#7c838d", }} /></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCard;