<template>
  <div>
    <div class="wrap">
      <div v-for="menuItem in menuItems" :key="menuItem.id" class="menu-item">
        <div class="card" style="width: 18rem">
          <img :src="menuItem.image" class="card-img-top sid" alt="..." />
          <div class="card-body x">
            <h5 class="card-title">{{ menuItem.name }}</h5>
            <p class="card-text">this is a really delicious food .</p>
            <h6>Price - {{ menuItem.price }} RS</h6>
            <center>
              <Button
                @click="addtoCart(menuItem)"
                class="btn btn-primary gif-button"
                >Buy now</Button
              >
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "iMage",

  data() {
    return {
      menuItems: [],
    };
  },
  setup() {
    const notify = () => {
      toast("ADDED TO CART !", {
        autoClose: 1000,
      }); // ToastOptions
    };
    return { notify };
  },
  created() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .get("http://localhost:5000/menu")
      .then((response) => {
        console.log(response.data);

        this.menuItems = response.data;
        for (let i = 0; i < response.data.length; i++) {
          const source = this.getImageUrl(response.data[i].image);
          this.menuItems[i].image = source;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
  methods: {
    getImageUrl(image) {
      // console.log(image)
      if (image == null) {
        return require("@/assets/woocommerce-placeholder-600x600.png");
      } else {
        const base64 = window.btoa(
          new Uint8Array(image.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        return `data:${image.contentType};base64,${base64}`;
      }
    },
    addtoCart(item) {
      console.log(item);
      const user = JSON.parse(localStorage.getItem("user-info"));
      console.log(user.id);

      const data = {
        user_id: user.id,
        menu_id: item.id,
        name: item.name,
        price: item.price,
      };

      axios
        .post("http://localhost:5000/addtocart", data)
        .then((response) => {
          console.log(response);

          toast("ADDED TO CART !", {
            autoClose: 1500,
          }); // ToastOptions
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.sid {
  transition: transform 0.5s;
  height: 250px;
}
.card {
  margin-top: 10px;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(5, 5, 5, 5); /* Add shadow on hover */
  /* border-radius: 50px; */
  
}

.sid:hover {
  /* box-shadow: 0 4px 8px rgba(5, 5, 5, 5); Add shadow on hover */
  /* border-radius: 50px; */
  transform: scale(1.07);
}

.button-container {
  text-align: center;
  padding: 40px;
}

.gif-button {
  position: relative;
  padding: 20px 20px;
  background-color: white;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  overflow: hidden; /* Ensure the GIF stays within the button boundaries */
}

.gif-button span {
  position: relative;
  z-index: 1;
}

.gif-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/icons8-cart-100.png);
  background-size: cover;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.3s ease; /* Add transition for a smooth effect */
}

.gif-button:hover::after {
  opacity: 1;
}

.wrap {
  display: flex;
  justify-content: center;
  justify-content: space-around;
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  flex-wrap: wrap;
}

.footer {
  background-color: #b9b5b5;
  padding: 20px;
  color: black;
  padding-top: 20px;
  text-align: center;
}
.card-body {
  margin-bottom: 0px;
}
</style>
