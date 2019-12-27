import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import jsColors from "../../utilities/jsColors/jsColors";
import {ClipLoader} from "react-spinners";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCat} from "@fortawesome/free-solid-svg-icons";

class ItemImage extends Component {

    state = {
        isLoaded: false
    }

    showImage = () => {
        this.setState({isLoaded: true})
    }

    render() {
        let {url, height, width} = this.props;

        return (
            <div className={'ItemImage'}>
                <div className={'loadingBackground'} style={this.state.isLoaded ? {display: 'none'} : {display: 'block'}}>
                    <div><ClipLoader color={jsColors.secondary} size={75}/></div>
                    <div>
                        <FontAwesomeIcon icon={faCat}/>
                    </div>
                </div>
                <LazyLoad>
                    <img onLoad={this.showImage}
                         style={!this.state.isLoaded ? {visibility: 'hidden', opacity: 0} : {visibility: 'visible', opacity: 1}} src={url} alt={url}/>
                </LazyLoad>
            </div>
        )
    }
}

ItemImage.propTypes = {
    url: PropTypes.string
};

export default ItemImage;
