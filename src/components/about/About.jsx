import React, { useState } from 'react';
import './about.scss'

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            icon: "assets/carrito.png",
            title: "Venta de vinilos",
            desc: "Es un E-commerce el cual esta destinado a la venta de vinilos. Este se realizó en el curso de React Js by CoderHouse en el año 2020. Las tecnologías utilizadas fueron: React y Firebase.",
            img: "assets/ecommerce.png",
            link: "https://github.com/acostaag98/Comercio-Web",
        }, {
            id: 2,
            icon: "assets/loginLogo.png",
            title: "Login + CRUD ",
            desc: "Realizado con Angular, llamando a una API y utilizando token de seguridad. Para el curso de Angular x Icaro UNC en el año 2020.",
            img: "assets/login.png",
            link: "https://github.com/acostaag98/AngularUNC",
        }
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className='about' id='about'>
            <div className="wrapper">
                <h1 data-heading="Sobre mí">Sobre mí</h1>
            </div>
            <div className='slider' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                <div className='container'>
                    <div className='item'>
                        <div className='left'>
                            <div className='leftContainer'>
                                <p>
                                    ¡Hola! Mi nombre es Agustín y me encanta desarrollar sitios web (principalmente front-end). Mi interés en el desarrollo web comenzó
                                    en 2019 mientras estudiaba Ingeniería en Sistemas. Actualmente me encuentro formandome de manera autodidacta con el objetivo de encontrar un trabajo donde pueda poner en práctica todos los conocimientos adquiridos durante mi formación y
                                    formar parte de un equipo que me permita seguir creciendo de manera profesional y personal.
                                </p>
                                <div className="button_cont" align="center">
                                    <a className="example_e" href="assets/AgustinAcostaCV.pdf" target="_blank" rel="noreferrer">Descargar CV</a>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <img src="assets/agusitofaxa.jpg" alt='' />
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='item2'>
                        <div className="button_cont" align="center">
                            <a className="example_e"  target="_blank" rel="noreferrer">Skills</a>
                        </div>
                        <div className='left2'>
                            <a target='_blank' href="" rel="noreferrer" >
                                <i className="fab fa-html5 fa-9x"></i>
                            </a>
                            <a target='_blank' href="" rel="noreferrer" >
                                <i className="fab fa-css3 fa-9x"></i>
                            </a>
                            <a target='_blank' href="" rel="noreferrer" >
                                <i className="fab fa-js fa-9x"></i>
                            </a>
                            <a target='_blank' href="" rel="noreferrer" >
                                <i className="fab fa-react fa-9x"></i>
                            </a>
                        </div>
                        <div className='right2'>
                            <a target='_blank' href="" rel="noreferrer" >
                                <i className="fab fa-angular fa-9x"></i>
                            </a>
                            <a target='_blank' href="" rel="noreferrer">
                                <i className="fab fa-python fa-9x"></i>
                            </a>
                            <a target='_blank' href="" rel="noreferrer">
                            <i className="fab fa-npm fa-9x"></i>
                            </a>
                            <a target='_blank' href="" rel="noreferrer">
                                <i className="fab fa-git fa-9x"></i>
                            </a>

                        </div>

                    </div>
                </div>

            </div>
            <img src='assets/leftArrow.png' alt='' className='arrow left' onClick={() => handleClick("left")} />
            <img src='assets/leftArrow.png' alt='' className='arrow right' onClick={() => handleClick()} />

        </div>
    )
}