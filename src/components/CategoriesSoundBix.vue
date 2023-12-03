<template>
    <h1>{{ product['1'].title }}</h1>
    

  </template>
  
  <script>
  import { defineComponent, computed } from "vue";
import useRootStore from '@/store/index'
 
 
 
 export default defineComponent({
    
     setup() {
         const rootStore = useRootStore();
         rootStore.FETCH_POST()
         const product = computed(() => rootStore.posts.value)
  
         return {
             product, rootStore

         }
        }
    })

  </script>