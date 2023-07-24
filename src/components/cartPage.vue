<template>
  
  <!-- //test -->
  <Header/>
     <div>
    <headerPage/>
    <div id="page-wrap">
        <h2> Shopping Cart</h2>
        <hr>
       <div v-for="product in cartItems" class="product-container" v-bind:key="product.id">
        <!-- <img class="product-image" :src="product.imageUrl" alt=""> -->
        <div class="details-wrap">
            <h3>{{ product.name }}</h3>
            <p>RS {{ product.price }}</p>
          </div>
          <button class="remove-button" @click="removeitem(product.id)">Remove Item</button>
       </div>
        <h3 id="total-price">Total: RS {{ amount }}</h3>
        <button id="checkout-button" @click="checkout" >Checkout</button>
    </div>
   </div>
</template>

<script>
import Header from "./header.vue"
import axios from "axios"
export default {
  name:"cartPage",
       created(){
                      const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    axios.get('http://localhost:5000/checkuser').then((response) => {
console.log(response)
    }
    )
    .catch(err=>{
      console.log(err)
         this.$router.push({name:'signup'})
    })
        },
components:{
  Header
},
mounted(){
  const user = JSON.parse(localStorage.getItem('user-info'))
  const id = user.id
  console.log(id)
  axios.get('http://localhost:5000/cartInfo/'+id)
        .then(response => {
          console.log(response.data)
       
           this.cartItems = response.data;
              if(this.cartItems.length==0){
          this.amount =0
        }else{
            for(let i = 0;i<this.cartItems.length;i++){
              this.amount = this.amount+this.cartItems[i].price;
            }
        }
   
        })
        .catch(error => {
          console.error('Error:', error);
        });
},
  
  data() {
    return {
      cartItems: [

      ],
      amount:0
    };
  },
  methods: {
    removeitem(id){
      const data={
        id:id
      }
      console.log(id)
      axios.post("http://localhost:5000/delete",data)
      .then(resposnse=>{
        console.log(resposnse)
              this.cartItems = this.cartItems.filter((val,idx)=>val.id!=id)
              this.amount=0
      })
      .catch(err=>{
        console.log(err)
      })


    },
    checkout() {
      
      console.log('Checkout clicked!');
       this.$router.push({name:'userinfo'})
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