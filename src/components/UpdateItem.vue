<template>
  <div class="main">
    <div><Adminnavbar /></div>
    <div class="menu">
      <h1>Update Menu</h1>
      <form class="form-menu" @submit.prevent="addItem">
        <div class="gg ">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="itemName" required />
        </div>
        <div class="gg">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="itemPrice" required />
        </div>
        <div class="gg">
          <label for="image">Image:</label>
          <img
            :src="selectedImage"
            class="border border-secondary"
            width="180"
            height="200"
            alt="hey there"
          />
          <input class="selectFile"
            type="file"
            id="image"
            accept="image/*"
            @change="handleImageUpload"
       
          />
        </div>
        <button  type="submit" >Add Item</button>
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
  name: "updateMenu",
  data() {
    return {
        id:null,
      itemName: "",
      itemDescription: "",
      itemPrice: null,
      itemImage: null,
      image: [],
      selectedImage: "",
    };
  },
  created(){
    const id = this.$route.params.id
        const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    axios.get('http://localhost:5000/getmyitem/'+id).then((response) => {
console.log(response)
this.itemName=response.data[0].name
this.itemPrice=response.data[0].price
this.selectedImage=this.getImageUrl(response.data[0].image)
this.id = response.data[0].id       
    }
    )
    .catch(err=>{
      console.log(err)
         this.$router.push({name:'home'})
    })

  },
  methods: {
  getImageUrl(image){
        // console.log(image)
        if(image==null){
         return require('@/assets/woocommerce-placeholder-600x600.png')
        }else{
        const base64 = window.btoa(
        new Uint8Array(image.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
        return `data:${image.contentType};base64,${base64}`;
       }
},
    addItem() {
      // Logic to save the item to the menu
      const newItem = {
        id:this.id,
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
              const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
      axios
        .post("http://localhost:5000/update", formData)
        .then((response) => {
          console.log(response);
         
          alert("Item Added");
        })
        .catch((error) => {
          console.error(error);
        
          
        });
      // Reset form fields
     
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
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
/* Styling for the main container */
.main {
  background-color: #fdf4dfbe;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
/* Styling for the menu container */
.menu {
  margin-top: 10%;
  margin-left: 15%;
  border: 1px solid #ccc;
  border-radius: 20px;
   box-shadow: #686767 2px 2px 5px 5px;
  width: 800px;
  align-self: center;
  padding: 20px;
  background-color: #F9F9F9;
}
/* Styling for the h1 element inside the menu container */
.menu h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}
/* Styling for the form inside the menu container */
.form-menu {
  display: grid;
  max-width: 800px;
  gap: 10px;
}
/* Styling for the form input elements and labels */
.gg {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
}
.gg label {
  font-weight: bold;
  align-self: center;
}
.gg input[type="text"],
.gg input[type="number"] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
}
/* Styling for the image and file input */
.gg img {
  max-width: 180px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.gg input[type="file"] {
  display: block;
  margin-top: 5px;
}
/* Styling for the Add Item button */
button[type="submit"] {
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
button[type="submit"]:hover {
  background-color: #0056B3;
}
::v-deep  .menuupdate {
  background-color: #c08989; /* Change to your desired background color */
}
</style>