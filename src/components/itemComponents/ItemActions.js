import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faLink} from "@fortawesome/free-solid-svg-icons";
import keyboardCodes from "../../utilities/keyboardCodes";
import LoginService from "../../services/LoginService";
import FavouriteService from "../../services/FavouriteService";

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

        if (LoginService.checkIfUserIsLogged()) {

            if (!this.state.isAddedToFav) {
                let data = {
                    "image_id": this.props.id,
                    "sub_id": "usr_" + LoginService.getCurrentUserEncoded()
                }

                FavouriteService.addToFavourites(data)
                    .then(response => {

                        if (response.status < 300) {
                            this.setState({isAddedToFav: true})
                        } else {
                            console.error('Something went wrong')
                        }

                    })
                    .catch(error => {
                        console.error('Something went wrong')
                        console.log(error)
                    })
            }

        }
    }

    render() {
        let {isCopied, isAddedToFav} = this.state;
        let isLogged = LoginService.checkIfUserIsLogged();

        return (
            <div className={'ItemActions'}>
                <ul>
                    <li onClick={this.shareLink}>
                        <FontAwesomeIcon icon={faLink}/> <span>{isCopied ? <i>*copied*</i> : 'share'} </span>
                    </li>
                    {
                        isLogged &&
                        <li onClick={this.addToFavourites} className={isAddedToFav && 'addedToFavourites'}>
                            <FontAwesomeIcon icon={faHeart}/> <span>{isAddedToFav ? 'favourite' : 'add to fav'}</span>
                        </li>
                    }
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