import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import __application from "../../services/__application";

const Footer = () => {

    const {APP_NAME, APP_AUTHOR, APP_AUTHOR_GIT} = __application;

    return (
        <footer>
            <div id={'footerShadow'}></div>
            <div id={'footerContainer'}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div id={'footerContent'}>
                                {APP_NAME} by <a href={APP_AUTHOR_GIT} target={'_blank'}>{APP_AUTHOR}</a> | API by <a
                                href={'https://thecatapi.com/'} target={'_blank'}>TheCatApi.com</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;