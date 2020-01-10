import React, {Component} from 'react';
import ImagesService from "../../services/ImagesService";
import ImagesContainer from "../../components/imagesComponents/ImagesContainer";
import __application from "../../services/__application";

class ImageView extends Component {

    state = {
        data: [],
        isLoading: false,
        isComplete: false,
        hasNoRecords: false,
        isError: false,
    }

    componentDidMount() {

        let id = this.props.match.params.id;

        document.title = id + ' - ' + __application.APP_NAME;

        this.getImage(id);
    }


    getImage = (id) => {

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
        } else {
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