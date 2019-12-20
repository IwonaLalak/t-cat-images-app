import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Wrapper = ({children}) => {
    return (
        <div id={'wrapper'}>
            <Container>
                <Row>
                    <Col lg={12}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Wrapper;