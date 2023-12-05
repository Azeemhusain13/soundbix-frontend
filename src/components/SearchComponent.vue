<template>
<div class ="product-container">
  <div v-for="(product, index) in products" :key="index" class="product">
    <img :src="product.productImageUrl" alt="Product Image" />
    <h3>{{ product.productName }}</h3>
    <p class ="brand">{{ product.productBrand }}</p>
    <p class ="product-price">${{ product.productPrice }}</p>

  <div class="category">
      <p>Offer: {{ product.category.categoryOffer }}%</p>
    </div>
  </div>
</div>
<div class="container">
    <div class="slider-wrapper">
      <div class="slider">
        <img v-for="(product, index) in images" :key="index" :src="product.productImageUrl" :alt="'Slide ' + (index + 1)" />
      </div>
      <div class="slider-nav">
        <a v-for="(product, index) in images" :key="index" :href="'#slide-' + (index + 1)"></a>
      </div>
    </div>
  </div>

</template>
<script>

import {  defineComponent } from 'vue';
import router from '@/router'
//import useRootStore from '@/store/index.js'
export default defineComponent({

setup(){   
  const SingleProductPage = () => {
    router.push("/singlepageproduct");
  };
  // const rootStore = useRootStore()
  // rootStore.FETCH_PRODUCTSS()
  

  const products = [
    {
        "productId": "4ce4ee0e-a204-447e-918d-84423c1cba21",
        "productName": "boat zy",
        "productDescription": "string",
        "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
        "productBrand": "string",
        "productPrice": "2000",
        "category": {
            "categoryName": "headphone",
            "categoryOffer": 20,
            "productList": [
                {
                    "productId": "4ce4ee0e-a204-447e-918d-84423c1cba21",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                },
                {
                    "productId": "5a310f1f-c71a-4f0e-aa94-b9b14134b271",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                }
            ]
        }
    },
    {
        "productId": "5a310f1f-c71a-4f0e-aa94-b9b14134b271",
        "productName": "boat zy",
        "productDescription": "string",
        "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
        "productBrand": "string",
        "productPrice": "2000",
        "category": {
            "categoryName": "headphone",
            "categoryOffer": 20,
            "productList": [
                {
                    "productId": "4ce4ee0e-a204-447e-918d-84423c1cba21",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                },
                {
                    "productId": "5a310f1f-c71a-4f0e-aa94-b9b14134b271",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                }
            ]
        }
    },
    {
        "productId": "6dbd7486-8ce6-48d1-9619-4633a221076b",
        "productName": "boat zy",
        "productDescription": "string",
        "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
        "productBrand": "string",
        "productPrice": "2000",
        "category": {
            "categoryName": "neckband",
            "categoryOffer": 10,
            "productList": [
                {
                    "productId": "6dbd7486-8ce6-48d1-9619-4633a221076b",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                },
                {
                    "productId": "e1ce30a1-121c-4a80-89a8-aaeb9d3e0a63",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                }
            ]
        }
    },
    {
        "productId": "e1ce30a1-121c-4a80-89a8-aaeb9d3e0a63",
        "productName": "boat zy",
        "productDescription": "string",
        "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
        "productBrand": "string",
        "productPrice": "2000",
        "category": {
            "categoryName": "neckband",
            "categoryOffer": 10,
            "productList": [
                {
                    "productId": "6dbd7486-8ce6-48d1-9619-4633a221076b",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                },
                {
                    "productId": "e1ce30a1-121c-4a80-89a8-aaeb9d3e0a63",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                }
            ]
        }
    },
    {
        "productId": "7fc453af-85b3-434e-b6da-0a8b2392f4d7",
        "productName": "boat zy",
        "productDescription": "string",
        "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
        "productBrand": "string",
        "productPrice": "2000",
        "category": {
            "categoryName": "earbuds",
            "categoryOffer": 10,
            "productList": [
                {
                    "productId": "7fc453af-85b3-434e-b6da-0a8b2392f4d7",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                },
                {
                    "productId": "d2736fa3-883f-4615-9d34-5eb3b021d49e",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                }
            ]
        }
    },
    {
        "productId": "d2736fa3-883f-4615-9d34-5eb3b021d49e",
        "productName": "boat zy",
        "productDescription": "string",
        "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
        "productBrand": "string",
        "productPrice": "2000",
        "category": {
            "categoryName": "earbuds",
            "categoryOffer": 10,
            "productList": [
                {
                    "productId": "7fc453af-85b3-434e-b6da-0a8b2392f4d7",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                },
                {
                    "productId": "d2736fa3-883f-4615-9d34-5eb3b021d49e",
                    "productName": "boat zy",
                    "productDescription": "string",
                    "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
                    "productBrand": "string",
                    "productPrice": "2000"
                }
            ]
        }
    }
]
  console.log(products.values)
  return{
    products, 
    SingleProductPage
  }}
})

</script>

<style>
.product-container {
  display: flex;
  margin: 100px auto;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjust as needed, e.g., space-around, space-evenly */
}
.product {
  width: calc(33.33% - 50px); /* Adjust the width as needed, considering margins */
  margin: 10px;
  box-sizing: border-box;
  border-radius: 2rem;
  border: 1px solid #ddd; /* Optional: Add a border for better separation */
  padding: 5px;
  text-align: center;
  transition: transform 0.3s ease-in-out; /* Adding smooth transition */
}
.product:hover {
  transform: scale(1.05); /* Increase size on hover */
}

.product img
 {
  max-width: 50%;
  height: auto;
  margin-bottom: 10px;
}
.category {
  margin-top: 5px;
}
@media (max-width: 768px) {
  .product {
    width: calc(50% - 20px); /* Adjust for smaller screens */
  }
}

@media (max-width: 576px) {
  .product {
    width: calc(100% - 20px); /* Adjust for even smaller screens */
  }
}


.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%; /* Each item takes the full width */
}


.container {
  padding: 1rem;
  background-color: #faf9f6;
}
 
.slider-wrapper {
  position: relative;
  max-width: 70rem;
  margin: 0 auto;
}
 
.slider {
  display: flex;
  aspect-ratio: 16 / 9;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  box-shadow: 0 1.5rem 3rem -0.75em hsla(0, 0%, 0%, 0.25);
  border-radius: 10px;
  max-height: 45rem;
}
.slider img {
  flex: 1 0 100%;
  scroll-snap-align: start;
  object-fit: cover;
}
 
.slider-nav {
  display: flex;
  column-gap: 1rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(50%);
  z-index: 1;
}
 
.slider-nav a {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.75;
  transition: opacity ease 250ms;
}
 
</style>