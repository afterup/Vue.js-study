import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://vuejs-http-31266.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'some..';

export default instance