import React, {Component} from 'react';
import ImagesView from "./ImagesView";
import {Col, Row} from "react-bootstrap";
import ImagesFilter from "./ImagesFilter";

class ImagesContainer extends Component{

    state={
        view:"list", // or "tile"
    }

    onChangeView = (type) =>{
        this.setState({view:type})
    }

    render() {

        let {view} = this.state;

        return (
            <div id={'ImagesContainer'}>
                <Row>
                    <Col xs={12} lg={9}>
                        <ImagesFilter/>
                    </Col>
                    <Col xs={12} lg={3}>
                        <ImagesView handleChangeView={this.onChangeView} active={view}/>
                    </Col>
                </Row>
                <div>
                    {view}
                </div>
            </div>
        );
    }
}

export default ImagesContainer;