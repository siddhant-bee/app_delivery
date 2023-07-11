import{createRouter,createWebHistory} from 'vue-router'
import home from "./components/home.vue"
import signup from "./components/signup.vue"
import login from "./components/login.vue"
import adminnavbar from "./components/adminnavbar.vue"
import adminhome from "./components/adminhome.vue"
import updatemenu from "./components/updatemenu.vue"
updatemenu
const routes=[
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