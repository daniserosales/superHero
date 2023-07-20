import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function Header () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/heros" style={styles}>Super Heroes</NavLink>                    
                </nav>
            </header>
            <Outlet />
        </main>
    )
};
