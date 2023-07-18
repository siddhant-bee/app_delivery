<template>
    <div>
        <Header/>
        <H2 class="best">Try Our Bestseller</H2>
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
  text-align: center;
}
.best{
    text-align: center;
}
</style>