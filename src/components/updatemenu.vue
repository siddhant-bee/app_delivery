<template>
  <div>
    <Adminnavbar />
    <div class="menu">
      <h1>Update Menu</h1>
     
        <form class="ff" @submit.prevent="addItem">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="itemName" required />
          </div>
          <div>
            <label for="price">Price:</label>
            <input type="number" id="price" v-model="itemPrice" required />
          </div>
          <div>
            <label for="image">Image:</label>
            <img
              :src="selectedImage"
              class="border border-secondary"
              width="180"
              height="200"
              alt="Uploaded Image"
            />
            <input
              type="file"
              id="image"
              accept="image/*"
              @change="handleImageUpload"
              required
            />
          </div>
          <button type="submit">Add Item</button>
        </form>
      
    </div>
  </div>
</template>

<script>
import Adminnavbar from "./adminnavbar.vue";
import axios from "axios";
export default {
  components: {
    Adminnavbar,
  },
  name: "updatemenu",
  data() {
    return {
      itemName: "",
      itemDescription: "",
      itemPrice: null,
      itemImage: null,
      image: [],
      selectedImage: "",
    };
  },
  methods: {
    addItem() {
      // Logic to save the item to the menu
      const newItem = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
      };
      console.log("New Item:", newItem);
      const formData = new FormData();
      for (let i = 0; i < this.image.length; i++) {
        formData.append("images[]", this.image[i]);
      }
      formData.append("item", JSON.stringify(newItem));
      axios
        .post("http://localhost:5000/imageUpload", formData)
        .then((response) => {
          console.log(response);
          this.image=[]
          this.selectedImage=''
        })
        .catch((error) => {
          console.error(error);
        });

      // Reset form fields
      this.itemName = "";
      this.itemDescription = "";
      this.itemPrice = null;
      this.itemImage = null;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.image.push(file);
      this.selectedImage = URL.createObjectURL(file);
      console.log(this.selectedImage);
    },
  },
};
</script>
<style scoped>
.menu {
  display: flex;
  justify-content: center;
  
}
.menu-details{
   display: flex;
  justify-content: center;
  margin-top: 100px;
}
.ff{
  padding: 10px;
}
</style>
