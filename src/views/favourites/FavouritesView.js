import React, {Component} from 'react';
import FavouriteService from "../../services/FavouriteService";
import LoginService from "../../services/LoginService";
import ImagesService from "../../services/ImagesService";
import {Col, Row} from "react-bootstrap";
import ImagesView from "../../components/imagesComponents/ImagesView";
import ImagesContainer from "../../components/imagesComponents/ImagesContainer";
import ViewService from "../../services/ViewService";

const USER = "usr_" + LoginService.getCurrentUserEncoded();

class FavouritesView extends Component {

    state = {
        data: [],
        view: "list", // tile
        page: 0,
        limit: 20,
        isLoading: false,
        isComplete: false,
        hasNoRecords: false,
        isError: false,
    }

    componentDidMount() {
        this.getFavourites();
        if (ViewService.checkIfViewIsSetted()) {
            this.setState({
                view: ViewService.getView()
            })
        }
    }

    getFavourites = (page = this.state.page, limit = this.state.limit) => {

        this.setState({isLoading: true});

        FavouriteService.getFavourites(page, limit, USER)
            .then(async ({data}) => {

                const promises = Array.from(data, async item => {

                    const img = await this.getSpecyficImage(item.image.id);

                    return {
                        ...img,
                        fav_id: item.id,
                    }
                })

                const arrayOfItems = await Promise.all(promises);

                this.setState({data: arrayOfItems})
                this.setState({isLoading: false, isComplete: true, hasNoRecords: arrayOfItems.length === 0})
            })
            .catch((error) => {
                console.log(error)
                // this.setState({isLoading: false, isComplete: false, isError: true})

            })
    }

    async getSpecyficImage(id) {
        return ImagesService.getSpecificImageById(id).then(({data}) => {
            return data;
        })
    }

    onClickLoadMore = () => {
        this.setState(prevState => ({
                page: prevState.page + 1,
            }
        ), () => {
            this.getFavourites();
        });
    }

    onChangeView = (type) => {
        ViewService.setView(type);
        this.setState({
            view: type,
            limit: type === 'list' ? 10 : 1
        }, () => {
            this.getFavourites();
        });
    }

    onClickPrevious = () => {

        if (this.state.page > 0) {
            this.setState(prevState => ({
                    page: prevState.page - 1,
                }
            ), () => {
                this.getFavourites();
            });
        }

    }

    onClickNext = () => {
        this.setState(prevState => ({
                page: prevState.page + 1,
            }
        ), () => {
            this.getFavourites();
        });
    }

    render() {
        let {data, isLoading, isComplete, isError, hasNoRecords, view, page} = this.state;

        return (
            <div id={'ImagesContainer'}>
                <Row>
                    <Col lg={12}>
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

export default FavouritesView;