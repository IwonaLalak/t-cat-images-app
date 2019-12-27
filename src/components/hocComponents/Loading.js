import React from 'react';
import {ClipLoader} from "react-spinners";
import jsColors from "../../utilities/jsColors/jsColors";

const Loading = () => {
    return (
        <div style={{textAlign: "center", padding: "20vh 0"}}><ClipLoader color={jsColors.secondary} size={100}/></div>
    );
};

export default Loading;