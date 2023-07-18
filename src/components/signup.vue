<template>
  <div class="cover">
    <img class="logo" src="../assets/download.jpeg" alt="" />
  <div>
      <!-- <div class="background-gif"></div> -->
    <!-- <img src="@/assets/ghipy.gif" class="height" alt="My GIF"> -->
  </div>

  <h1>Sign up</h1>
  <div class="register">
    <p>Please Select Role</p>
    <select class="rolee" v-model="role" name="role" placeholder="Role">

<option value="USER">USER</option>
<option value="ADMIN">ADMIN</option>

</select>

    <input type="text " v-model="name"  placeholder=" Enter Name"/>
   
 
    <input type="text " v-model="email" placeholder=" Enter Email"/>
    
    <input type="password" v-model="password" placeholder=" Enter password"/>
    <button v-on:click="Signup">Sign Up as {{ role }}</button>
    <br>
    <router-link class="log"  to="/login">log in</router-link>

  </div>
  </div>
</template>
<script>

import axios  from 'axios'
export default
 {
  
  name: "signup",
  data()
  {
    return{
        name:'',
        email:'',
        password:'',
        role:''
    }
  },
  methods:
  {
    async Signup()
    {
        console.warn("Signup",this.email,this.name,this.password);
        let result = await axios.post('http://localhost:5000/users',
        {
          email:this.email,
          name:this.name,
          password:this.password,
          role:this.role
        });
        if(
          result.data==="Email already in use")
          alert("email already in use ")
        //  console.warn(result);
         else if(result.status==200)
        {
        this.$router.push({name:'login'})
        }
      }

   
  },
  mounted()
  {
    let user=localStorage.getItem('user-info')
    if(user)
    {
      this.$router.push({name:'home'}) 
    }
  }
};
</script>




<style scoped >
.height{
  height: 220px;
  width: 220px;
}
.logo {
  width: 200px;
}
.cover{
  text-align: center;
}

.register input:hover {
 box-shadow: #686767 2px 2px 5px 5px;
 background-color: rgb(202, 197, 197);
}

.register input{
  border-radius: 15px;
    width: 300px;
    background-color: transparent;
    height: 40PX;
    PADDING-LEFT: 20PX;
    DISPLAY: BLOCK;
    MARGIN-BOTTOM: 15PX;
    MARGIN-LEFT: auto;
    MARGIN-RIGHT: auto;
    BORDER: 1PX SOLID #ff7e01;

}

.register button:hover {
 box-shadow: #686767 2px 2px 5px 5px;
  background-color: rgb(202, 197, 197);
 
}
.register button{
    width: 320px;
    background-color: transparent;
    height: 40px;
    border: 1px solid#ff7e01;
   
    border-radius: 15px;
    cursor: pointer;
}
.rolee
{
  width: 324px;
  margin-bottom: 15px;
  height: 30px;
}
.cover {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
  background-image: url("@/assets/1.gif"); /* Path to your GIF file */
  background-repeat: no-repeat;
  background-size: cover;
   /* background-position: center; */
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
}
</style>