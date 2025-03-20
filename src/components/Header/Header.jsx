import './header.css'

export default function Header() {
    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="nav-background">
                    <ul className='nav-list'>
                        <li className='nav-item'><a href="#inicio">Início</a></li>
                        <li className='nav-item'><a href="#experiencia">Experiência</a></li>
                        <li className='nav-item'><a href="#projetos">Projetos</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}