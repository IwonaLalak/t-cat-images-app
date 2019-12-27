import React, {Component} from 'react';
import ImagesContainer from "../../components/imagesComponents/ImagesContainer";
import ImagesService from "../../services/ImagesService";

class HomeView extends Component {

    state = {
        data: [],
        filters: [],

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

        ImagesService.prepareQueryAndSendRequest(page, limit, null)
            .then(({data}) => {
                this.setState({data})
                this.setState({isLoading: false, isComplete: true, hasNoRecords: data.length === 0})
            })
            .catch((error) => {
                console.log(error)
                this.setState({isLoading: false, isComplete: false, isError: true})

            })
    }

    render() {

        let {data, isLoading, isComplete, isError, hasNoRecords} = this.state;

        return (
            <ImagesContainer data={data} isLoading={isLoading} isComplete={isComplete} isError={isError} hasNoRecords={hasNoRecords}/>
        );
    }
}

export default HomeView;