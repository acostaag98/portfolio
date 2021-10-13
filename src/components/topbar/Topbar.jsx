import './topbar.scss'


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"Topbar " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Agustín</a>
                </div>
                <div className='right'>
                    <div className='hamburguer' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}