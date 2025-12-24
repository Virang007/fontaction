import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="top-header glass-card">
            <div className="logo">
                <Link to="/">VA</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/git">Git</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
            </ul>
        </nav>
    )
}

export default Header
