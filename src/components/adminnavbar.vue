<template>
  <div>
    <div class="top-navbar bg-light">
      <div class="divnav">
        <div class="logo">
          <!-- Your logo image or text here -->
          <router-link to="/adminhome">
            <img class="logoimg"
              src="../assets/download.jpeg"
              alt="Logo"
              width="80"
              height="80"
          /></router-link>
        </div>
        <div class="brandname">
          <!-- Your brand name or text here -->
          <!-- <router-link to="/adminhome"> </router-link> -->
          <span class="brand-name">Food Alix</span>
        </div>
        <div class="search">
          <input type="text" v-model="searchQuery" placeholder="Search..." />
          <button @click="search">Search</button>
        </div>
        <div class="logout">
          <button @click="logout">Log-out</button>
        </div>
      </div>
    </div>
    <div class="side-navbar ">
      <div class="menu">
        <router-link to="/updatemenu">
          <button @click="updateMenu">Upload Menu</button></router-link
        >
        <router-link to="/adminmenu"
          ><button @click="uploadMenu">check Menu</button></router-link
        >
        <router-link to="/order">
          <button @click="updateMenu">Order History</button></router-link
        >
        <router-link to="/allUser">
          <button >All Users</button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "adminNavbar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    updateMenu() {
      // Logic for updating the menu
    },
    uploadMenu() {
      // Logic for uploading the menu
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
      console.warn("logout");
    },
  },
};
</script>
<style scoped>
.top-navbar {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 200;
  height: 15%;
}
.divnav {
  display: flex;
  /* background-color: #f7dede; */
background: rgb(238,174,202);
background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,0) 100%);
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
}
.divnav div {
  padding: 10px;
  align-self: auto;
}
.brand-name {
  font-size: 30px;
  padding: 45px;
}
button{
  border-radius: 10px;
  border: none;
  height: 40px;
  width: 150px;
  color:rgb(13, 3, 3);
}
input{
  border-radius: 10px;
  border: none;
  height: 40px;
  margin-right: 5px;
}
.side-navbar {
  position: fixed;
  left: 0;
  top: 15%;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,0.6587009803921569) 100%);
  width: 15%;
  z-index: 200;
  height: 85%;
}
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
 /* background-image: linear-gradient(to bottom right,#00A1FF,#00FF8F); */
  flex-direction: column;
}
.logoimg{
  border-radius: 10px;
}
</style>






