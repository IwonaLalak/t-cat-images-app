import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faLongArrowAltLeft, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import keyboardCodes from "../../../utilities/keyboardCodes";
import {withRouter} from "react-router";

class ImagesTileNavigation extends Component {

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeydown, false)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown, false)
    }

    handleKeydown = (key) => {
        if (key.keyCode === keyboardCodes.key_LEFT) {
            this.onClickPrevious()
        }
        else if (key.keyCode === keyboardCodes.key_RIGHT) {
            this.onClickNext()
        }
    }

    onClickPrevious = () => {
        this.props.handleClickPrevious();
    }

    onClickNext = () => {
        this.props.handleClickNext();
    }


    render() {

        let {children, currentPage} = this.props;
        let isFavourites = this.props.history.location.pathname === '/favourites';

        return (
            <Row>
                <Col lg={1} className={'dont-display-on-smaller-screens'}>
                    <button type={'button'} className={'nav-container prev'} onClick={this.onClickPrevious} disabled={currentPage === 0}>
                        <FontAwesomeIcon icon={faAngleLeft}/><span>prev</span>
                    </button>
                </Col>
                <Col lg={10}>
                    {children}
                </Col>
                <Col lg={1} className={'dont-display-on-smaller-screens'}>
                    <button type={'button'} className={'nav-container next'} onClick={this.onClickNext}>
                        <span>next</span><FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                </Col>
                <Col lg={12} className={'dont-display-on-smaller-screens'}>
                    <div id={'tip'}>
                        <span>you can use your keyboard: </span>
                        <span className={'tiplabel'}><FontAwesomeIcon icon={faLongArrowAltLeft}/></span><span>prev,</span>
                        <span className={'tiplabel'}><FontAwesomeIcon icon={faLongArrowAltRight}/></span><span>next,</span>
                        <span className={'tiplabel'}>F</span><span>{isFavourites? 'to remove from favs,':'to add to favs,'}</span>
                        <span className={'tiplabel'}>S</span><span>to share</span>
                    </div>
                </Col>
                <Col md={12} className={'display-on-smaller-screens'}>
                    <button type={'button'} className={'nav-container prev'} onClick={this.onClickPrevious} disabled={currentPage === 0}>
                        <FontAwesomeIcon icon={faAngleLeft}/><span>prev</span>
                    </button>
                    <button type={'button'} className={'nav-container next'} onClick={this.onClickNext}>
                        <span>next</span><FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                </Col>
            </Row>
        );
    }
}

ImagesTileNavigation.propTypes = {
    currentPage: PropTypes.number,
    handleClickPrevious: PropTypes.func,
    handleClickNext: PropTypes.func,
};

export default withRouter(props=> <ImagesTileNavigation {...props} />);