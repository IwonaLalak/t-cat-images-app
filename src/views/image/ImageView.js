import React, {Component} from 'react';
import ImagesService from "../../services/ImagesService";
import ImagesContainer from "../../components/imagesComponents/ImagesContainer";

class ImageView extends Component {

    state = {
        data: [],
        isLoading: false,
        isComplete: false,
        hasNoRecords: false,
        isError: false,
    }

    componentDidMount() {
        this.getImage();
    }


    getImage = () => {

        let id = this.props.match.params.id;

        if (id) {
            this.setState({isLoading: true})
            ImagesService.getSpecificImageById(id)
                .then(({data}) => {
                    if (data !== null) {
                        this.setState({data: [data]})
                    }
                    this.setState({isLoading: false, isComplete: true, hasNoRecords: data === null})
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({isLoading: false, isComplete: false, isError: true})

                })
        } else{
            this.setState({isComplete: false, isError: true})
        }

    }

    render() {

        let {data, isLoading, isError, hasNoRecords, isComplete} = this.state;

        return (
            <div id={'ImagesContainer'}>
                <ImagesContainer data={data}
                                 view={'list'}
                                 isLoading={isLoading}
                                 isComplete={isComplete}
                                 isSingleImage={true}
                                 isError={isError}
                                 hasNoRecords={hasNoRecords}
                />
            </div>
        );
    }
}

export default ImageView;