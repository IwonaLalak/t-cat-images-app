import axios from 'axios'
import __config from "./__config";

export default{

    getAllBreeds(page=0,limit=100){

        return axios({
            method: 'get',
            url: __config.HOST_API+`breeds?page=${page}&limit=${limit}`
        })
    }
}