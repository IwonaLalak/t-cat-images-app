import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImagesTile from "./ImagesTile";
import ImagesTileNavigation from "./ImagesTileNavigation";

class ImagesTileContainer extends Component {

    onClickPrevious = () => {
        this.props.handleClickPrevious();
    }

    onClickNext = () => {
        this.props.handleClickNext();
    }

    render() {

        let {data,currentPage} = this.props;

        return (
            <div id={"ImagesTileContainer"}>
                <ImagesTileNavigation
                    currentPage={currentPage}
                    handleClickPrevious={this.onClickPrevious}
                    handleClickNext={this.onClickNext}
                >
                    <ImagesTile item={data[0]}/>
                </ImagesTileNavigation>
            </div>
        );
    }
}

ImagesTileContainer.propTypes = {
    data: PropTypes.array,
    currentPage: PropTypes.number,
    handleClickPrevious: PropTypes.func,
    handleClickNext: PropTypes.func,
};

export default ImagesTileContainer;