import axios from 'axios'
import __config from "./__config";

export default class ImagesService{

    static getImagesWithSearchQueryParams(page=0,limit=10,order='RANDOM',mime='jpg,png,gif',category='',breed=''){

        return axios({
            method: 'get',
            url: __config.HOST_API+`images/search?page=${page}&limit=${limit}&order=${order}&mime_types=${mime}&category_ids=${category}&breed_id=${breed}`
        })
    }

    static prepareQueryAndSendRequest = (page,limit,filters) =>{

        //return new Promise((resolve,reject)=>{
            return this.getImagesWithSearchQueryParams(page,limit)
       // })
    }

}