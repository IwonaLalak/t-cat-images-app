import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImagesView from "./ImagesView";
import {Col, Row} from "react-bootstrap";
import ImagesFilter from "./ImagesFilter";
import ImagesList from "./list/ImagesList";
import withLoading from "../../shared/hoc/withLoading";
import withHandleError from "../../shared/hoc/withHandleError";
import withHandleNoRecords from "../../shared/hoc/withHandleNoRecords";
import {compose} from "recompose";

class ImagesContainer extends Component {

    state = {
        view: "list", // or "tile"
        isExpanded: false,
    }

    onChangeView = (type) => {
        this.setState({view: type})
    }

    onClickExpand = () => {
        this.setState((prevState => {
            return {isExpanded: !prevState.isExpanded}
        }))
    }

    onChangeFilters = (filters) => {
        this.props.handleOnChangeFilters(filters);
    }

    onClickLoadMore = () => {
        this.props.handleClickLoadMore()
    }

    render() {

        let {view, isExpanded} = this.state;
        let {data} = this.props;

        return (
            <div id={'ImagesContainer'}>
                <Row>
                    <Col xs={isExpanded ? 12 : 9} lg={9}>
                        <ImagesFilter handleClickExpand={this.onClickExpand} handleOnChangeFilters={this.onChangeFilters}/>
                    </Col>
                    <Col xs={isExpanded ? 12 : 3} lg={3}>
                        <ImagesView handleChangeView={this.onChangeView} active={view}/>
                    </Col>
                </Row>
                <div>
                    {
                        view === 'list' && <ImagesList data={data} handleClickLoadMore={this.onClickLoadMore}/>
                    }
                </div>
            </div>
        );
    }
}

ImagesContainer.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    getError: PropTypes.bool,
    isComplete: PropTypes.bool,
    handleOnChangeFilters: PropTypes.func,
    handleClickLoadMore: PropTypes.func,
}

export default compose(withLoading, withHandleNoRecords, withHandleError)(ImagesContainer);