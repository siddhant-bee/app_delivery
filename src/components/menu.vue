<template>
  <div>
    <h1>Menu</h1>
    <div v-for="menuItem in menuItems" :key="menuItem.id" class="menu-item">
      <h3>{{ menuItem.name }}</h3>
      <p class="price">Price: RS  {{ menuItem.price }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      menuItems: []
    };
  },
  created() {

    axios.get('http://localhost:5000/menu')
        .then(response => {
          this.menuItems = response.data;
        })
        .catch(error => {
          console.error('Error:', error);
        });
  },

};
</script>

<style>
.menu-item {
  margin-bottom: 10px;
  display: flex;

  justify-content: center;
}
.price{
padding-left: 50px;
}
</style>
