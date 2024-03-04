<template>
  <div class="merch-card" v-for="merch in Items" :key="merch.name">
      <h2 class="merch-name">{{ merch.name }}</h2>
    <img :src="merch.img" :alt="merch.name" class="merch-img">

    <p class="merch-price">${{ merch.unitCost }}</p>
    <button @click="addToCart(merch)" class="add-button"> Add to Cart</button>
  </div>
</template>

<script>
  import { Items } from '../stores/catalog.js';
  import { cart } from '../stores/cart.js'

  export default {
    data() {
      return {
        Items: Items,
      };
    },
    methods: {
      addToCart(merch) {
        let sameitem = false;
        for(let i = 0; i < cart.length; i++) {
          if (cart[i].name === merch.name) {
            sameitem = true;
            cart[i].quantity++;
            cart[i].merchTotal = cart[i].unitCost * cart[i].quantity;
          };
        };
        if (!sameitem) {
          cart.push({
            name: merch.name,
            unitCost: merch.unitCost,
            quantity: 1,
            merchTotal: merch.unitCost,
          });
        };
        console.log(cart);
      },
    },
  };
</script>

<style scoped>
  .merch-card {
    margin: 2vw;
    background-color: #222222;
    flex: 0 0 50%;
    max-width: 40vh;
    text-align: center;
  }
    .merch-name {
    margin: 2.5%;
  }
  .merch-img {
    margin-top: 10%;
  width: 300px;
  height: 300px;
}
  
 .merch-img:hover {
    transform: scale(1.25);
  }
  
  .merch-price {
    margin-top: 2.5%;
    color: red;
    font-size: large;
    font-family: "Montserrat", sans-serif;
  }
  .add-button {
    margin: 10%;
    padding: 10px;
    border-style: hidden;
    font-family: "Montserrat", sans-serif;
    font-size: 100%;
    transition: transform .5s;
    cursor: pointer;
  }
  .add-button:hover {
    transform: scale(1.25);
    background-color: green;
  }
</style>