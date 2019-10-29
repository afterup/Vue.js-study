import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-31266.firebaseio.com';
axios.defaults.headers.common['Authorization']='autho';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
    console.log('Request Interceptor',config); // eject에 의해 인터셉터를 즉시 호출하기에 콘솔은 실행되지않음
    return config
})
const resInterceptor = axios.interceptors.response.use(config => {
    console.log('Response Interceptor',config);
    return config
})

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
