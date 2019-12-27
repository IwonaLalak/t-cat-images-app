import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSadCry} from "@fortawesome/free-solid-svg-icons";

const RequestError = () => {
    return (
        <div style={{
            textAlign: "center",
            padding: "20vh 0",
            fontSize: "2rem"
        }}>
            <FontAwesomeIcon icon={faSadCry}/> <span>Something went wrong! Cannot reach images!</span>
        </div>
    );
};

export default RequestError;