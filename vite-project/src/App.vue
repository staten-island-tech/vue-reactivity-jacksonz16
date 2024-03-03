<script setup>
  import { computed, ref } from 'vue'
  import merchCard from './components/merchCard.vue'
  import CartCard from './components/CartCard.vue'
  import { cart } from './stores/cart.js'

  const header = ref('header')
  const finalCost = computed(() => {
    return cart.reduce((total, merch) => 
      total + merch.merchTotal, 0
    );
  });
</script>

<template>
  <div :id="header">
    <div>
      <h1>The Merch stores</h1>
    </div>
  </div>
  <div id="parent">
    <div id="cart">
      <h2 class="subtitle">Currently in Cart</h2>
      <h3 id="total-cost">Total Cost: ${{finalCost}}</h3>
      <div id="cart-content">
        <CartCard/>
      </div>
    </div>
    <div id="catalog">
      <h2 class="subtitle">Catalog</h2>
      <div id="catalog-content">
        <merchCard/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #header {
    margin: 1vw 0px 2vw 0px;
    padding: 40vhvw;
    color: white;
    display: flex;
    justify-content: center;
    background:gray;
  }
  #header h2 {
  
    font-size: larger;
  }
  #parent {
    display: flex;
    justify-content: center;
  }
  .subtitle {
    font-size: xx-large;

  }
  #cart {
    width: 20%;
    height: 50%;
    color: white;
    text-align: center;
    font-size: large;
  }
  #catalog {
    width: 80%;    
    height: 100%;
    border-left: solid white thin;
    color: white;
    text-align: center;
  }
  #catalog-content {
    margin: 2vw 0px 2vw 0px;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }
  #cart-content {
    margin-top: 2vw;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }
  #total-cost {
    margin-top: 3vw;

  }

</style>
