import React from 'react';
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import {withRouter} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";


const Header = (props) => {

    let {location} = props;

    return (
        <header>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Logo/>
                        <Navigation location={location}/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default withRouter(props => <Header {...props}/>);