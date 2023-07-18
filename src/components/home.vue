<template>
    <div>
        <Header/>
         <div class="background-image">
         
         </div>
        <H2 class="best">Try Our Bestsellers...</H2>
      <Courosal/>
       <H2 class="best">Explore More ....</H2>
        <Image/>


    <footer class="footer">
      <p>Please give feedback to us and let us know what you like.</p>
    </footer>

    </div>
</template>

<script>
import Header from "./header.vue"
import Image from "./image.vue"
import Courosal from "./courosal.vue"
    export default {
        name: 'home',
        components:{
            Header,
            Image,
            Courosal
          
        }
    }
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 20px;
  color: black;
     padding-bottom: 20px;
     margin-top: 20px;
  text-align: center;
}
.best{
    margin-top: 15px;
    text-align: center;
    color: white;
    font-weight: bolder;
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
</style>