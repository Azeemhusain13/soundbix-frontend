import { createRouter, createWebHistory } from "vue-router";
import AboutSoundBix from '../components/AboutSoundBix.vue';
import CategoriesSoundBix from '../components/CategoriesSoundBix.vue';
import DealsSoundBix from '../components/DealsSoundBix'
import ContactSoundBix from '../components/ContactSoundBix'
import BannerSoundBix from '../components/BannerSoundBix'
import CartSoundBix from '../components/CartSoundBix'
import SingleProductSoundBix from '../components/SingleProductSoundBix.vue'
import LoginComponent from '../components/Authentication/LoginComponent.vue'
import SigninComponent from '../components/Authentication/SigninComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import CheckOutSoundBix from '@/components/CheckOutSoundBix.vue'
import SearchFilter from '@/components/SearchFilter.vue'
import SearchProducts from '@/components/SearchProducts.vue'
const routes=[
    {
        path:'/about',
        name: 'about',
        component: AboutSoundBix
    },
    {
        path:'/categories',
        name: 'categories',
        component: CategoriesSoundBix
    },
    {
        path:'/deals',
        name: 'deals',
        component: DealsSoundBix
    },
    {
        path:'/contacts',
        name: 'contacts',
        component: ContactSoundBix
    },
    {
        path:'/',
        name: 'banner',
        component: BannerSoundBix
    },
    {
        path:'/cart',
        name: 'cart',
        component: CartSoundBix
    },
    {
        path:'/login',
        name: 'login',
        component: LoginComponent
    },
    {
    path:'/singlepageproduct/:id',
    name: 'singlepageproduct',
    component: SingleProductSoundBix
   },
   {
    path:'/searchpageproduct',
    name: 'searchpageproduct',
    component: SearchComponent
   },
   {
    path:'/signin',
    name: 'signin',
    component: SigninComponent
   },
   {
    path: '/search',
    name:'search',
    component: SearchFilter
   },
   {
    path:'/Checkout',
    name:'checkout',
    component: CheckOutSoundBix
   },
   
  { path: '/search',
   name:'search',
   component: SearchProducts
}

]

const router= createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router