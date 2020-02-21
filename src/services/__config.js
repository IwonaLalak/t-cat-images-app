import axios from 'axios';
import {API_KEY} from "../hidden";

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers['x-api-key'] = API_KEY();

export default {
    HOST_API: "https://api.thecatapi.com/v1/"
}