import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import router from "./routs";
createApp(App).use(router).mount('#app')