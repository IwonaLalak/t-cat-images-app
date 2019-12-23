import React from 'react';
import PropTypes from 'prop-types';
import ImagesListRow from "./ImagesListRow";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSyncAlt} from "@fortawesome/free-solid-svg-icons";

const ImagesList = ({data}) => {

    return (
        <div id={'ImagesList'}>
            {
                data.map(item => <ImagesListRow item={item}/>)
            }
            <div className={'text-center'}>
                <Button type={'button'}><FontAwesomeIcon icon={faSyncAlt}/> load more</Button>
            </div>
        </div>
    );
};

ImagesListRow.propTypes = {
    data: PropTypes.array
};

export default ImagesList;