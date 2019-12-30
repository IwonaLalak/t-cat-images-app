import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faLink} from "@fortawesome/free-solid-svg-icons";
import keyboardCodes from "../../utilities/keyboardCodes";

class ItemActions extends Component {

    state = {
        isCopied: false,
        isAddedToFav: false,
    }

    componentWillMount() {
        if (this.props.allowUseKeydown)
            document.addEventListener('keydown', this.handleKeydown, false)
    }

    componentWillUnmount() {
        if (this.props.allowUseKeydown)
            document.removeEventListener('keydown', this.handleKeydown, false)
    }

    handleKeydown = (key) => {
        if (key.keyCode === keyboardCodes.key_F) {
            this.addToFavourites()
        }
        else if (key.keyCode === keyboardCodes.key_S) {
            this.shareLink()
        }
    }

    shareLink = () => {

        var el = document.createElement('textarea');

        let url = window.location.href;
        let id = this.props.id

        el.value = `${url}image/${id}`;

        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.setState({isCopied: true})

    }

    addToFavourites = () => {
        this.setState((prevState) => ({isAddedToFav: !prevState.isAddedToFav}));

        //todo: rest
    }

    render() {
        let {isCopied, isAddedToFav} = this.state;

        return (
            <div className={'ItemActions'}>
                <ul>
                    <li onClick={this.shareLink}>
                        <FontAwesomeIcon icon={faLink}/> <span>{isCopied ? <i>*copied*</i> : 'share'} </span>
                    </li>
                    <li onClick={this.addToFavourites} className={isAddedToFav && 'addedToFavourites'}>
                        <FontAwesomeIcon icon={faHeart}/> <span>{isAddedToFav ? 'favourite' : 'add to fav'}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

ItemActions.propTypes = {
    id: PropTypes.string,
    allowUseKeydown: PropTypes.bool
};

ItemActions.defaultProps = {
    allowUseKeydown: false
};

export default ItemActions;