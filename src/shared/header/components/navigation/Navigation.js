import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faHeart, faUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import LoginModal from "../loginModal/LoginModal";
import LoginService from "../../../../services/LoginService";
import {withRouter} from "react-router";

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

    onLogin = (login) => {
        LoginService.login(login)
            .then(response => {
                this.onCloseModal();
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }


    onLogout = () => {
        LoginService.logout()
            .then(response => {
                this.onCloseModal();
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        let {location: {pathname}} = this.props;
        let {showModal} = this.state;

        let isUserLogged = LoginService.checkIfUserIsLogged();

        return (
            <React.Fragment>
                <nav>
                    <ul>
                        <li className={pathname === '/' && 'active'}>
                            <Link to={'/'}>
                                <FontAwesomeIcon icon={faHome}/> <span>Home</span>
                            </Link>
                        </li>
                        {
                            isUserLogged &&
                            <li className={pathname === '/favourites' && 'active'}>
                                <Link to={'/favourites'}>
                                    <FontAwesomeIcon icon={faHeart}/> <span>My favs</span>
                                </Link>
                            </li>
                        }
                        <li>
                            {
                                isUserLogged ?
                                    <a onClick={this.onLogout} style={{cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faSignOutAlt}/> <span>Log out</span>
                                    </a>
                                    :
                                    <a onClick={this.onShowModal} style={{cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faUser}/> <span>Log in</span>
                                    </a>
                            }
                        </li>
                    </ul>
                </nav>
                <LoginModal showModal={showModal} handleCloseModal={this.onCloseModal} handleLogin={this.onLogin}/>
            </React.Fragment>
        );
    }

}

export default withRouter(props => <Navigation {...props}/>);