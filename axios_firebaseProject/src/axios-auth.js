import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://identitytoolkit.googleapis.com/v1'
})
// instance.defaults.headers.post['Accepts'] = 'application/json'

export default instance;