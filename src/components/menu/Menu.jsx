import React from 'react';
import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#about'>Sobre mí</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#works'>Proyectos</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#contact'>Contacto</a>
                </li>
            </ul>
        </div>
    )
}