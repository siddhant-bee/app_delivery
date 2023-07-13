<template>
  
  <!-- //test -->
  <Header/>
     <div>
    <headerPage/>
    <div id="page-wrap">
        <h2> Shopping Cart</h2>
        <hr>
       <div v-for="product in cartItems" class="product-container" v-bind:key="cartItems.id">
        <img class="product-image" :src="product.imageUrl" alt="">
        <div class="details-wrap">
            <h3>{{ product.name }}</h3>
            <p>RS{{ product.price }}</p>
          </div>
          <button class="remove-button">Remove Item</button>
       </div>
        <h3 id="total-price">Total: RS{{ totalprice }}</h3>
        <button id="checkout-button">Checkout</button>
    </div>
   </div>
</template>

<script>
import Header from "./header.vue"
export default {
  name:"cartPage",
components:{
  Header
},
  
  data() {
    return {
      cartItems: [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 15 },
        { id: 3, name: 'Item 3', price: 20 },
      ],
    };
  },
  methods: {
    checkout() {
      // Perform checkout logic here
      console.log('Checkout clicked!');
    },
  },
};
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }
  #total-price {
    padding: 16px;
    text-align: right;
  }
  #checkout-button {
    width: 100%;
  }
  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }
  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>