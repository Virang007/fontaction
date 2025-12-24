import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="top-header animate-in">
            <div className="header-inner glass-card">
                <div className="logo">
                    <Link to="/">VA<span>.</span></Link>
                </div>
                <nav className="nav-container">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/git">Projects</Link></li>
                        <li><Link to="/privacy">Privacy</Link></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <a href="https://github.com/Virang007" target="_blank" rel="noopener noreferrer" className="btn-small">
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
