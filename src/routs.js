import{createRouter,createWebHistory} from 'vue-router'
import home from "./components/home.vue"

import image from "./components/image.vue"
const routes=[
   {
    name:"home",
    component:home,
    path:"/"
   },
//    {
//     name:"header",
//     component:header,
//     path:"/header"
//        },
       {
        name:"image",
        component:image,
        path:"/image"
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