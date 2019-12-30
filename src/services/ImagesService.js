import axios from 'axios'
import __config from "./__config";

export default class ImagesService {

    static getSpecificImageById(id) {
        return axios({
            method: 'get',
            url: __config.HOST_API + `images/${id}`
        })
    }

    static getImagesWithSearchQueryParams(page = 0, limit = 10, order = 'RANDOM', mime = 'jpg,png,gif', category = '', breed = '') {

        return axios({
            method: 'get',
            url: __config.HOST_API + `images/search?page=${page}&limit=${limit}&order=${order}&mime_types=${mime}&category_ids=${category}&breed_id=${breed}`
        })
    }

    static prepareQueryAndSendRequest = (page, limit, filters) => {

        let order = filters.order ? filters.order : 'RANDOM';
        let mime = filters.type ? filters.type : 'jpg,png,gif';
        let cat = filters.category ? filters.category : '';
        let breed = filters.breed ? filters.breed : '';

        return this.getImagesWithSearchQueryParams(page, limit, order, mime, cat, breed)
    }

}