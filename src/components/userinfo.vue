<template>
  <div class="background-gif">
    <div class="payment-form">
      <h1>Checkout</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" v-model="formData.cardNumber" required>
        </div>
        <div class="form-group">
          <label for="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" v-model="formData.expiryDate" required>
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" v-model="formData.cvv" required>
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'userInfo',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      },
    };
  },
  methods: {
    submitForm() {
        const user = JSON.parse(localStorage.getItem('user-info'))
  const id = user.id
  console.log(id)
      axios.post('http://localhost:5000/checkout/'+id,this.formData)
      .then(response=>{
        console.log(response)
        console.log("checkout successfully")
        this.$router.push({name:'thankyou'})
      })
    },
  },
};
</script>

<style scoped>
.background-gif {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/card.gif"); /* Path to your GIF file */
  background-repeat: no-repeat;
  background-size: cover;
}

.payment-form {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
}

.payment-form h1 {
  text-align: center;

}

.form-group {
  margin-bottom: 5px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
