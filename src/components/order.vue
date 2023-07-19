<template>
  <div>
    <Adminnavbar/>
<h1>Here i ll display the order</h1>
<div v-for="ord in order" :key="order.id">

 <div class="bda">
   <div class="box">
    <div class="name">{{ord.menu_name}} </div>
    <div class="price">{{ord.price}} </div>
  </div>
 </div>


</div>
  </div>
</template>

<script>
import Adminnavbar from './adminnavbar.vue'
import axios from "axios"
  export default {
    name:"order",
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
 axios.get('http://localhost:5000/getorder')
        .then(response => {
          console.log(response.data)
       
           this.order = response.data;
        
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }





    

  }
</script>
<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 80px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 4px;
}
.bda{
  display: flex;
  justify-content: center;
}
.name {
  font-weight: bold;
}

.price {
  font-weight: bold;
}
</style>