import React, {Component} from 'react';
import FavouriteService from "../../services/FavouriteService";
import LoginService from "../../services/LoginService";
import ImagesService from "../../services/ImagesService";

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
    }

    getFavourites = (page = this.state.page, limit = this.state.limit) => {

        this.setState({isLoading: true});


        FavouriteService.getFavourites(page, limit, USER)
            .then(async({data}) => {

                const promises = Array.from(data, async item => {

                    const img = await this.getSpecyficImage(item.image.id);

                    return {
                        ...img,
                        fav_id:item.id,
                        created_at:item.created_at,
                    }
                })


                const arrayOfItems = await Promise.all(promises);

                this.setState({arrayOfItems})
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

    render() {
        return (
            <div>
                favourites view
            </div>
        );
    }
}

export default FavouritesView;