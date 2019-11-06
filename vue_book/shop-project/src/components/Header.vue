<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/order">Order</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>