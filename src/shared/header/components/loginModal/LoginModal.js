import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from "react-bootstrap";
import LoginForm from "./LoginForm";

class LoginModal extends Component {

    state = {
        login: '',
        err: false,
    }

    handleClose = () => {
        this.props.handleCloseModal()
    }

    handleLogin = () => {

        this.setState({err: false})

        let {login} = this.state;

        if (login.length >= 3 || login.length <= 50) {
            this.props.handleLogin(login)
        } else {
            this.setState({err: true})
        }
    }

    onChangeLogin = (login) => {
        this.setState({login})
    }

    render() {

        let {showModal} = this.props;
        let {login, err} = this.state;

        return (
            <Modal show={showModal} onHide={this.handleClose} id={'LoginModal'}>
                <Modal.Header>
                    <h6>Sign in by typing your nick</h6>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm login={login}
                               err={err}
                               handleChangeLogin={this.onChangeLogin}
                               handleClickClose={this.handleClose}
                               handleClickLogin={this.handleLogin}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        );
    }
}

LoginModal.propTypes = {
    showModal: PropTypes.bool,
    handleCloseModal: PropTypes.func,
    handleLogin: PropTypes.func,
};

export default LoginModal;