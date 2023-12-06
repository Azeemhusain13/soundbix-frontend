<template>
    <p>This is a search page</p>
  <div class="search-container">
    <div class="search-container">
        <input type="text" class="search-box" placeholder="Search..." v-model = "input" >
        <button class="search-btn" @click="handleSearch">Search</button>
      
        <div v-if="products.value.length">
            <h1>{{ products.value[0].productName }}</h1>
        <h1>{{ products.value[0].productDescription }}</h1></div>
  </div></div>
</template>
<script>
import { defineComponent } from "vue";
import useFilterStore from "@/store/filter-service";
import { ref } from "vue";

export default defineComponent({
  setup() {
    const useFilter = useFilterStore();
    const input = ref('')
    // const product = computed(() => useFilter.productSearched.value)
 const handleSearch = () => {
   console.log(input)
   useFilter.FETCH_PRODUCT_SEARCH(input.value);
   console.log(useFilter.productSearched);
 }

    return {
      handleSearch,
      input,
      products: useFilter.productSearched
    };
  },
});
</script>
<style scoped>
.filter{
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
.search-container {
  position: relative;
}
</style>
