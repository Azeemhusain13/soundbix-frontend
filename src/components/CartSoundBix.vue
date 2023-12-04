<template>
  <div class="buy-button">
  <button class="proceed-to-buy-button">Proceed to Buy</button>
</div>

<div class="cart-container"> 
  <div class = "cart-product">
    <ul class="cart-list">
        <li v-for="(product, index) in product" :key="index" class="product-item">
          <div class="product-info">
            <img :src="product.productImageUrl" :alt="product.productName" class="product-image" />
            <div class = "prod-details">
            <span>{{ product.productName }} </span>
            <span>{{ product.productDescription }} </span>
            <span> 1400 </span>
          </div>
          </div>
          <button  class="add-to-cart-button">Remove</button>
        </li>
      </ul>

      <div class="cart-total">
        <span>Total:</span>
        <span class="total-amount">3000</span>
      </div>

    </div>


    <div class="available-products">

      <h2>Available Products</h2>
      <ul>
        
        <li v-for="(product, index) in product" :key="index">
          <img :src="product.productImageUrl" :alt="product.productName" class="product-image" />
            <div class = "prod-details">
            <span>{{ product.productName }} </span>
            <span>{{ product.productDescription }} </span>
            </div>
        </li>
      </ul>
    </div>
</div>


</template>
<script>
 
  export default{
   setup(){
    const product =  
      [{
  "productId": "a1b2c3d4",
  "productName": "Sample Product",
  "productDescription": "This is a dummy product for testing.",
  "productImageUrl": "https://picsum.photos/id/237/200/300",
  "productBrand": "Sample Brand",
  "category": {
    "categoryId": "x1y2z3",
    "categoryName": "Sample Category",
    "categoryDescription": "This is a sample category.",
    "parentCategory": null
  }     
 },
 {
  "productId": "a1b2c3d4",
  "productName": "Sample Product",
  "productDescription": "This is a dummy product for testing.",
  "productImageUrl": "https://picsum.photos/id/237/200/300",
  "productBrand": "Sample Brand",
  "category": {
    "categoryId": "x1y2z3",
    "categoryName": "Sample Category",
    "categoryDescription": "This is a sample category.",
    "parentCategory": null
  }     
 },
 {
  "productId": "a1b2c3d4",
  "productName": "Sample Product",
  "productDescription": "This is a dummy product for testing.",
  "productImageUrl": "https://picsum.photos/id/237/200/300",
  "productBrand": "Sample Brand",
  "category": {
    "categoryId": "x1y2z3",
    "categoryName": "Sample Category",
    "categoryDescription": "This is a sample category.",
    "parentCategory": null
  }     
 },]


   
   return{
    product,
   }
  }
}
</script>

<style>
.cart-container {
  display: flex;
  justify-content: space-between;
}
  .cart-product {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex-grow: .9;
  margin: 30px;

}

  .cart-list {
    list-style: none;
    padding: 0;
  }

  .product-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 15px;
    margin-bottom: 10px;
  }

  .product-info {
    display: flex;
    align-items: center;
    flex-grow: .5;
  }

  .product-image {
    max-width: 200px;
    max-height: 200px;
    margin-right: 15px;
    border-radius: 4px;
  }

  .prod-details {
    flex-grow: 1;
  }

  .prod-details span {
    display: block;
    margin-bottom: 5px;
  }

  .product-name {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  .product-description {
    color: #777;
  }

  .product-price {
    font-size: 16px;
    font-weight: bold;
    color: #ff6347;
  }

  .add-to-cart-button {
    background-color: rgb(76, 173, 175);
    color: #fff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
  }

  .add-to-cart-button:hover {
    background-color: rgb(76, 173, 175);
  }

  .cart-total {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 15px;
    font-size: 18px;
    background-color: #f8f8f8;
  }

  .total-amount {
    color: #ff6347;
    font-weight: bold;
  }

  .available-products {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex-basis: 30%;
    margin: 30px;
    padding: 15px;
  }

  .buy-button {
    margin: 10px; /* Adjust margin based on your design preference */
  }

  .proceed-to-buy-button {
    background-color: rgb(76, 173, 175);
    color: #fff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    width: 100%; /* Make the button full width */
  }
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .available-products ul {
    list-style: none;
    padding: 0;
  }

  .available-products li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 768px) {
    .cart-container {
      flex-direction: column; /* Stack items vertically on smaller screens */
    }

    .cart-product,
    .available-products {
      flex-basis: 100%; /* Make both product sections take full width on smaller screens */
    }

    .buy-button,
    .available-products {
      margin: 15px; /* Adjust margin for better spacing on smaller screens */
    }

    .product-info {
      flex-direction: column; /* Stack product info vertically on smaller screens */
    }

    .product-image {
      max-width: 100%; /* Make the image fill the container on smaller screens */
      margin-bottom: 10px; /* Add some space below the image on smaller screens */
    }

    .proceed-to-buy-button {
      width: auto; /* Reset the width for better button appearance on smaller screens */
    }
  }

</style>




