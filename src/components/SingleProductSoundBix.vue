
<template>


          
        <!-- This is a single product page.

              <div class="right-column">
                <div class="product-description">
                  <img :src="Product.productImageUrl?.[0]" alt=""/>  
                      <h2>{{ Product.productName }}</h2>
                      <h2>{{ Product.productDescription}}</h2>
                      <h2>{{ Product.productPrice }}</h2>
                </div>
             </div> -->
    <div class="product-page">
        <div class="product-gallery">
        <img :src="Product.productImageUrl" alt=""/>  
        </div>
        <div class="product-details">
      <h1 class="product-title">{{ Product.productName }}</h1>
      <h6 class="category font-italic">{{ Product.category.categoryName }}</h6>
      <p class="product-description">
        {{ Product.productDescription}}
      </p>
          <p class="rating">Rating: ★★★★☆</p>
          <div class="additional-details">
          <p class="discount-price">Rs. {{Product.productPrice}} </p>
          <p class="seller">Seller: Flashtech Retail</p>
          </div>

          <div class="dropdown">
            <label for="Qty : "> Qty : </label>
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>
        
          <button class="add-to-cart-btn" @click="AddToCart()">Add to Cart</button>
          <h3>Specification</h3>
          <table class="specifications-table">
          <tr>
            <td>Brand</td>
            <td>{{Product.productBrand}}</td>
          </tr>
          <tr>
            <td>Material</td>
            <td>Synthetic Leather</td>
          </tr>
          <tr>
            <td>Closure</td>
            <td>Lace-Up</td>
          </tr>
        </table> 
        </div>
       </div>
    
    </template>
    
    <script>

import {computed, ref , defineComponent} from "vue";
import { useRoute } from "vue-router";
import useRootStore from '@/store/index';
import router from "@/router";

export default defineComponent({
setup() {


  const AddToCart = () => {
    console.log("called")
    router.push('/cart')
  };

    const rootStore = useRootStore();
   // const Product ={}
    const id = ref(0);
    const route = useRoute()
    id.value = route.params.id
     rootStore.FETCH_PRODUCTS_BY_ID(id.value)
    // const rootStore = useRootStore();
    // rootStore.FETCH_POST()
    const Product = computed(() => rootStore.products1.value)

          return {
          // productImages: [
          //   "banner1.jpg",
          //   "banner2.jpg",
          //   "banner3.jpg",
          //   "banner4.jpg"
          // ], 
          Product, AddToCart
        }
    }
    })
    </script>
    
    <style scoped>
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
      text-align: center;
    }
    
    .discount-price {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .original-price {
        font-size: 15px;
        color: #393838;
      text-decoration: line-through;
      margin-left: 5px;
    }
    .off {
      font-size: 18px;
      color: red;
      margin-bottom: 5px;
    }
    
    .seller {
      font-size: 12px;
      color:darkslateblue;
    }
    
    .add-to-cart-btn {
      background-color: #8800ff;
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
      margin-bottom: 20px;
    }
    
    .specifications-table td {
      padding: 8px;
      text-align: left;
    }

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
    padding: 20px;
}

    </style>