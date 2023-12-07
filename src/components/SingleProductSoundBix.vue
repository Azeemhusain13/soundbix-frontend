<template>
    <div class="product-page">
        <div class="product-gallery">
        <img :src="Product.productImageUrl" alt=""/>  
        </div>
        <div class="product-details">
      <h1 class="product-title">{{ Product.productName }}</h1>
      <!-- <h6 class="category font-italic">{{ Product.category.categoryName }}</h6> -->
      <p class="product-description">
        {{ Product.productDescription}}
      </p>
          <p class="rating">Rating: ★★★★☆</p>
          <div class="additional-details">
          <p class="mrp-price">MRP: Rs. {{Product.productPrice}} </p>
          <h5>Select merchant to check offer price</h5>
          <div class="dropdown">
            <p v-if="selectedMerchant" class="discount-price">Selling price: Rs. {{ newPrice }}</p>
            <label for="merchantSelect">Select Merchant : </label>
            <select id="merchantSelect" v-model="selectedMerchant">
              <option v-if="listOfMerchants.length" value="" disabled>{{listOfMerchants[0].merchantName}}</option>
              <option v-for="(merchant, index) in listOfMerchants" :key="index" :value="merchant.id">
                {{ merchant.merchantName }}
              </option>
            </select>
            <p v-if="selectedMerchant">{{ getMerchantName(selectedMerchant) }}</p>
          </div>
          </div>
        
          <button class="add-to-cart-btn" @click="AddToCart()">Add to Cart</button>
          <h3>Specification</h3>
          <table class="specifications-table">
          <tr>
            <td>Brand</td>
            <td>{{Product.productBrand}}</td>
          </tr>
          <tr>
            <td>Wireless Communication Technology</td>
            <td>Bluetooth</td>
          </tr>
          <tr>  
            <td>Control Method</td>
            <td>Touch</td>
          </tr>
          <tr>
            <td>Microphone Format</td>
            <td>Built-in</td>
          </tr>
        </table> 
        </div>
       </div>
    
    </template>
    
    <script>
  import {computed, ref , defineComponent, onBeforeMount,watch} from "vue";
import { useRoute } from "vue-router";
import useRootStore from '@/store/index';
import router from "@/router";
 
