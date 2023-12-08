<template>
  <div v-if="isCartLoaded" class="cart-container">
    
     <div v-if = "Object.keys(cartItems).length" class="cart-products">
      <h2>Your Cart</h2>
        <ul>
        <li v-for="(product, index) in cartItems" :key="index" class="cart-item">
          <img :src="product.productImageUrl" alt="Product Image" class="product-image" />
          <div class="product-details">
            <h3>{{ product.productName }}</h3>
            <p>{{ product.productDescription }}</p>
            <p>Price: Rs. {{ product.productPrice }}</p>
            <label>Quantity: </label>
            <input v-model="product.quantity" type="number" min="1" max = "10" class="quantity-input" @keypress="disableInput"/>
          </div>
          <button @click="removeFromCart(index)" class="remove-button">
            Remove
          </button>
        </li>
      </ul>
    </div>
    <div v-else >
      <h1>YOUR CART IS EMPTY!!!</h1>
     <img src="@/assets/images/emptyCart.png" class="img-cart">
    </div>
    <div v-if="Object.keys(cartItems).length" class="cart-summary">
      <h2>Order Summary</h2>
      <p>Total Items: {{ Object.keys(cartItems).length ?  Object.keys(cartItems).length  : 0 }} </p>
      <p>Total Price: Rs. {{ Object.keys(cartItems).length ?  totalPrice  : 0 }}</p>
      <button @click="checkout" class="checkout-button">
       <RouterLink to="/Checkout"> Proceed to Checkout </RouterLink>
      </button>
    </div>
  </div>
  <div v-else class="overlay">
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";
import useRootStore from "@/store/index";
import {  useRouter } from "vue-router";
export default {
  setup() {
    // const route = useRoute();
    const router = useRouter();
    const id = ref(0);
   const totalPrice = ref(0)
    id.value = sessionStorage.getItem("id");
     const userRoot = useRootStore();
    console.log(id.value)
  if (!sessionStorage.getItem("token")) {
      router.push("/login");
    } else {
      userRoot.FETCH_CART(id.value);
    }

    const cartItems = computed(() => userRoot.cart.value)
    const isCartLoaded = computed(() => userRoot.isCartLoaded)
   
    const removeFromCart = (key) => {
      
      console.log('key',key)
      // console.log(cartItems.value[key])
      console.log('delete',cartItems.value)
      console.log(cartItems.value[key].productId,cartItems.value[key].merchantId)
      const body = {
        'productId':cartItems.value[key].productId,
        'merchantId':cartItems.value[key].merchantId,
      }
     userRoot.REMOVEFROMCART(body,sessionStorage.getItem("id")) 
     delete cartItems.value[key];
    };



    const calculateTotalPrice = () => {
      for (let key in cartItems.value) {
        totalPrice.value += Number(cartItems.value[key].productPrice)
      }
    };
    const disableInput = (event) => {
      event.preventDefault()
    }
     const checkout = () => {
          console.log(sessionStorage.getItem("id"))
        //  userRoot.SEND_EMAIL(sessionStorage.getItem("id"))
          userRoot.REMOVE_CART(sessionStorage.getItem("id"))
    };
 
    watch(() => cartItems.value, () => {
      calculateTotalPrice()
    }, {
      immediate: true,
      deep: true
    })

   console.log(Object.keys(cartItems).length);
   console.log(cartItems);
    return {
      cartItems,
      removeFromCart,
      // calculateTotalPrice,
      checkout,
      totalPrice,
      disableInput,
      isCartLoaded
    };
  },
};
</script>
 
<style scoped>
.img-cart{
  height: 80%
}


.remove-button{
  height: 40px;
  background-color: 	#342f29;
  padding: 12px;
  border-radius: 10%;
  color: white;
  text-transform: uppercase;


}
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
  background-color: orange;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.checkout-button:hover {
  background-color: grey;
}

.overlay {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #FFFFFF;
}
</style>
