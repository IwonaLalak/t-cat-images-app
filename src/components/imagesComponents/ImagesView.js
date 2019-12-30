import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faSquare} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from 'react-tooltip'

const ImagesView = (props) => {
    return (
        <div id={'ImageView'} >
            <ul data-for="tooltip-01" data-tip="Change_view">
                <li className={props.active === 'list' && "active"} onClick={() => props.handleChangeView('list')}>
                    <FontAwesomeIcon icon={faList}/>
                </li>
                <li className={props.active === 'tile' && "active"} onClick={() => props.handleChangeView('tile')}>
                    <FontAwesomeIcon icon={faSquare}/>
                </li>
            </ul>
            <ReactTooltip id={'tooltip-01'} place={"right"}>
                <span>Change view of items to list or single tile.</span>
            </ReactTooltip>
        </div>
    );
};

ImagesView.propTypes = {
    handleChangeView: PropTypes.func,
    active: PropTypes.string,
};
export default ImagesView;