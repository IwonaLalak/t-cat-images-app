import React, {Component} from 'react';
import ImagesContainer from "../../components/imagesComponents/ImagesContainer";
import ImagesService from "../../services/ImagesService";
import {Col, Row} from "react-bootstrap";
import ImagesFilter from "../../components/imagesComponents/ImagesFilter";
import ImagesView from "../../components/imagesComponents/ImagesView";
import ImagesTileContainer from "../../components/imagesComponents/tile/ImagesTileContainer";

class HomeView extends Component {

    state = {
        data: [],
        filters: [],
        isExpanded: false,
        view: "list", // or "tile"

        page: 0,
        limit: 10,

        isLoading: false,
        isComplete: false,
        hasNoRecords: false,
        isError: false,

    }


    componentDidMount() {
        this.getImages();
    }

    getImages = (page = this.state.page, limit = this.state.limit, filters = this.state.filters) => {

        this.setState({isLoading: true})

        console.log(page, limit, filters)

        ImagesService.prepareQueryAndSendRequest(page, limit, filters)
            .then(({data}) => {
                this.setState({data})
                this.setState({isLoading: false, isComplete: true, hasNoRecords: data.length === 0})
            })
            .catch((error) => {
                console.log(error)
                this.setState({isLoading: false, isComplete: false, isError: true})

            })
    }

    onChangeFilters = (filters) => {
        this.setState({
                filters: filters,
                page: 0,
                limit: this.state.view === "list" ? 10 : 1,
            }, () => {
                this.getImages();
            }
        );
    }

    onClickLoadMore = () => {
        this.setState(prevState => ({
                page: prevState.page + 1,
            }
        ), () => {
            this.getImages();
        });
    }

    onClickExpand = () => {
        this.setState((prevState => {
            return {isExpanded: !prevState.isExpanded}
        }))
    }

    onChangeView = (type) => {
        this.setState({
            view: type,
            limit: type === 'list' ? 10 : 1
        }, () => {
            this.getImages();
        });
    }

    onClickPrevious = () => {
        this.setState(prevState => ({
                page: prevState.page - 1,
            }
        ), () => {
            this.getImages();
        });
    }

    onClickNext = () => {
        this.setState(prevState => ({
                page: prevState.page + 1,
            }
        ), () => {
            this.getImages();
        });
    }

    render() {

        let {data, isLoading, isComplete, isError, hasNoRecords, isExpanded, view, page} = this.state;

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
                <ImagesContainer data={data}
                                 currentPage={page}
                                 view={view}
                                 isLoading={isLoading}
                                 isComplete={isComplete}
                                 isError={isError}
                                 hasNoRecords={hasNoRecords}
                                 handleClickLoadMore={this.onClickLoadMore}
                                 handleClickPrevious={this.onClickPrevious}
                                 handleClickNext={this.onClickNext}
                />
            </div>
        );
    }
}

export default HomeView;