import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/'
})
// instance.defaults.headers.post["Content-Type"] = "multipart/form-data";
// instance.defaults.headers.post['Accepts'] = 'application/json'

export default instance;