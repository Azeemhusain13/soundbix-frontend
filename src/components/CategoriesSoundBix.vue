<template>
    <!-- <li v-for="item in product" :key="item.productId">
      {{ item.title }}</li> -->
  <div class="card1">
  <div  v-for="product in products"  :key="product.productId" @click="SingleProductPage" >
    <h2>Bestselling affordable {{ product?.categoryName }}</h2>
    <div class="container">
        <div v-for="catProd in product?.productList" :key="catProd">
          <img :src="catProd.productImageUrl" :alt="image" class= "image">
          <div class="{{product?.categoryName}}"></div>
          <h3 class="productname">{{ catProd.productName }}</h3>
          <p class="productprice">{{ catProd.productPrice }}</p>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue';
import router from '@/router'
import useRootStore from '@/store/index.js'
export default defineComponent({

setup(){   
  const SingleProductPage = () => {
    router.push("/singlepageproduct");
  };
  const rootStore = useRootStore()
  rootStore.FETCH_PRODUCTS()
  const products = computed(() => rootStore.products.value)
  console.log(products.value)

  return{
    products, 
    SingleProductPage
  }}
})

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
  /* margin-top: 190px; */
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
.card1{
  margin-top: 90px;
}
</style>