import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faHeart, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import LoginModal from "../loginModal/LoginModal";

class Navigation extends Component {

    state = {
        showModal: false
    }

    onShowModal = () => {
        this.setState({showModal: true})
    }

    onCloseModal = () => {
        this.setState({showModal: false})
    }

    onLogin = () => {

    }


    render() {

        let {location: {pathname}} = this.props;
        let {showModal} = this.state;

        return (
            <React.Fragment>
                <nav>
                    <ul>
                        <li className={pathname === '/' && 'active'}>
                            <Link to={'/'}>
                                <FontAwesomeIcon icon={faHome}/> <span>Home</span>
                            </Link>
                        </li>
                        <li className={pathname === '/favourites' && 'active'}>
                            <Link to={'/favourites'}>
                                <FontAwesomeIcon icon={faHeart}/> <span>My favs</span>
                            </Link>
                        </li>
                        <li>
                            <a onClick={this.onShowModal} style={{cursor: "pointer"}}>
                                <FontAwesomeIcon icon={faUser}/> <span>Log in</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <LoginModal showModal={showModal} handleCloseModal={this.onCloseModal} handleLogin={this.onLogin}/>
            </React.Fragment>
        );
    }

}

export default Navigation;