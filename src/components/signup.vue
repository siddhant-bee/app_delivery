<template>
  <div class="cover">
    <img class="logo" src="../assets/download.jpeg" alt="" />
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
    <router-link to="/login">log in</router-link>

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
.logo {
  width: 200px;
}
.cover{
  text-align: center;
}

.register input{
    width: 300px;
    height: 40PX;
    PADDING-LEFT: 20PX;
    DISPLAY: BLOCK;
    MARGIN-BOTTOM: 30PX;
    MARGIN-LEFT: auto;
    MARGIN-RIGHT: auto;
    BORDER: 1PX SOLID skyblue ;

}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;
}
.rolee
{
  width: 324px;
  margin-bottom: 15px;
  height: 30px;
}
</style>