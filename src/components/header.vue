<template>
  <div class="head">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <router-link to="/">
              <img
                src="../assets/download.jpeg"
                alt="Logo"
                width="80"
                height="80"
              />
            </router-link>

            <a class="navbar-brand" href="#"> Food Alix </a>
          </div>
        </nav>


        <router-link to="/menu" class="menu-link">Check Menu</router-link>
<div class="base">
        <router-link to="/orderhistory" class="menu-link">My profile</router-link>

</div>
 

<!-- {{search}} -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> -->
            <!-- <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> -->
            <li class="nav-item dropdown">
              <!-- <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Veg
          </a> -->
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Veg </a></li>
                <li><a class="dropdown-item" href="#"> Non veg</a></li>
                <!-- <li><hr class="dropdown-divider"></li> -->
                <li><a class="dropdown-item" href="#">Both</a></li>
              </ul>
            </li>
            <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
          </ul>

          <form class="d-flex" role="search">
            <!-- <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
                 v-model="search"
                 @change="handleChange"
            /> -->
            <!-- {{retrievedData}} -->
            <button
              id="search"
              class="btn btn-outline-success me-2"
             
              @click="searchh"
           
            >
              Search
            </button>
            <router-link to="/cartPage" class="menu-link"
              ><button class="btn btn-outline-success me-2" type="submit">
                Cart
              </button>
            </router-link>

            <button
              class="btn btn-outline-success"
              type="submit"
              @click="logout"
            >
              logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "heAder",
  methods: {
    handleChange(){
      axios.get('http://localhost:5000/search/'+this.search)
      .then(response=>{
        this.searchitem=response.data
        console.log(this.searchitem)
      })
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
      console.warn("logout");
    },
    searchh(){
      this.$router.push({ name: "searchpage" });
    }
  },
         data() {
    return {
      search: "",
      searchitem:[]
    };
   },
  // mounted() {
  //   this.retrieveDataFromLocalStorage();
  // },

  
};
</script>

<style scoped>
.head{
  position: sticky;
  top:0px;
  z-index: 1; 
}
.menu-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.base{
    padding: 5px;
    margin-left: 25px;

}
</style>
