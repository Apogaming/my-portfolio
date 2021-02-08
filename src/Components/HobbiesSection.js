import React from 'react';

function HobbiesSection({ image, title, text }) {
    return (
        <div className="HobbiesSection">
            <div className="hobbies">
                <div className="hobbies-content">
                    <h5 className="h-title">{title}</h5>
                    <img src={image} alt="" />
                    <p className="h-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HobbiesSection;
