<template>
  <div>
    <Adminnavbar />
    <h1>Menu</h1>

    <div v-for="menuItem in menuItems" :key="menuItem.id" class="menu-item">
      <div class="foodList">
        <label class="nameOfFood">{{ menuItem.name }}</label>
        <div class="rateQuantityAmount">
          <!-- <input class="rate" type="text" v-model="rateList" disabled>
                    -->
          <!-- <input class="rate" type="text" v-model="amount" > -->

          <p class="price">Price: RS {{ menuItem.price }}</p>
        </div>
        <button class="my-button" @click="delete_menu(menuItem.id)">
          Update item
        </button>
      </div>

      <h3></h3>
    </div>
  </div>
</template>

<script>
import Adminnavbar from "./adminnavbar.vue";

import axios from "axios";

export default {
  name: "adminMenu",
  components: {
    Adminnavbar,
  },
  data() {
    return {
      menuItems: [],
    };
  },
  methods: {
    delete_menu(id) {
      console.log(id);
      const data = {
        id: id,
      };
      
      axios
        .post("http://localhost:5000/delete_menu", data)
        .then((resposnse) => {
          console.log(resposnse);
          // this.cartItems = this.cartItems.filter((val,idx)=>val.id!=id)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    axios
      .get("http://localhost:5000/menu")
      .then((response) => {
        this.menuItems = response.data;
      })
      .catch((error) => {
        console.error("Error:", error);
          this.$router.push({name:'home'})
      });
  },
};
</script>

<style  scoped>


.menu-item {
  margin-bottom: 10px;
  display: flex;

  justify-content: center;
}
.price {
  padding-right: 50px;
}

.foodList {
  display: flex;
  background-color: #c0ece1;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  height: 50px;
  width: 70%;
  flex-wrap: nowrap;
  align-items: center;
  border-radius: 10px;
  border: 3px solid rgb(214, 216, 219);
}
.foodList .nameOfFood {
  height: 30px;
  padding-left: 20px;
  display: flex;
  justify-content: start;
  border-radius: 8px;
  background-color: antiquewhite;
  width: 60%;
}
.foodList .rate {
  text-align: center;
  width: 20%;
  height: 30px;
  margin: 10px;
  background-color: antiquewhite;
  border-radius: 8px;
}::v-deep  .menucheck {
  background-color: #d87373; /* Change to your desired background color */
}
</style>
