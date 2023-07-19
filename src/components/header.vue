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
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <!-- {{retrievedData}} -->
            <button
              id="search"
              class="btn btn-outline-success me-2"
              type="submit"
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
export default {
  name: "header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
      console.warn("logout");
    },
  },
  //        data() {
  //   return {
  //     retrievedData: null
  //   };
  // },
  // mounted() {
  //   this.retrieveDataFromLocalStorage();
  // },
  // methods: {
  //   retrieveDataFromLocalStorage() {
  //     // Retrieve a value from localStorage
  //     const storedData = localStorage.getItem('name');
  //     this.retrievedData=storedData

  //   }
  // }
};
</script>

<style scoped>
.head {
 
}
.menu-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>
