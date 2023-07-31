<template>
  <div >
    <Adminnavbar/>
<div class="top">
  <h1> Order History</h1>
<div v-for="ord in order" :key="order.id" class="cc">

 <div class="bda">
   <div class="box">
    <div class="name">{{ord.menu_name}} </div>
    <div class="price">{{ord.price}} RS </div>
  </div>
 </div>


</div>
</div>
  </div>
</template>

<script>
import Adminnavbar from './adminnavbar.vue'
import axios from "axios"
  export default {
    name:"ordEr",
    components:{
Adminnavbar,
    },
   data() {
    return {
      order: []
    };
  },
  created()
{
  const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
  axios.get('http://localhost:5000/getorder')
        .then(response => {
          if(response.status == 200)
          {
         //   console.log(response.data)
         
             this.order = response.data;
       
          }
          else
          {
            console.log('error');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }





    

  }
</script>
<style scoped>
.cc{
  margin-bottom: 5px;
}
.top{
  margin-top: 150px;
  margin-left: 250px;
  margin-bottom: 100px;
}
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 80px;
  background-color: #F1F1F1;
  border: 1px solid #ccc;
  padding: 4px;
}
.bda {
  display: flex;
  justify-content: center;
}
.orderList {
  margin-top: 7%;
  margin-left: 15%;
}
.name {
  font-weight: bold;
}
h1{
  font-size: 30px;
  text-align: center;
  padding: 20px;
  font-family:cursive;
  font-weight:900;
}
.price {
  font-weight: bold;
}
::v-deep  .orderhistory {
  background-color: #c08989; /* Change to your desired background color */
}
</style>