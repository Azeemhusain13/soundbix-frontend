import { defineStore } from "pinia";
import { reactive, ref } from "vue";
 
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

    const merchants =  ref([])
        const FETCH_MERCHANTS_BY_ID = async (productId)=>{
            const res1 = await fetch(`http://10.20.3.173:8097/productInventory/get-merchants-by-product-id/${productId}`);
          const jsonew1 = await res1.json();
           merchants.value = jsonew1
        }
 
    

    const login = reactive ({value: {}})
    const FETCH_LOGIN = async ()=>{
        const res = await fetch('http://10.20.3.178:8081/auth/login');
        const jsonew = await res.json();
        login.value ={...jsonew}
        console.log(login.value)
    }
    const allproducts = reactive({value:{}})
    const FETCH_ALLPRODUCTS = async ()=>{
    const res3 = await fetch('http://10.20.3.178:8081/product/get-all-product');
    const jsonew = await res3.json();
    products.value = {...jsonew}
    console.log(products.value)
    }

    const cart = reactive({ value: {} });
    const FETCH_CART = async (userId) => {
        console.log(userId)
        const res2 = await fetch(`http://10.20.3.151:8060/cart/cartOfUser?userId=${userId}`);
        const jsonew2 = await res2.json();
        cart.value = { ...jsonew2 };
        console.log(cart.value);
    };


       const setProductDetais = ref({})
    const ADDTOCART = async(cartItemsDto,userId) =>{
        try {
            const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItemsDto),
              };
            const urlWithUserId = `http://localhost:8060/cart/addToCart?userId=${userId}`;
            const urlWithUserId = `http://10.20.3.151:8060/cart/addToCart?userId=${userId}`;
              const res = await fetch(urlWithUserId,options);
              console.log(res);
              const jsonRes = await res.json();
              console.log(jsonRes)
              setProductDetais.value = {jsonRes}
        }
        catch(error){
            console.error("Error During resgistration");
        }
    } 

    return {
     posts,
     cart,
     merchants,
     FETCH_MERCHANTS_BY_ID,
     ADDTOCART,
     setProductDetais,
     FETCH_CART,
     FETCH_PRODUCTS,
     products,
     products1,
     allproducts,
     FETCH_POST,
     FETCH_ALLPRODUCTS,
      FETCH_LOGIN, login, FETCH_PRODUCTS_BY_ID,
    }
})

export default useRootStore;
