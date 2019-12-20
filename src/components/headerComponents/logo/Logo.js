import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCat} from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
    return (
        <h1 id={'logo'}>
            <FontAwesomeIcon icon={faCat}/>
            <span>Cat</span>
            <span>images</span>
        </h1>
    );
};

export default Logo;