<template>
  <div class="cart-container">
    <div class="cart-products">
      <h2>Your Cart</h2>
      <ul>
        <li v-for="(product, index) in cartItems" :key="index" class="cart-item">
          <img :src="product.productImageUrl" alt="Product Image" class="product-image" />
          <div class="product-details">
            <h3>{{ product.productName }}</h3>
            <p>{{ product.productDescription }}</p>
            <p>Price: {{ product.productPrice }}</p>
            <label>Quantity: </label>
            <input v-model="product.quantity" type="number" min="1" class="quantity-input" />
          </div>
          <button @click="removeFromCart(index)" class="remove-button">
            Remove
          </button>
        </li>
      </ul>
    </div>

    <div class="cart-summary">
      <h2>Order Summary</h2>
      <p>Total Items: {{ cartItems.length }}</p>
      <p>Total Price: {{ totalPrice }}</p>
      <button @click="checkout" class="checkout-button">
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";

import useRootStore from "@/store/index";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = ref(0);

    const totalPrice = ref(0)
    id.value = 1;
    const userRoot = useRootStore();
    console.log(id.value)


    
    if (!sessionStorage.getItem("token")) {
      router.push("/");
    } else {
      userRoot.FETCH_CART(id.value);
    }

    const cartItems = computed(() => userRoot.cart.value)

    const removeFromCart = (key) => {
      delete cartItems.value[key];
    };

    const calculateTotalPrice = () => {
      for (let key in cartItems.value) {
        totalPrice.value += Number(cartItems.value[key].productPrice)
      }
    };

    const checkout = () => {
      // Implement your checkout logic here
    };
    // const userRoot = useRootStore();
    // onBeforeMount(async () => {
    //   await userRoot.FETCH_CART(id.value);
    // });

    watch(() => cartItems.value, () => {
      calculateTotalPrice()
    }, {
      immediate: true,
      deep: true
    })


    return {
      cartItems,
      removeFromCart,
      // calculateTotalPrice,
      checkout,
      totalPrice,
    };
  },
};
</script>
 
<style scoped>
.cart-container {
  padding: 50px;
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.cart-products {
  flex-basis: 60%;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.product-image {
  width: 100px;
  /* Adjust the size as needed */
  height: 100px;
  /* Adjust the size as needed */
  margin-right: 10px;
}

.cart-summary {
  flex-basis: 30%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.checkout-button {
  background-color: #4c74af;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.checkout-button:hover {
  background-color: #13dc1d;
}
</style>
