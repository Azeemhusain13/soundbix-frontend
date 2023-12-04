import { defineStore } from "pinia";
import { reactive } from "vue";
 
 const useRootStore = defineStore('root', () => {
 
    const posts = reactive({ value: {} })

    const FETCH_POST = async () => {
        const res = await fetch('http://10.20.3.178:8081/product/get-all-categories-with-products')
 
        const jsonnew = await res.json();
        posts.value = { ...jsonnew }
        console.log(posts.value)
    }
    const products = reactive({value:{}})
    const FETCH_PRODUCTS = async ()=>{
     const res = await fetch('http://10.20.3.178:8081/product/get-all-categories-with-products');
     const jsonew = await res.json();
    products.value = {...jsonew}
    console.log(products.value)
    }
 
    return {
     posts,
     FETCH_PRODUCTS,
     products,
     FETCH_POST
    }
})

export default useRootStore;
