import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    posts: [],
  },
  mutations: {
    authUser(state, userData){
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state,user){
      state.user = user;
    },
    clearAuth(state){
      state.idToken = null;
      state.userId = null;
    },
    storePosts(state,posts){
      state.posts = posts;
    }
  },
  actions: {
    setLogoutTimer({commit}, expirationTime){
      setTimeout(()=>{
        commit('clearAuth');
      }, expirationTime * 1000);
    },
    signup({commit , dispatch},authData){
      axios.post('/accounts:signUp?key=AIzaSyA2xEFAwoSXC-w5TXYyXEUIKF_DZvZTmEM',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res=> {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('userId',res.data.localId);
          localStorage.setItem('expirationDate',expirationDate);
          dispatch('storeUser', authData);
          dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(err => console.log(err));
    },
    login({commit , dispatch},authData){
      axios.post('/accounts:signInWithPassword?key=AIzaSyA2xEFAwoSXC-w5TXYyXEUIKF_DZvZTmEM',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res=>{
          console.log(res);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('userId',res.data.localId);
          localStorage.setItem('expirationDate',expirationDate);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(err => console.log(err));
    },
    logout({commit}){
      commit('clearAuth');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expirationDate');
      router.replace('/');
    },
    storeUser({commit,state}, userData){
      if(!state.idToken){
        return 
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => {
          console.log(res);
          this.user = userData;
        })
        .catch(err => console.log(err));
    },
    fetchUser({commit,state}){
      if(!state.idToken){
        return 
      }
      globalAxios.get('/users.json'+ '?auth=' + state.idToken)
      .then(res => {
        console.log(res)
        const data = res.data;
        const users = [];
        for(let key in data){
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users);
        commit('storeUser', users[0])
        })
      .catch(err => console.log(err));
    },
    tryAutoLogin({commit}){
      const token = localStorage.getItem('token')
      if(!token){
        return;
      }
      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();
      if(now >= expirationDate){
        return;
      }
      const userId = localStorage.getItem('userId');
      commit('authUser',{
        token
      })
    },
    addPost({commit ,state}, postData){
      if(!state.idToken){
        return 
      }
      globalAxios.post('/posts.json' + '?auth='+ state.idToken, postData)
        .then(res=> {
          console.log(res)
          alert('등록완료')
          router.replace('/dashboard'); 
        })
        .catch(error => console.log(error));
    },
    getPost({commit,state}){
      globalAxios.get('/posts.json'+ '?auth='+ state.idToken)
        .then(res=>{
          console.log(res);
          const data = res.data;
          const posts = [];
          for(let key in data){
            const post = data[key];
            post.id = key;
            posts.push(post);
          }
          console.log(posts);
          commit('storePosts',posts);
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    user(state){
      return state.user;
    },
    isAuthenticated (state) {
      return state.idToken !== null;
    },
    posts(state){
      return state.posts;
    }

  }
})