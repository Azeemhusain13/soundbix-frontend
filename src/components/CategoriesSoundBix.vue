<template>
    <!-- <li v-for="item in product" :key="item.productId">
        {{ item.title }}</li> -->
    
<h2>Bestselling affordable NeckBands</h2>

<div class="container">
                
                 <div v-for="product in products"  :key="product.productId" @click="SingleProductPage" >
                  <div v-if="product.category=='Neckband'">
                  <div class="card">
                <img :src="product.productImgUrl" :alt="Image " class= "image" >
                
                <h3 class="productname">{{ product.productName }}</h3>
                <p class="productprice">{{ product.productPrice }}</p>
            </div>
        </div>
        </div>
</div>

<h2>Bestselling Affordable Headphones</h2>

<div class="container">
                
                 <div v-for="product in products"  :key="product.productId"  >
                  <div v-if="product.category=='Headphone'">
                  <div class="card">
                <img :src="product.productImgUrl" :alt="Image " class= "image" >
                
                <h3 class="productname">{{ product.productName }}</h3>
                <p class="productprice">{{ product.productPrice }}</p>
            </div>
        </div>
        </div>
</div>
<h2>Best Affordable Earbuds</h2>
<div class="container">
                
                <div v-for="product in products"  :key="product.productId"  >
                 <div v-if="product.category=='Earbuds'">
                 <div class="card">
               <img :src="product.productImgUrl" :alt="Image " class= "image" >
               
               <h3 class="productname">{{ product.productName }}</h3>
               <p class="productprice">{{ product.productPrice }}</p>
           </div>
       </div>
       </div>
</div>
<h2>Best Affordable Speaker</h2>
<div class="container">
                
                <div v-for="product in products"  :key="product.productId"  >
                 <div v-if="product.category=='Speaker'">
                 <div class="card">
               <img :src="product.productImgUrl" :alt="Image " class= "image" >
               
               <h3 class="productname">{{ product.productName }}</h3>
               <p class="productprice">{{ product.productPrice }}</p>
           </div>
       </div>
       </div>
</div>
</template>
  
  <script>
import { defineComponent } from 'vue';
import router from '@/router'

export default defineComponent({

setup(){   

  const SingleProductPage = () => {
      router.push("/singlepageproduct");
    };
  const products = [
  {
    "productId": 1,
    "productPrice": "Rs1000",
    "productName": "Neckband",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
    "category": "Neckband"
  },
  {
    "productId": 1,
    "productPrice": "Rs1000",
    "productName": "Neckband",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
    "category": "Neckband"
  },
  {
    "productId": 1,
    "productPrice": "Rs1000",
    "productName": "Neckband",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
    "category": "Neckband"
  },
  {
    "productId": 1,
    "productPrice": "Rs1000",
    "productName": "Neckband",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
    "category": "Earbuds"
  },
  {
    "productId": 1,
    "productPrice": "Rs1000",
    "productName": "Neckband",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
    "category": "Neckband"
  },
  {
    "productId": 1,
    "productPrice": "Rs 999/-",
    "productName": "HeadPhone",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
    "category": "Neckband"
  },
  {
    "productId": 1,
    "productPrice": "Rs 3000/-",
    "productName": "EarPods",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg"
  },
  {
    "productId": 1,
    "productPrice": "5",
    "productName": "EarBuds",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg"
  },
  {
    "productId": 1,
    "productPrice": "Rs 6",
    "productName": "EarPhones",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg"
  },
  {
    "productId": 1,
    "productPrice": "Rs 700",
    "productName": "HeadPhone",
    "productImgUrl": "https://m.media-amazon.com/images/I/61Zs1ap8UuL.jpg",
    category:"Headphone"
  },
  {
    "productId": 1,
    "productPrice": 8,
    "productName": "Earbud",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
    "category": "Neckband"
  },
  {
    "productId": 1,
    "productPrice": 9,
    "productName": "Neckband",
    "productImgUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg"
  },
  {
    "productId": 1,
    "productPrice": 700,
    "productName": "Headphone",
    "productImgUrl": "https://m.media-amazon.com/images/I/61Zs1ap8UuL.jpg",
    "category": "Headphone"
  }
  ,
  {
    "productId": 1,
    "productPrice": 800,
    "productName": "Headphone",
    "productImgUrl": "https://m.media-amazon.com/images/I/61Zs1ap8UuL.jpg",
    "category": "Headphone"
  },

  {
    "productId": 1,
    "productPrice": "Rs 899",
    "productName": "Earbuds",
    "productImgUrl": "https://m.media-amazon.com/images/I/61Zs1ap8UuL.jpg",
    "category": "Earbuds"
  },
  {
    "productId": 1,
    "productPrice": "Rs 999",
    "productName": "Earbuds",
    "productImgUrl": "https://m.media-amazon.com/images/I/41KfC6b4bxL._SL1024_.jpg",
    "category": "Earbuds"
  },
  {
    "productId": 1,
    "productPrice": "Rs 199",
    "productName": "Earbuds",
    "productImgUrl": "https://m.media-amazon.com/images/I/41KfC6b4bxL._SL1024_.jpg",
    "category": "Earbuds"
  },

  {
    "productId": 1,
    "productPrice": "Rs 1199",
    "productName": "Speaker",
    "productImgUrl": "https://m.media-amazon.com/images/I/41QILblSE7L._SX300_SY300_QL70_FMwebp_.jpg",
    "category": "Speaker"
  },
  {
    "productId": 1,
    "productPrice": "Rs 1299",
    "productName": "Speaker",
    "productImgUrl": "https://m.media-amazon.com/images/I/41QILblSE7L._SX300_SY300_QL70_FMwebp_.jpg",
    "category": "Speaker"
  },
  {
    "productId": 1,
    "productPrice": "Rs 1399",
    "productName": "Speaker",
    "productImgUrl": "https://m.media-amazon.com/images/I/41KfC6b4bxL._SL1024_.jpg",
    "category": "Speaker"
  },
  {
    "productId": 1,
    "productPrice": "Rs 1499",
    "productName": "Speaker",
    "productImgUrl": "https://m.media-amazon.com/images/I/41KfC6b4bxL._SL1024_.jpg",
    "category": "Speaker"
  }

]
 return{
    products, SingleProductPage
}}

})







//   import { defineComponent, computed } from "vue";
// import useRootStore from '@/store/index'
 
 
 
//  export default defineComponent({
    
//      setup() {
//          const rootStore = useRootStore();
//          rootStore.FETCH_POST()
//          const product = computed(() => rootStore.posts.value)
        
//          return {
//              product, rootStore

//          }
//         }
//     })

  </script>

  <style>

.image{
    height: 200px;
    width: 200px;
}
.container {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
img {
  border-radius: 5px 5px 0 0;
}

.container::-webkit-scrollbar {
  display: none;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 25px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.productname {
    font-size: medium;
    font-family:'Times New Roman';
    padding: 5% ;
}

.productprice{
    font-size: medium;
    font-family:Georgia, 'Times New Roman', Times, serif;
    padding: 5%;
}
</style>