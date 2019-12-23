import React, {Component} from 'react';
import ImagesContainer from "../../components/imagesComponents/ImagesContainer";

class HomeView extends Component {

    state = {
        data: [],
        filters: [],
    }

    componentDidMount(){
        this.getImages();
    }

    getImages = (filters = this.state.filters) => {

        let sample = [
            {
                "breeds": [],
                "categories": [
                    {
                        "id": 10,
                        "name": "kittens"
                    }
                ],
                "height": 300,
                "id": "4ih",
                "url": "https://cdn2.thecatapi.com/images/4ih.gif",
                "width": 400
            }
        ]

        this.setState({data:sample})
    }

    render() {
        return (
            <ImagesContainer/>
        );
    }
}

export default HomeView;