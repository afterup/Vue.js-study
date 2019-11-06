<template>
  <div class="about container">
      <div class="cart">
        CART: {{ cartItemCount }}
      </div>
      <div class="row product">
        <div class="col-md-2 col-md-offset-1">
          <figure>
            <img :src="product.image">
          </figure>
        </div>
        <div class="col-md-6 col-md-offset-2 description">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <p class="price">
            {{product.price | formatPrice}}
          </p>
          <button class="btn btn-primary" @click="addToCart" v-if="canAddCart">Add Cart</button>
          <button class="btn btn-primary" v-else disabled>Add Cart</button>
        </div>
      </div>
      
  </div>
</template>

<script>

export default {
    data() {
      return {
        sitename: "Vue.js 애완용품샵",
        product: {
          id: 1001,
          title: "Vue.js",
          description: "description example world vue js",
          price: 2000,
          image: require("../assets/logo.png"),
          availableAdd: 5,
        },
        cart: [],
      }
  },
  filters: {
    formatPrice: function(price) {
      if (!parseInt(price)) { return ""; }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index+3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },
  methods: {
    addToCart() {
      return this.cart.push(this.product.id);
    },

  },
  computed: {
    cartItemCount(){
      return this.cart.length || '0'
    },
    canAddCart(){
      let flag= this.cartItemCount < this.product.availableAdd;
      return flag;
    }
  }
}
</script>

<style scoped>

</style>