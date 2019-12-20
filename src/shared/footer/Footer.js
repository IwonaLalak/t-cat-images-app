import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <div id={'footerShadow'}></div>
            <div id={'footerContainer'}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div id={'footerContent'}>
                                &copy; 2019 Cat images by <a href={'https://github.com/IwonaLalak/'} target={'_blank'}>Iwona Lalak</a> | API by <a
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