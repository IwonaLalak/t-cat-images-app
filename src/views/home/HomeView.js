import React, {Component} from 'react';
import ImagesContainer from "../../components/imagesComponents/ImagesContainer";
import ImagesService from "../../services/ImagesService";

class HomeView extends Component {

    state = {
        data: [],
        filters: [],

        page: 0,
        limit: 10,

        isLoading:false,
        isComplete:false,
        isError:false,
    }

    componentDidMount() {
        this.getImages();
    }

    getImages = (page = this.state.page, limit = this.state.limit, filters = this.state.filters) => {

        this.setState({isLoading:true})

        ImagesService.prepareQueryAndSendRequest(page, limit, null)
            .then(({data}) => {
                this.setState({data})
                this.setState({isLoading:false, isComplete:true, isError:(!data.length>0),})
            })
            .catch((error) => {
                console.log(error)
                this.setState({isLoading:false, isComplete:true, isError:true,})

            })
    }

    render() {

        let {data} = this.state;

        return (
            // todo zrobić hooki z ładowaniem i takie tam
            <ImagesContainer data={data}/>
        );
    }
}

export default HomeView;