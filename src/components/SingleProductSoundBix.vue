
<template>
    <p>
        This is a single product page.
    </p>
    <div class="product-page">
        <div class="product-gallery">
          <img v-for="(image, index) in productImages" :src="require(`@/assets/images/${image}`)" :alt="'Product Image ' + (index + 1)" :key="index" />
        </div>
        <div class="product-details">
      <h1 class="product-title">Boat Neckband</h1>
      <h6 class="category font-italic">Headsets</h6>
      <p class="product-description">
        Elevate your audio experience with the Boat Neckband. These wireless headsets provide high-quality sound and comfort for extended use.
        Whether you're on the go or relaxing at home, the Boat Neckband delivers crisp and clear audio. With features like Bluetooth connectivity and long battery life,
        it's the perfect companion for music enthusiasts. The neckband design ensures a secure fit, while the in-line controls make it easy to manage your music and calls.
        Immerse yourself in your favorite tunes with the Boat Neckband.
      </p>
          <p class="rating">Rating: ★★★★☆</p>
          <div class="additional-details">
          <p class="discount-price">₹ 999 <span class="original-price">₹ 2999</span> <span class="off">(Rs. 2000 OFF)</span></p>
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
        
          <button class="add-to-cart-btn">Add to Cart</button>
          <h3>Specification</h3>
          <table class="specifications-table">
          <tr>
            <td>Color</td>
            <td>White & Beige</td>
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
    export default {
        setup() {

          return {
          productImages: [
            "banner1.jpg",
            "banner2.jpg",
            "banner3.jpg",
            "banner4.jpg"
          ]
        }
    }
    };
    </script>
    
    <style scoped>
    .product-page {
        display: flex;
        max-width: 1400px;
        margin: 20px auto;
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