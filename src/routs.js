import{createRouter,createWebHistory} from 'vue-router'
import home from "./components/home.vue"
import signup from "./components/signup.vue"
import login from "./components/login.vue"
import adminnavbar from "./components/adminnavbar.vue"
import adminhome from "./components/adminhome.vue"
import updatemenu from "./components/updatemenu.vue"
import menu from "./components/menu.vue"
import adminmenu from "./components/adminmenu.vue"

import order from "./components/order.vue"
import cartPage from "./components/cartPage.vue"
import courosal from "./components/courosal.vue"
import userinfo from "./components/userinfo.vue"
import allUser from "./components/allUser.vue"
import thankyou from "./components/thankyou.vue"
import test from "./components/test.vue"
import UpdateItem from "./components/UpdateItem.vue"

import orderhistory from "./components/orderhistory.vue"
updatemenu
const routes=[
   {
      name:"test",
      component:test,
      path:"/test"
     },
     {
      name:"orderhistory",
      component:orderhistory,
      path:"/orderhistory"
     },
     {
      name:"thankyou",
      component:thankyou,
      path:"/thankyou"
     },
     {
      name:"allUser",
      component:allUser,
      path:"/allUser"
     },
     {
      name:"userinfo",
      component:userinfo,
      path:"/userinfo"
     },
     {
      name:"courosal",
      component:courosal,
      path:"/courosal"
     },{
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
                     {
                        name:"updateitem",
                        component:UpdateItem,
                        path:"/updateitem/:id"
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