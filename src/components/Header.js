import React from 'react';
import '../App.css';

function Header() {
    return(
        <header>
            <nav className="main_nav">
            <h1>Movie app</h1>
            <ul className="nav_links">
                <li>Home</li>
                <li>Genre</li>
                <li>
                    <form>
                        <label for="">Search </label><input type="text" />
                    </form>
                </li>
            </ul>
            </nav>
      </header>
    )
}

export default Header;