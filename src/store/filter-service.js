import { defineStore } from "pinia";
import { reactive } from "vue";
 
const useFilterStore = defineStore('filter', () => {
 
    
    const productSearched = reactive({value:[]})
    const FETCH_PRODUCT_SEARCH = async (input) => {
     const res = await fetch(`http://10.20.3.178:8081/product/filter-products/${input}`);
     const jsonew = await res.json();
     console.log(jsonew)
     productSearched.value = [...jsonew]
    console.log(productSearched.value)
    }
 
    return {
        FETCH_PRODUCT_SEARCH,
        productSearched
    }
})
export default useFilterStore;