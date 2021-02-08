import React from 'react';
import about from '../img/about.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I'M
                    <span> Tuan Anh</span>
                </h4>
                <p className="about-text">
                    I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Nguyen Tuan Anh</p>
                        <p>: 28</p>
                        <p>: Viet Nam</p>
                        <p>: Vietnamese, Russian , Polish, English</p>
                        <p>: HEre 123 warszawa Polan</p>
                        <p>: Ukraine</p>
                    </div>
                </div>
                <a href="https://www.notion.so/Tuan-Anh-Nguyen-ae1effc899364eefb35c7c45ffb734d0" className="btn" target="_blank">Watch CV</a>
            </div>
        </div>
    )
}

export default ImageSection
