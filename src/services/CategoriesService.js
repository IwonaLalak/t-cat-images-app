import axios from 'axios'
import __config from "./__config";

export default{

    getAllCategories(page=0,limit=100){

        return axios({
            method: 'get',
            url: __config.HOST_API+`categories?page=${page}&limit=${limit}`
        })
    }
}