import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";


function App() {
    return (
        <div id="app">
            <p>
                <FontAwesomeIcon icon={faCat} />  Cat images app supported by <a href={"https://thecatapi.com"} target={"_blank"} style={{color: "dodgerblue"}}>CAT API</a>
            </p>
        </div>
    );
}

export default App;