export default defineComponent({
setup() {
  const rootStore = useRootStore();
  const AddToCart = () => {
      console.log(Product.value.productName.value)
      const body = {
        'productId':Product.value.productId,
        'merchantId':newMerchantId.value,
        'quantity':1,
         'merchantPrice':newPrice.value
      }
      console.log(body)
      console.log(sessionStorage.getItem("id"))
    rootStore.ADDTOCART(body,sessionStorage.getItem("id"))      
   window.location.reload();
         window.location.href = '/cart';
   router.push('/cart')
  };
  const findIndexByKeyValue = (array, key, value) => {
  return array.findIndex((element) => element[key] === value);
};
 
 
    const id = ref(0);
    const route = useRoute()
    id.value = route.params.id
    
    const Product = computed(() => rootStore.products1.value)
 
    const listOfMerchants = computed(() => rootStore.merchants)
    // console.log(Merchants)
    const selectedMerchant = ref('')
    // computed(()=>listOfMerchants.value[0].merchantName.value)
    // selectedMerchant = listOfMerchants.find((merchant) => merchant.id === selectedMerchant.value);
    const newMerchantId = ref('');
    const newPrice = ref('')
      
    watch(selectedMerchant, (newSelectedMerchant, oldSelectedMerchant) => {
      console.log('Selected Merchant changed:', newSelectedMerchant,'old:',oldSelectedMerchant);
 
      newMerchantId.value = newSelectedMerchant;
      const merchant_index = findIndexByKeyValue(listOfMerchants.value, 'id', newMerchantId.value);
      console.log(merchant_index,Product.value)
      const product_index = findIndexByKeyValue(listOfMerchants.value[merchant_index].productInventories,'productId',Product.value.productId)
      newPrice.value = listOfMerchants.value[merchant_index].productInventories[product_index].price;
      console.log(newMerchantId.value,newPrice.value)
    });
 
    const getMerchantName = () => {
    };
 
    
    onBeforeMount(()=>{
      rootStore.FETCH_PRODUCTS_BY_ID(id.value)
    rootStore.FETCH_MERCHANTS_BY_ID(id.value)
    //rootStore.ADDTOCART(id.value)
    })
          return {
            listOfMerchants,
            selectedMerchant,
            newMerchantId,
            Product,
            newPrice,
            AddToCart,
            getMerchantName,
        }
    }
    })
  </script>
    
    <style scoped>
    h3{
      color: darkslategray;
      font-size: 18px;
      padding-top: 20px;
    }
    .product-page {
        display: flex;
        max-width: 1400px;
        margin: 20px auto;
        margin-top: 90px;
    }
     
    .product-gallery {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      gap: 5px;
      justify-content: center;
    }
     
    .product-gallery img {
      width: calc(50% - 5px);
      height: 400px;
      object-fit: cover;
      
    }
     
    .product-details {
      flex: 1;
      padding: 20px;
    }
     
    h5{
      color: red;
    }
     
    .product-title {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .category {
      font-size: 16px;
      margin-bottom: 5px;
    }
      
    .product-description {
      margin-bottom: 20px;
    }
     
    .rating {
      margin-bottom: 10px;
    }
     
    .additional-details {
      text-align: left;
    }
     
    .mrp-price {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 5px;
    }
     
    @keyframes infiniteTransition {
      0% {
        font-size: 20px;
        font-weight: bold;
        color: blue;
        margin-bottom: 40px;
      }
     
      50% {
        font-size: 30px;
        color: black;
        font-weight: normal;
        margin-bottom: 30px;
      }
     
      100% {
        font-size: 20px;
        color: greenyellow;
        font-weight: bold;
        margin-bottom: 40px;
      }
    }
     
    .discount-price {
      animation: infiniteTransition 3s infinite; /* Adjust the duration as needed */
    }
      
    .add-to-cart-btn {
      background-color: black;
      color: #ffffff;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
     
    }
     
    .add-to-cart-btn:hover {
      background-color: cornflowerblue;
    }
    .specifications-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      font-size: 15px;
    }
     
    .specifications-table th, .specifications-table td {
      /* border: 1px solid #ddd; */
      padding: 12px;
      text-align: left;
    }
     
    .specifications-table th {
      background-color: #f2f2f2;
    }
     
    .specifications-table tr:nth-child(even) {
      background-color: rgb(192, 191, 191);
    }
    .specifications-table {
      /* width: 100%; */
      margin-bottom: 20px;
    }
     
    /* .specifications-table td {
      padding: 8px;
      text-align: left;
    } */
     
    form {
      width: 300px;
      margin: 0 auto;
      text-align: center;
      padding-top: 50px;
    }
     
    .value-button {
      display: inline-block;
      border: 1px solid #ddd;
      margin: 0px;
      width: 40px;
      height: 20px;
      text-align: center;
      vertical-align: middle;
      padding: 11px 0;
      background: #eee;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
     
    .value-button:hover {
      cursor: pointer;
    }
    .dropdown{
      padding: 0px 0px;
    }
     
    /* Responsive styles */
    @media (max-width: 1024px) {
      .product-page {
        flex-direction: column;
      }
    }
     
    @media (max-width: 768px) {
      .product-gallery {
        align-items: center; /* Center the content vertically */
      }
     
      
     
      .product-description,
      .additional-details {
        font-size: 14px;
      }
    }
     
    @media (max-width: 480px) {
      .product-gallery img {
        height: auto;
      }
    }
     
    @media (max-width: 360px) {
      h3 {
        font-size: 16px;
      }
     
      .mrp-price {
        font-size: 14px;
      }
    }
    </style>