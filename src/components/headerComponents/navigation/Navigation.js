import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faHeart, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li className={'active'}>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faHome}/> Home
                    </Link>
                </li>
                <li>
                    <Link to={'/favourites'}>
                        <FontAwesomeIcon icon={faHeart}/> My favs
                    </Link>
                </li>
                <li>
                    <Link to={'/favourites'}>
                        <FontAwesomeIcon icon={faUser}/> Log in
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;