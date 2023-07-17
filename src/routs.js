import{createRouter,createWebHistory} from 'vue-router'
import home from "./components/home.vue"
import signup from "./components/signup.vue"
import login from "./components/login.vue"
import adminnavbar from "./components/adminnavbar.vue"
import adminhome from "./components/adminhome.vue"
import updatemenu from "./components/updatemenu.vue"
import menu from "./components/menu.vue"
import adminmenu from "./components/adminmenu.vue"
cartPage
import order from "./components/order.vue"
import cartPage from "./components/cartPage.vue"


updatemenu
const routes=[
   {
    name:"cartPage",
    component:cartPage,
    path:"/cartPage"
   },
   {
      name:"order",
      component:order,
      path:"/order"
     },
   {
      name:"adminmenu",
      component:adminmenu,
      path:"/adminmenu"
     },
   {
      name:"menu",
      component:menu,
      path:"/menu"
     },
   {
      name:"home",
      component:home,
      path:"/"
     },
   {
    name:"login",
    component:login,
    path:"/login"
       },
       {
        name:"signup",
        component:signup,
        path:"/signup"
           },
       {
        name:"adminnavbar",
        component:adminnavbar,
        path:"/adminnavbar"
           },
           {
            name:"adminhome",
            component:adminhome,
            path:"/adminhome"
               },
               {
                  name:"updatemenu",
                  component:updatemenu,
                  path:"/updatemenu"
                     },

    // {
    //     name:"header",
    //     component : header,
    //     path:'/header'
    // },




]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;