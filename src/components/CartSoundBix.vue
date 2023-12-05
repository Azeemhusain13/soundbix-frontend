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
            <input v-model="product.quantity" type="number" min="1" @input="updateQuantity(index)" class="quantity-input" />
          </div>
          <button @click="removeFromCart(product.productId)" class="remove-button">Remove</button>
        </li>
      </ul>
    </div>

    <div class="cart-summary">
      <h2>Order Summary</h2>
      <p>Total Items: {{ cartItems.length }}</p>
      <p>Total Price: {{ calculateTotalPrice() }}</p>
      <button @click="checkout" class="checkout-button">Proceed to Checkout</button>
    </div>
  </div>
</template>
<script>
import { ref} from 'vue';
export default {
  setup() {
    const cartItems = ref([
      {
        "productId": "4ce4ee0e-a204-447e-918d-84423c1cba21",
        "productName": "boat 2.1",
        "productDescription": "string",
        "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
        "productBrand": "string",
        "productPrice": "1299",
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
        "productName": "boat 5.0",
        "productDescription": "string",
        "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
        "productBrand": "string",
        "productPrice": "799",
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
          "productName": "boat pro",
          "productDescription": "string",
          "productImageUrl": "https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg",
          "productBrand": "string",
          "productPrice": "1891",
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
      }
    ]);
    const removeFromCart = (itemId) => {
      cartItems.value = cartItems.value.filter((item) => item.productId !== itemId);
    };

    const calculateTotalPrice = () => {
      return cartItems.value.reduce((total, item) => total + parseFloat(item.productPrice), 0);
    };

    const checkout = () => {
      // Implement your checkout logic here
    };

    return {
      cartItems,
      removeFromCart,
      calculateTotalPrice,
      checkout,
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
  width: 100px; /* Adjust the size as needed */
  height: 100px; /* Adjust the size as needed */
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