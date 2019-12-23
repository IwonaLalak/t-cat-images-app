import React, {Component} from 'react';
import ImagesView from "./ImagesView";
import {Col, Row} from "react-bootstrap";
import ImagesFilter from "./ImagesFilter";
import ImagesList from "./list/ImagesList";

class ImagesContainer extends Component{

    state={
        view:"list", // or "tile"
    }

    onChangeView = (type) =>{
        this.setState({view:type})
    }

    render() {

        let {view} = this.state;
        let {data} = this.props;

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
                    {
                        view === 'list' && <ImagesList data={data}/>
                    }
                </div>
            </div>
        );
    }
}

export default ImagesContainer;