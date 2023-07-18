<template>
  <div >
    <Header/>
   




   
    <div v-for="menuItem in menuItems" :key="menuItem.id" class="menu-item">


 <div class="foodList">
            <label class="nameOfFood">{{ menuItem.name }}</label>
            <div class="rateQuantityAmount">
                    <!-- <input class="rate" type="text" v-model="rateList" disabled>
                    -->
                <!-- <input class="rate" type="text" v-model="amount" > -->

 <p class="price">Price: RS  {{ menuItem.price }}</p>
            </div>


        </div>

     
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "./header.vue"

export default {
    components:{
Header
    },
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


.my-button {
  padding: 10px 20px;
  background-color: #17f5f5;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.my-button:hover {
  background-color: #ffffff;
}


.menu-item {
  margin-bottom: 10px;
  display: flex;

  justify-content: center;
}
.price{
padding-right: 50px;
}



.foodList{
    display: flex;
     background-color: #C0ECE1;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    height: 50px;
    width:70%;
    flex-wrap: nowrap;
    align-items: center;
    border-radius: 10px;
    border: 3px solid rgb(214, 216, 219);
}
.foodList .nameOfFood{
    height: 30px;
    padding-left: 20px;
    display: flex;
    justify-content: start;
    border-radius: 8px;
    background-color: antiquewhite;
    width:60%;
}
.foodList .rate {
    text-align: center;
    width: 20%;
    height: 30px;
    margin: 10px;
    background-color: antiquewhite;
    border-radius: 8px;
    }
</style>
