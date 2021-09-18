import React from "react"
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <Link to="/">
                    <li className="logo">
                        <a className="nav-link">
                            <span className="link-text">
                                dilemma
                            </span>
                        </a>
                    </li>
                </Link>
                <Link to="/bio">
                    <li className="nav-item">
                        <a className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alien" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="coral" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                                <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                                <line x1="8" y1="11" x2="10" y2="13" />
                                <line x1="16" y1="11" x2="14" y2="13" />
                            </svg>
                            <span className="link-text">
                                alien
                            </span>
                        </a>
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="nav-item">
                        <a className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="coral" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="3.6" y1="9" x2="20.4" y2="9" />
                                <line x1="3.6" y1="15" x2="20.4" y2="15" />
                                <path d="M11.5 3a17 17 0 0 0 0 18" />
                                <path d="M12.5 3a17 17 0 0 1 0 18" />
                            </svg>
                            <span className="link-text">
                                world
                            </span>
                        </a>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Header;
