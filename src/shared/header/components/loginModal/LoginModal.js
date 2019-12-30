import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from "react-bootstrap";

class LoginModal extends Component {

    handleClose = () => {
        this.props.handleCloseModal()
    }

    handleLogin = () => {
        this.props.handleLogin()
    }

    render() {

        let {showModal} = this.props;

        return (
                <Modal show={showModal} onHide={this.handleClose} id={'LoginModal'}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleLogin}>
                            Save Changes
                        </Button>
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