import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faHeart, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navigation = ({location: {pathname}}) => {
    return (
        <nav>
            <ul>
                <li className={pathname === '/' && 'active'}>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faHome}/> <span>Home</span>
                    </Link>
                </li>
                <li className={pathname === '/favourites' && 'active'}>
                    <Link to={'/favourites'}>
                        <FontAwesomeIcon icon={faHeart}/> <span>My favs</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/favourites'}>
                        <FontAwesomeIcon icon={faUser}/> <span>Log in</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;