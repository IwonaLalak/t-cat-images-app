import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers['x-api-key'] = '252c74fb-11f4-4e2a-89f5-00610724456f';


export default {

    HOST_API: "https://api.thecatapi.com/v1/"
}