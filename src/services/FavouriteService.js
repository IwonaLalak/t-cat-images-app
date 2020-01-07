import axios from 'axios'
import __config from "./__config";

export default{

    getFavourites(page=0,limit=20, sub_id){

        return axios({
            method: 'get',
            url: __config.HOST_API+`favourites?page=${page}&limit=${limit}&sub_id=${sub_id}`
        })
    },

    addToFavourites(data){

        return axios({
            method: 'post',
            url: __config.HOST_API+`favourites`,
            data: JSON.stringify(data),
        })
    },

    removeFromFavourites(id){

        return axios({
            method: 'delete',
            url: __config.HOST_API+`favourites/${id}`,
        })
    },


}