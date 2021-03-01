import React from 'react'
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import HobbiesSection from '../Components/HobbiesSection';
import sport from '../img/sport.svg';
import hobbies from '../img/hobbies.svg';
import gamedev from '../img/game-dev.svg';
import html5 from '../img/html5.svg';
import css from '../img/css.svg';
import javascpirt from '../img/javascpirt.svg';
import react from '../img/react.svg';
import sass from '../img/sass.svg';
import nodejs from '../img/nodejs.svg';
import webpack from '../img/webpack.svg';
import typescript from '../img/typescript.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">

                <SkillsSection skill={'HTML'} image={html5} />
                <SkillsSection skill={'CSS'} image={css} />
                <SkillsSection skill={'JAVASCRIPT'} image={javascpirt} />
                <SkillsSection skill={'REACT JS'} image={react} />
                <SkillsSection skill={'NODE JS'} image={nodejs} />
                <SkillsSection skill={'WEBPACK'} image={webpack} />
                <SkillsSection skill={'TYPESCRIPT'} image={typescript} />
                <SkillsSection skill={'SCSS'} image={sass} />
            </div>

            <Tittle title={'Hobbies'} span={'Hobbies'} />
            <div className="hobbies-container">
                <HobbiesSection title={'Sports'}
                    image={sport}
                    text={'Football, Snowboard , Table tennis'}
                />

                <HobbiesSection title={'Free times'}
                    image={hobbies}
                    text={'Music , Books , Cook and EAT'}
                />
                <HobbiesSection title={'Games'}
                    image={gamedev}
                    text={'Dota2 , Hearthstone, CS:GO'}
                />


            </div>
        </div>
    )
}
export default AboutPage;