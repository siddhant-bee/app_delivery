<template>
  <div >
    <Header/>
   

 <div class="background-image">
         
         </div>


   
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

};
</script>

<style scoped>


.my-button {
  padding: 10px 20px;
  background-color: #c07a11;
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

.background-image {

   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
    background-image: url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80" );
  background-repeat: no-repeat;
  background-size: cover;
}


.foodList{
    display: flex;
     background-color: #ffec98;
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
