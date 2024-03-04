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
      subtract(merch) {
        if (merch.quantity > 1) {
          merch.quantity--;
          calculatemerchTotal()
        } else {
          const index = cart.indexOf(merch);
          if (index !== -1) {
            cart.splice(index, 1);
          };
        };
      },
    },
  };
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
  .quantity-add {
    padding: 0px 10px 0px 10px;
    background-color: green;
    color: black;
    border-style: hidden;
    cursor: pointer;
  }
  .quantity-subtract {
    padding: 0px 10px 0px 10px;
    background-color: red;
    color: black;
    border-style: hidden;
    cursor: pointer;
  }
</style>