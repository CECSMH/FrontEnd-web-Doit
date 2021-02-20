import axios from 'axios';

const Api = axios.create({baseURL: 'http://doit-web-app-com.umbler.net'});

export default Api