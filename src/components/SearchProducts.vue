<template>
    <div class="product-container">

        <div  v-for="product in products"  :key="product.productId" class="product" >
        <div v-if="products.length">
       
        <img :src="product.productImageUrl" :alt="image"></div>
        <h4 class="brand">{{ product.productName }}</h4>
        <p>{{ product.productDescription }}</p>
        <p class ="product-price">Rs. {{  product.productPrice}}</p>

      
      </div>
          </div>
        <!-- <h1>{{ products.value[0].category.categoryName }}</h1> -->
</template>
<script>
import { defineComponent } from "vue";
import useFilterStore from "@/store/filter-service";
import { ref, computed } from "vue";

export default defineComponent({
  setup() {
    const useFilter = useFilterStore();
    const input = ref('')
    const products = computed(() => useFilter.productSearched.value)
 const handleSearch = () => {
   console.log(input)
   useFilter.FETCH_PRODUCT_SEARCH(input.value);
  //  const products = computed(()=>useFilter.productSearched.value)
   console.log('filter',useFilter.productSearched.value);

 }

    return {
      handleSearch,
      input,
      products,
      // products: useFilter.productSearched
    };
  },
});
</script>
<style scoped>
.search-container {
  position: relative;
}
.product-price{
  color: grey
}

.product-container {
    display: flex;
    margin: 100px 30px 30px 10px;
    flex-wrap: wrap;
    justify-content: space-between;
  }


  .product:hover {
    cursor: pointer;
    transform: scale(1.05); /* Increase size on hover */
  }
   
  .product img
  {
    max-width: 50%;
    height: auto;
    margin-bottom: 10px;
  }
.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: box-shadow 0.3s ease; /* Optional: add a smooth transition effect on hover */

  /* Media Query for screens up to 480px */
@media screen and (max-width: 480px) {
    padding: 15px;
  }

  /* Media Query for screens between 481px and 768px */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 18px;
  }

  /* Additional styling for larger screens if needed */
}

.image1 {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px; /* Add some space between image and text */
}

h4, h5 {
  margin: 0;
}
</style>