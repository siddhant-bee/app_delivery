<template>
    <div>
        <Header/>
     
        <Image/>
    </div>
</template>

<script>
import Header from "./header.vue"
import Image from "./image.vue"
    export default {
        name: 'home',
        components:{
            Header,
            Image
          
        }
    }
</script>

<style scoped>

</style>