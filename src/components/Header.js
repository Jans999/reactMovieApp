import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Header() {
    return(
            <header>
                <nav className="main_nav">
                <h1>
                    <Link to="/"> Movie app </Link>
                </h1>
                <ul className="nav_links">
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/trending">Trending </Link>
                    </li>
                    <li>
                        <Link to="/genres">Genre </Link>
                    </li>
                    <li>
                        <form>
                            <input placeholder="Search" type="text" className="search_bar" />
                            <input type="image" src="./assets/search_icon.png" alt="search" />
                        </form>
                    </li>
                </ul>
                </nav>
            </header>
    )
}

export default Header;