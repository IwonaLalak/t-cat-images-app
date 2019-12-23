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
            },
            {
                "breeds": [],
                "height": 612,
                "id": "6md",
                "url": "https://cdn2.thecatapi.com/images/6md.jpg",
                "width": 612
            },
            {
                "breeds": [],
                "height": 667,
                "id": "MTc4Mjk2Ng",
                "url": "https://cdn2.thecatapi.com/images/MTc4Mjk2Ng.jpg",
                "width": 500
            }
        ]

        this.setState({data:sample})
    }

    render() {

        let {data} = this.state;

        return (
            <ImagesContainer data={data}/>
        );
    }
}

export default HomeView;