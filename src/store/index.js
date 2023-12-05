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
    const products1 = reactive({value:{}})

    const FETCH_PRODUCTS_BY_ID = async (productId)=>{
     const res1 = await fetch(`http://10.20.3.178:8081/product/get-product-by-id/${productId}`);
     const jsonew1 = await res1.json();
    products1.value = {...jsonew1}
    console.log(products1.value)
    }
 
    const productss = reactive({value:{}})
    const FETCH_PRODUCTSS = async ()=>{
     const res = await fetch('http://10.20.3.178:8081/product/get-all-product');
     const jsonew = await res.json();
    products.value = {...jsonew}
    console.log(products.value)
    }

    const login = reactive ({value: {}})
    const FETCH_LOGIN = async ()=>{
        const res = await fetch('http://10.20.3.178:8081/auth/login');
        const jsonew = await res.json();
        login.value ={...jsonew}
        console.log(login.value)
    }

    return {
     posts,
     FETCH_PRODUCTS,
     products,
     productss,
     products1,
     FETCH_POST,
     FETCH_PRODUCTSS, FETCH_LOGIN, login, FETCH_PRODUCTS_BY_ID,
    }
})

export default useRootStore;
