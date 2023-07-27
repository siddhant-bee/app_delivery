<template>
  <div>
    <Header />
    <br />
    <H1>ORDER HISTORY</H1>
    <hr />
    <div class="container">
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Food Name</div>
          <div class="col col-2">Price</div>
        </li>
      <div v-if="order.length == 0">
       
         <li class="table-row">
            <div class="col col-1" data-label="Customer Name">
             No Order Found
            </div>
            <div class="col col-2" data-label="Amount">
             No Order Found
            </div>
          </li>
      
      </div>
      
         <div v-else >
               <div v-for="menuItem in order" :key="order.id" class="menu-item">
          <li class="table-row">
            <div class="col col-1" data-label="Customer Name">
              {{ menuItem.menu_name }}
            </div>
            <div class="col col-2" data-label="Amount">
              {{ menuItem.price }}
            </div>
          </li>
        </div>
         </div>
      
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      order: [],
    };
  },
  name: "orderHistory",
  created() {
    const user = JSON.parse(localStorage.getItem("user-info"));
    const id = user.id;
    console.log(id);
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .get("http://localhost:5000/orderhistory/" + id)
      .then((response) => {
        console.log(response.data);
        if (response.data.length == 0) {
          this.order = [];
        } else {
          this.order = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
body {
  font-family: "lato", sans-serif;
}
.container {
  max-width: 1000px;
  margin-top: 100px;
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
.col-1 {
  width: 300px;
}
h2 small {
  font-size: 0.5em;
}
.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.responsive-table .table-header {
  background-color: #95a5a6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-header {
  background-color: #95a5a6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
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
  .table-row {
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
    color: #6c7a89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}
.mybutton {
  background-color: royalblue;
  border-radius: 10px;
  border: none;
  height: 30px;
  width: 150px;
  color: rgb(255, 255, 255);
}
.mybutton:hover {
  height: 40px;
  box-shadow: #6c7a89 2px 2px 2px 2px;
  background-color: rgb(63, 68, 92);
}
::v-deep .menucheck {
  background-color: #d87373; /* Change to your desired background color */
}
</style>
