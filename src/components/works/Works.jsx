import React, { useState } from 'react';
import './works.scss'

export default function Works() {
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
        }, {
            id: 3,
            icon: "assets/account.png",
            title: "Portfolio",
            desc: "Realizado con React y actualmente esta en proceso de mejora!",
            img: "assets/portfolio.png",
            link: "https://github.com/acostaag98/Comercio-Web",
        }
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className='works' id='works'>

            <div className="wrapper">
                <h1 data-heading="Proyectos">Proyectos</h1>
            </div>
            <div className='slider' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (
                    <div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src={d.icon} alt='' />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <div className="button_cont" align="center">
                                        <a className="example_e" href={d.link} target="_blank" rel="noreferrer">Ir al repositorio</a>
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={d.img} alt='' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src='assets/leftArrow.png' alt='' className='arrow left' onClick={() => handleClick("left")} />
            <img src='assets/leftArrow.png' alt='' className='arrow right' onClick={() => handleClick()} />

        </div>
    )
}