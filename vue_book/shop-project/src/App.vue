<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  data(){
    return {
      products: [],
    }
  },
  components: {
    appHeader : Header,
  },
  created(){
    axios.get('./data/products.json')
      .then((response)=>{
        this.products = response.data.products;
        console.log(this.products);
      })
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>