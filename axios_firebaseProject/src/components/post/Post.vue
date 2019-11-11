<template>
  <div class="post">
    <form @submit.prevent="onSubmit">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title">
      <br>
      <label for="content">Content</label>
      <textarea 
          id="content"
          rows="5" cols="33" 
          v-model="content"/>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: '',
      content:'',
    }
  },
  methods: {
    onSubmit(){
      const formData = {
        title: this.title,
        content: this.content,
      };
      this.$store.dispatch('addPost',formData);
    }
  }

}
</script>

<style>

</style>