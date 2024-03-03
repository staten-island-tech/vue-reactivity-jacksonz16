<template>
  <div class="cart-card" v-for="merch in cart">
    <h3 class="merch-name">{{ merch.name }}</h3>
    <p class="merch-price">${{ merch.merchTotal }}</p>
    <div class="quantity">
      <button class="quantity-add" @click="add(merch)">+</button>
      <h3 class="quantity-count">{{ merch.quantity }}</h3>
      <button class="quantity-subtract" @click="subtract(merch)">-</button>
    </div>
  </div>
</template>

<script>
  import { cart } from '../stores/cart.js'
  import { calculatemerchTotal } from '../stores/cart.js'

  export default {
    data() {
      return {
        cart: cart,
      };
    },
    methods: {
      add(merch) {
        merch.quantity++;
        calculatemerchTotal()
      },
    }
  }
</script>

<style scoped>
  .cart-card {
    margin: 1vw;
    padding-bottom: 3vmin;
    width: 100%;
    background-color: #222222;
  }
  .merch-name {
    margin: 5% 0px 2.5% 0px;
    font-size: 4vmin;
  }
  .merch-price {
    font-family: "Montserrat", sans-serif;
    font-size: 2vmin;
  }
  .quantity {
    margin-top: 5%;
    display: flex;
    justify-content: center;
  }
  .quantity-count {
    margin: 0% 2% 0% 2%;
    font-family: "Roboto Mono", monospace;
  }
</style>