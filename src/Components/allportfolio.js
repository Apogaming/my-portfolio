import port1 from '../img/portImages/maya-1.jpg';
import port2 from '../img/portImages/port1.jpg';
import port3 from '../img/portImages/port2.jpg';
import port4 from '../img/portImages/port3.jpg';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const portfolios = [
    {
        id: 1,
        category: 'Javascript',
        link1: '//github.com/Apogaming/searchNews',
        link2: '//apogaming.github.io/searchNews/',
        icon1: 'Git',
        icon2: 'Demo',
        image: port1,
        title: 'What happens in the WORLD',
        subtitle: 'Search for any topic to see how popular it was from latter week',
    },
    {
        id: 2,
        category: 'Animation',
        link1: '//github.com/Apogaming/trustfactory',
        link2: '//apogaming.github.io/trustfactory/',
        icon1: 'Git',
        icon2: 'Demo',
        image: port2,
        title: 'Sign in and Sign up',
        subtitle: 'Click to "Sign up here"',
    },
    {
        id: 3,
        category: 'Javascript',
        link1: '//github.com/Apogaming/SaveYourImage',
        link2: '//apogaming.github.io/SaveYourImage/',
        icon1: 'Git',
        icon2: 'Demo',
        image: port3,
        title: 'SaveYourImage',
        subtitle:'The Place service is an interactive page where you can post photos, delete them, and like them',
    },
    {
        id: 4,
        category: 'CSS',
        link1: '//github.com/Apogaming/rus-travel',
        link2: '//apogaming.github.io/rus-travel/',
        icon1: 'Git',
        icon2: 'Demo',
        image: port4,
        title: 'Russian travel',
        subtitle:'Website about travel in russia',
    },
//     {
//         id: 5,
//         category: 'React Js',
//         link1: 'www.youtube.com',
//         link2: 'www.github.com',
//         icon1: 'Git',
//         icon2: 'Demo',
//         image: port6,
//         title: 'Getting Started With React'
//     },
//     {
//         id: 6,
//         category: 'React Js',
//         link1: 'www.youtube.com',
//         link2: 'www.github.com',
//         icon1: 'Git',
//         icon2: 'Demo',
//         image: port7,
//         title: 'Vanilla Javascript Website'
//     },
//     {
//         id: 7,
//         category: 'Test Port',
//         link1: 'www.youtube.com',
//         link2: 'www.github.com',
//         icon1: 'Git',
//         icon2: 'Demo',
//         image: port4,
//         title: 'Vanilla Javascript Website'
//     }
]

export default portfolios;