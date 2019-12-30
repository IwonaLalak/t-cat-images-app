import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImagesListRow from "./ImagesListRow";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSyncAlt} from "@fortawesome/free-solid-svg-icons";

class ImagesList extends Component {

    onClickLoadMore = () => {
        this.props.handleClickLoadMore()
    }

    render() {

        let {data} = this.props;

        return (
            <div id={'ImagesList'}>
                {
                    data.map(item => <ImagesListRow item={item}/>)
                }
                <div className={'text-center'}>
                    <Button type={'button'} onClick={this.onClickLoadMore}><FontAwesomeIcon icon={faSyncAlt}/> load more</Button>
                </div>
            </div>
        );
    }
};

ImagesListRow.propTypes = {
    data: PropTypes.array,
    handleClickLoadMore: PropTypes.func
};

export default ImagesList;