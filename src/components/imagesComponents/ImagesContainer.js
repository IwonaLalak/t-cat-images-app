import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImagesList from "./list/ImagesList";
import withLoading from "../../shared/hoc/withLoading";
import withHandleError from "../../shared/hoc/withHandleError";
import withHandleNoRecords from "../../shared/hoc/withHandleNoRecords";
import {compose} from "recompose";
import ImagesTileContainer from "./tile/ImagesTileContainer";
import ImagesTileNavigation from "./tile/ImagesTileNavigation";

class ImagesContainer extends Component {

    onClickPrevious = () => {
        this.props.handleClickPrevious();
    }

    onClickNext = () => {
        this.props.handleClickNext();
    }

    onClickLoadMore = () => {
        this.props.handleClickLoadMore();
    }

    render() {

        let {data, view, currentPage} = this.props;
        return (
            <div>
                {
                    view === 'list' && <ImagesList data={data} handleClickLoadMore={this.onClickLoadMore}/>
                }
                {
                    view === 'tile' &&
                    <ImagesTileContainer
                        data={data}
                        currentPage={currentPage}
                        handleClickPrevious={this.onClickPrevious}
                        handleClickNext={this.onClickNext}
                    />
                }
            </div>
        );
    }
}

ImagesContainer.propTypes = {
    data: PropTypes.array,
    currentPage: PropTypes.number,
    view: PropTypes.string,
    isLoading: PropTypes.bool,
    getError: PropTypes.bool,
    isComplete: PropTypes.bool,
    handleClickLoadMore: PropTypes.func,
    handleClickPrevious: PropTypes.func,
    handleClickNext: PropTypes.func,
}

export default compose(withLoading, withHandleNoRecords, withHandleError)(ImagesContainer);