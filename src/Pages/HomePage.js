import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                },
                            },
                            "color": {
                                "value": "#0056d898"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#037FFF"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "window",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }
                    }

                />
                <h1 className="hero-text">
                    Hi, I'm
             <span> Tuan Anh</span>
                </h1>
                <p className="h-sub-text">
                    I am Junior-level Frontend Developer looking for a place under the sun where I will be able to develop my hard and soft skills by solving complex and challenging objectives.
                </p>
                <div className="icons">
                    <Link className="icon-holder" to="//facebook.com" target="_blank" >
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />:
                    </Link>
                    <Link className="icon-holder" to="//github.com/Apogaming" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder" to="//linkedin.com/in/tuan-anh-nguyen-20b4851b8/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon in" />
                    </Link>

                </div>
            </header>

        </div >
    )
}

export default HomePage