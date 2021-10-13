import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.scss'

export default function Contact() {
    const [message, setMessage] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_se6ihrj', 'template_pdq453p', form.current, 'user_SfYtaU2klerAUtBPWxdxL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setMessage(true)
    };
    return (
        <div className='contact' id='contact'>
            <section className="get-in-touch">
                <h1 className="title">Contáctame!</h1>
                <form className="contact-form row" ref={form} onSubmit={sendEmail}>
                    <div className="form-field col x-50">
                        <input id="name" className="input-text js-input" name="user_name" type="text" placeholder='Nombre' required />
                    </div>
                    <div className="form-field col x-50">
                        <input id="email" className="input-text js-input" name="user_email" type="email" placeholder='Email' required />
                    </div>
                    <div className="form-field col x-100">
                        <input id="message" className="input-text js-input" name="message" type="text" placeholder='Mensaje' required />
                    </div>
                    <div className="form-field col x-100 align-center">
                        <input className="submit-btn" type="submit" value="Enviar" />
                    </div>
                </form>
                {message && <span>  Gracias por tu mensaje, me contactaré contigo lo antes posible :) </span>}
                <div className='redes'>
                    <a  target='_blank' rel="noreferrer" href="https://github.com/acostaag98">
                        <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/agust%C3%ADn-acosta-51ba471a7/">
                        <i className="fab fa-linkedin-in fa-3x"></i>
                    </a>
                </div>
            </section>
        </div>

    )
}