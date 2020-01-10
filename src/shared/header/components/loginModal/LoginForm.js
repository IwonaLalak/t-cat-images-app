import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {InputGroup, Form, FormControl, FormGroup, ButtonToolbar, Button, Row, Col} from "react-bootstrap";

class LoginForm extends Component {

    onChangeLogin = ({target: {value}}) => {
        this.props.handleChangeLogin(value)
    }

    onClickLogin = () => {
        this.props.handleClickLogin()
    }

    onClickClose = () => {
        this.props.handleClickClose()
    }

    onSubmitLogin = (e) => {
        e.preventDefault();
        this.onClickLogin();
    }

    render() {

        let {login, err} = this.props;

        return (
            <Form onSubmit={this.onSubmitLogin}>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="icon-addon"><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="icon-addon"
                            value={login}
                            onChange={this.onChangeLogin}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col sm={6}>
                            {err && <div id={'loginerr'}>Please type at least 3 characters and no more than 50!</div>}
                        </Col>
                        <Col sm={6}>
                            <ButtonToolbar>
                                <Button variant="secondary" size={'sm'} onClick={this.onClickClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" size={'sm'} onClick={this.onClickLogin}>
                                    Login
                                </Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>

                </FormGroup>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    login: PropTypes.string,
    err: PropTypes.bool,
    handleChangeLogin: PropTypes.func,
    handleClickClose: PropTypes.func,
    handleClickLogin: PropTypes.func,
};

export default LoginForm;