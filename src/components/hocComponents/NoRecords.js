import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMeh} from "@fortawesome/free-solid-svg-icons";

const NoRecords = () => {
    return (
        <div style={{
            textAlign: "center",
            padding: "20vh 0",
            fontSize: "2rem"
        }}>
            <FontAwesomeIcon icon={faMeh}/> <span>Sorry! There's no matching records!</span>
        </div>
    );
};

export default NoRecords;