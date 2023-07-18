<template>
<div>
   <Adminnavbar/>
 <div class="wrap">
 
 <div v-for="menuItem in menuItems" :key="menuItem.id" class="menu-item">
<div class="card" style="width: 18rem; "  >

  <img :src="menuItem.image" class="card-img-top sex" alt="...">
  <div class="card-body">
    <h5 class="card-title"> {{menuItem.name}}</h5>
    <p class="card-text">this is a really delicious food .</p>
    <h6>Price - {{menuItem.price}} RS </h6>
    
    
  </div>
</div>
    </div>
 </div>
     <!-- <div v-for="menuItem in menuItems" :key="menuItem.id" class="menu-item">
<div class="card" style="width: 18rem; "  >

  <img src="../assets/image3-4.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> {{menuItem.name}}</h5>
    <p class="card-text">this is a really delicious food .</p>
    <h6>Price - {{menuItem.price}} RS </h6>
    
    <a href="#" class="btn btn-primary">Buy now</a>
  </div>
</div>
    </div>
 </div> -->

    <footer class="footer">
      <p>Please give feedback to us and let us know what you like.</p>
    </footer>
</div>
</template>

<script>
import axios from 'axios';
import Adminnavbar from "./adminnavbar.vue"

export default {
   name:"image",
    components:{
Adminnavbar
    },
  data() {
    return {
      menuItems: []
    };
  },
  created() {

    axios.get('http://localhost:5000/menu')
        .then(response => {
          console.log(response.data)
       
           this.menuItems = response.data;
          for(let i = 0;i<response.data.length;i++){
             const source =  this.getImageUrl(response.data[i].image)
               this.menuItems[i].image = source

          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
  },
methods:{
  getImageUrl(image){
        // console.log(image)
        if(image==null){
         return require('@/assets/woocommerce-placeholder-600x600.png')
        }else{
        const base64 = window.btoa(
        new Uint8Array(image.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
        return `data:${image.contentType};base64,${base64}`;
       }
},

}
};




    
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

.footer {
  background-color: #b9b5b5;
  padding: 20px;
  color: black;
  padding-top: 20px;
  text-align: center;
}
.sex{
    height: 200px;
  width: 286px;
}
</style>





















