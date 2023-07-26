<template>
    <div>
<h1>My Oders will be displayed here</h1>
<div v-for="ord in order" :key="order.id" class="menu-item">
    {{ord.menu_name}} {{ord.price}}
</div>
    </div>
</template>

<script>
     import  axios  from "axios";
    export default {
data(){
return{
   order:[]
}
},
       name:"orderHistory",
        created(){
         const user = JSON.parse(localStorage.getItem('user-info'))
         const id = user.id
         console.log(id)
           const token = localStorage.getItem("token")
            axios.defaults.headers.common['Authorization'] = token;
             axios.get('http://localhost:5000/orderhistory/'+id).then((response)=>{
                 console.log(response.data)
                 this.order=response.data 
             }).catch((error)=>{
                 console.log(error) 
             })
     }
    }
</script>

<style  scoped>

</style>