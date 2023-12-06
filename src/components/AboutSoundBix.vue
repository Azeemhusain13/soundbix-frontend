<template>
    <div class="about-us">
      <div class="content">
        <h2 class="section-title">About Us</h2>
        <p class="description">
          Welcome to our SounBix! We are a passionate team dedicated to bringing
          positive change to the world. With a focus on honesty,
          we strive to achieve the following goals and objectives:
        </p>
        <ul class="goals-list">
          <li>Goal 1: Fast Service</li>
          <li>Goal 2: Awesome Deals</li>
          <li>Goal 3: Best Prices</li>
         
        </ul>
      </div>
    </div>
 </template>
  
  <script>
  export default {
    name: 'AboutUs',
  };
  </script>
  
  <style scoped>
  .about-us {
    background-color: #f5f5f5; 
    padding: 40px 20px;
    margin-top: 90px;
  }
  
  .content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .section-title {
    color: #333; /* Dark text color */
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .description {
    color: #555; /* Slightly darker text color */
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .goals-list {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .goals-list li {
    color: #555; /* Match the description text color */
    font-size: 1.1em;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  </style>
