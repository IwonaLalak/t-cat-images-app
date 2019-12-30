import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImagesListRow from "./ImagesListRow";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSyncAlt, faGrinBeam} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class ImagesList extends Component {

    onClickLoadMore = () => {
        this.props.handleClickLoadMore()
    }

    render() {

        let {data,isSingleImage} = this.props;

        return (
            <div id={'ImagesList'}>
                {
                    data.map(item => <ImagesListRow item={item}/>)
                }
                <div className={'text-center'}>
                {
                    isSingleImage?
                        <Link to={'/'}>
                            <Button type={'button'} ><FontAwesomeIcon icon={faGrinBeam}/> i want more</Button>
                        </Link>
                        :
                        <Button type={'button'} onClick={this.onClickLoadMore}><FontAwesomeIcon icon={faSyncAlt}/> load more</Button>
                }
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