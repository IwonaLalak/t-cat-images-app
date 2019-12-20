import React from 'react';
import Navigation from "../../components/headerComponents/navigation/Navigation";
import Logo from "../../components/headerComponents/logo/Logo";
import {Col, Container, Row} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Logo/>
                        <Navigation/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;