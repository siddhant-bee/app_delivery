<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <!-- Your logo image or text here -->
          <router-link to="/adminhome"> <img src="../assets/download.jpeg" alt="Logo" width="80" height="80" /></router-link>
      
    </div>
    <div class="navbar-brand">
      <!-- Your brand name or text here -->
          <!-- <router-link to="/adminhome"> </router-link> -->
     <span class="brand-name">Food Alix</span> 
    </div>
    <div class="navbar-menu">
            <router-link to="/updatemenu"> <button @click="updateMenu">Upload Menu</button></router-link>
      <router-link to="/adminmenu"><button @click="uploadMenu">check Menu</button></router-link>
       
      
       <router-link to="/order"> <button @click="updateMenu">Order History</button></router-link>
              <router-link to="/order"> <button @click="updateMenu">All Users </button></router-link>

    </div>
    <div class="navbar-search">
      <input type="text" v-model="searchQuery" placeholder="Search..." />
      <button @click="search">Search</button>

         <button @click="logout">Log-out</button>
    </div>
  </nav>
</template>

<script>

export default {
    name:'adminnavbar',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    updateMenu() {
      // Logic for updating the menu
    },
    uploadMenu() {
      // Logic for uploading the menu
    },
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'login'})
            console.warn("logout");
        }
    
  },
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
   background-color: #b9b5b5;
}

.navbar-logo img {
  width: 40px;
  height: 40px;
}

.brand-name {
  font-weight: bold;
}

.navbar-menu button {
  margin-right: 10px;
}

.navbar-search input[type="text"] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.navbar-search button {
  padding: 5px 10px;
}
</style>
