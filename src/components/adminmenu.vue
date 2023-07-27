<template>
  <div>
    <Adminnavbar />
    <h1>Menu</h1>
    <div class="container">
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Food Name</div>
      <div class="col col-2">Price</div>
      <div class="col col-3">Operation</div>
    </li>
    <div v-for="menuItem in menuItems" :key="menuItem.id" class="menu-item">
      <li class="table-row">
      <div class="col col-1" data-label="Customer Name">{{ menuItem.name }}</div>
      <div class="col col-2" data-label="Amount">{{ menuItem.price }}</div>
       <button class="mybutton col col-3" @click="delete_menu(menuItem.id)">
          Update item
        </button>
    </li>
    </div>
  </ul>
</div>
  </div>
</template>
<script>
import Adminnavbar from "./adminnavbar.vue";
import axios from "axios";
export default {
  name: "adminMenu",
  components: {
    Adminnavbar,
  },
  data() {
    return {
      menuItems: [],
    };
  },
  methods: {
    delete_menu(id) {
      console.log(id);
    this.$router.push({name:"updateitem",params:{id:id}});
    },
    },
  created() {
    axios
      .get("http://localhost:5000/menu")
      .then((response) => {
        this.menuItems = response.data;
      })
      .catch((error) => {
        console.error("Error:", error);
          this.$router.push({name:'home'})
      });
  },
};
</script>
<style  scoped>
body {
  font-family: 'lato', sans-serif;
}
.container {
  max-width: 1000px;
  margin-top: 100px ;
  margin-left: 250px;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}
h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
.col-1{
  width: 300px;
}
h2  small {
    font-size: 0.5em;
  }
  .responsive-table  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
.responsive-table .table-header {
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .responsive-table .table-header {
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .responsive-table .table-row {
    background-color: #FFFFFF;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
  /* .responsive-table.col-1 {
    flex-basis: 40%;
  }
  .responsive-table.col-2 {
    flex-basis: 20%;
  }
  .responsive-table.col-3 {
    flex-basis: 40%;
  } */
  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row{
    }
    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
  display: flex;
  padding: 10px 0;
}
.col:before {
  color: #6C7A89;
  padding-right: 10px;
  content: attr(data-label);
  flex-basis: 50%;
  text-align: right;
}
  }
 .mybutton{
  background-color: royalblue;
  border-radius: 10px;
  border: none;
  height: 30px;
  width: 150px;
  color: rgb(255, 255, 255);
 }
 .mybutton:hover{
  height: 40px;
  box-shadow: #6C7A89 2px 2px 2px 2px;
  background-color: rgb(63, 68, 92);
 }
::v-deep  .menucheck {
  background-color: #D87373; /* Change to your desired background color */
}
</style>