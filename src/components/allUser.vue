<template>
  <div class="top">
    <Adminnavbar/>


    <div class="new">

    <div v-for="i in user" v-bind:key="i.id" class="carddd" >
      <div class="user-info">
        <div class="user-info-item">
          <div class="label">Name:</div>
          <div class="value">{{ i.name }}</div>
        </div>
        <div class="user-info-item">
          <div class="label">Email:</div>
          <div class="value">{{ i.email }}</div>
        </div>
        <div class="user-info-item">
          <div class="label">Role:</div>
          <div class="value">{{ i.role }}</div>
        </div>
      </div>
    </div>
    </div>



  </div>
</template>

<script>
import Adminnavbar from './adminnavbar.vue';
import axios from "axios";
export default {
  name: "allUser",
  components:{
        Adminnavbar
          
        },
  data() {
    return {
      user: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        console.log(response.data);
        this.user = response.data;
      })
      .catch((err) => {
        console.error(err.message);
          this.$router.push({name:'home'})
      });
  },
};
</script>

<style scoped>
.top{
    margin-top: 150px;
}
.carddd{
  margin-left: 380px;
margin-bottom: 20px;
  
}
.new{
    display: flex;
  flex-wrap: wrap;
}
.user-info {
  width: 250px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.user-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.label {
  flex: 1;
  font-weight: bold;
  color: #555;
}

.value {
  flex: 2;
  color: #333;
}
::v-deep  .alluser {
  background-color: #5f9cc5; /* Change to your desired background color */
}
</style>
