import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438344267!2d20.921111190247053!3d52.233065321332326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2z0JLQsNGA0YjQsNCy0LA!5e0!3m2!1sru!2spl!4v1612555672114!5m2!1sru!2spl" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+48 787 798 727'} text2={'+38 093 73 57 525'} title={'Phone'} />
                    <ContactItem icon={email} text1={'22tuananhnguyen@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Warsawa'} text2={'Poland'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
