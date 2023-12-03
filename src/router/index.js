import { createRouter, createWebHistory } from "vue-router";
import AboutSoundBix from '../components/AboutSoundBix.vue';
import CategoriesSoundBix from '../components/CategoriesSoundBix.vue';
import DealsSoundBix from '../components/DealsSoundBix'
import ContactSoundBix from '../components/ContactSoundBix'
import BannerSoundBix from '../components/BannerSoundBix'

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
        path:'/banner',
        name: 'banner',
        component: BannerSoundBix
    },
]

const router= createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router