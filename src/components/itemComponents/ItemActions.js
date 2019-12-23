import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faLink} from "@fortawesome/free-solid-svg-icons";

class ItemActions extends Component {

    state = {
        isCopied:false,
        isAddedToFav:false,
    }

    shareLink = () => {

        var el = document.createElement('textarea');
        el.value = this.props.id;
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        this.setState({isCopied:true})

    }

    addToFavourites = () => {
        this.setState((prevState) => ({isAddedToFav:!prevState.isAddedToFav}));

        //todo: rest
    }

    render() {
        let {isCopied,isAddedToFav} = this.state;

        return (
            <div className={'ItemActions'}>
                <ul>
                    <li onClick={this.shareLink}>
                        <FontAwesomeIcon icon={faLink}/> <span>{isCopied?<i>*copied*</i>:'share'} </span>
                    </li>
                    <li onClick={this.addToFavourites} className={isAddedToFav && 'addedToFavourites'}>
                        <FontAwesomeIcon icon={faHeart}/> <span>{isAddedToFav? 'favourite':'add to fav'}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

ItemActions.propTypes = {
    id: PropTypes.string
};

export default ItemActions;