import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImagesList from "./list/ImagesList";
import withLoading from "../../shared/hoc/withLoading";
import withHandleError from "../../shared/hoc/withHandleError";
import withHandleNoRecords from "../../shared/hoc/withHandleNoRecords";
import {compose} from "recompose";

class ImagesContainer extends Component {

    onClickLoadMore = () => {
        this.props.handleClickLoadMore();
    }

    render() {

        let {data, view} = this.props;
        return (
            <div>
                {
                    view === 'list' && <ImagesList data={data} handleClickLoadMore={this.onClickLoadMore}/>
                }
            </div>
        );
    }
}

ImagesContainer.propTypes = {
    data: PropTypes.array,
    view: PropTypes.string,
    isLoading: PropTypes.bool,
    getError: PropTypes.bool,
    isComplete: PropTypes.bool,
    handleClickLoadMore: PropTypes.func,
}

export default compose(withLoading, withHandleNoRecords, withHandleError)(ImagesContainer);