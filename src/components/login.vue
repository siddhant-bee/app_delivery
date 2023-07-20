import router from '@/routes';

<template>
  <div class="allcover">
    <img class="logo" src="../assets/download.jpeg" alt="" />

    <div>
      <img src="@/assets/slidebank+login.gif" alt="My GIF" />
    </div>

    <h1>login</h1>
    <div class="login">
      <input type="text " v-model="email" placeholder=" Enter Email" />
      <input type="password" v-model="password" placeholder=" Enter password" />
      <button v-on:click="login">log in</button>
      <p>
        <router-link to="/signup">sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "logIn",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log("checking");
      let result = await axios.post(`http://localhost:5000/login`, {
        email: this.email,
        password: this.password,
      });
      // console.warn(result);
      console.log(result.data);
      if (result.status == 200) {
        localStorage.setItem("id", result.data.id)
        localStorage.setItem("role", result.data.role)
        localStorage.setItem("token", result.data.token)
        // localStorage.setItem("user-info", JSON.stringify(result.data));
        // localStorage.setItem("user-info", result.data);
        // const user_info = localStorage.getItem("user-info")
        console.log(localStorage.getItem("token"));
        // console.log(result.data);
        if (result.data.role == "USER") {
          this.$router.push({ name: "home" });
        } else {
          this.$router.push({ name: "adminhome" });
        }
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.logo {
  width: 200px;
}
.allcover {
  text-align: center;
}

.login input:hover {
  box-shadow: #686767 2px 2px 5px 5px;
}

.login input {
  width: 300px;
  height: 40px;
  border-radius: 15px;
  padding-left: 20px;
  display: BLOCK;

  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px SOLID #ff7e01;
}

.login button:hover {
  box-shadow: #686767 5px 5px 5px 5px;
}

.login button {
  width: 320px;
  height: 40px;
  border-radius: 15px;
  border: 1px #ff7e01;
  background-color: #ff7e01;
  cursor: pointer;
}
</style>
