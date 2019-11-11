<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>email: {{ email }}</p>
    <h3>Post</h3>
    <div v-for="post in posts" :key="post.id"> {{ post }}</div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    computed: {
      email() {
        return !this.$store.getters.user ? false : this.$store.getters.user.email ;
      },
      posts(){
        console.log('posts computed');
        return !this.$store.getters.posts ? false : this.$store.getters.posts;
      }
    },
    created() {
      this.$store.dispatch('fetchUser');
      this.$store.dispatch('getPost');
    },
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>