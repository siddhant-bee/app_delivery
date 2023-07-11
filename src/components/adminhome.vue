<template>

<div>
      <Adminnavbar/>
     <div class="wrap">
  
       <div v-for="index in 6" :key="index" >
<div class="card" style="width: 18rem; "  >
  <img src="../assets/image3-4.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> Food 1</h5>
    <p class="card-text">this is a really delicious food .</p>
    <h6>price - 500RS/-</h6>
    
    <a href="#" class="btn btn-primary">Buy now</a>
  </div>
</div>
    </div>
 </div>
</div>
</template>

<script>
import Adminnavbar from './adminnavbar.vue'

    export default {
  
        name:"adminhome",
        components:{
            Adminnavbar,

        }
    }
</script>

<style scoped>
.card{
    margin-top: 10px;
    
}
.wrap{
    
    display: flex;
        justify-content: center;
        justify-content: space-around;
        padding-left: 200px;padding-right: 200px;
        display: flex;
  flex-wrap: wrap;
}
</style>