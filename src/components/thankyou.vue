<template>
  <div class="thank-you-container">
    <h1>Thank You for Ordering Food!</h1>
    <p>Your order has been placed successfully.</p>
    <div class="buttons-container">
      <router-link to="/" class="home-button">Home</router-link>
      <button @click="logout" class="logout-button">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "thankYou",
  methods: {
    logout() {
    localStorage.clear();
      this.$router.push({ name: "login" });
      console.warn("logout");
      console.log('Logout button clicked!');
    },
  },
};
</script>

<style>
.thank-you-container {
  text-align: center;
  padding: 40px;
}

.home-button,
.logout-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  font-size: 16px;
}

.home-button:hover,
.logout-button:hover {
  background-color: #0056b3;
}

.buttons-container {
  display: flex;
  justify-content: center;
}
</style>
