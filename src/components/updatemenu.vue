<template>
  <div>
    <Adminnavbar/>
    <h1>Update Menu</h1>
    <form @submit.prevent="addItem">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="itemName" required />
      </div>
      <!-- <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="itemDescription" required></textarea>
      </div> -->
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="itemPrice" required />
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="file" id="image" accept="image/*" @change="handleImageUpload" required />
      </div>
      <button type="submit">Add Item</button>
    </form>
  </div>
</template>

<script>
import Adminnavbar from './adminnavbar.vue'
export default {
    components:{
            Adminnavbar,

        },
    name:"updatemenu",
  data() {
    return {
      itemName: '',
      itemDescription: '',
      itemPrice: null,
      itemImage: null,
    };
  },
  methods: {
    addItem() {
      // Logic to save the item to the menu
      const newItem = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        image: this.itemImage,
      };
      console.log('New Item:', newItem);

      // Reset form fields
      this.itemName = '';
      this.itemDescription = '';
      this.itemPrice = null;
      this.itemImage = null;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      // Logic to handle image upload and retrieve the image URL
      console.log('Uploaded image:', file);
      // You can use libraries like FileReader or send the file to your server for processing
    },
  },
};
</script>
