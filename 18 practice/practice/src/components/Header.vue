<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    methods: {
        ...mapActions({
            fetchData: 'loadData'
        }),
        // saveData(){
        //     const data = {
        //         stocks: this.$store.getters.stocks
        //     };
        //     this.$http.put('data.json',data);
        // },
        // loadData(){
        //     this.fetchData();
        // }
    }

};
</script>

<style>
</style>