import React, { useEffect, useRef } from 'react';
import {init} from 'ityped';
import './intro.scss'

export default function Intro() {
    const textRef = useRef();
    useEffect(() =>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'Trainee']
        })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className='left'>
            <div id="snow"></div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Agustín Acosta</h1>
                    <h3>Front End <span ref={textRef}></span></h3>
                </div>
                <a href='#about'>
                    <img src='assets/down.png' alt=''/>
                </a>
            </div>
        </div>
    )
}