<template>
    <div class="contact-us">
      <div class="content">
        <h2 class="section-title">Contact Us</h2>
        <p class="description">
          If you have any questions or concerns, feel free to reach out to us. We are here to assist you with any inquiries related to Soundbix, our products, or your shopping experience.
        </p>
  
        <div class="contact-info">
          <p><strong>Email:</strong> support@soundbix.com</p>
          <p><strong>Phone:</strong> 1-800-SOUNDBIX</p>
          <p><strong>Address:</strong> 1234 Music Street, Cityville, State, Zip</p>
        </div>
  
        <p class="description">
          Whether you're looking for assistance, want to provide feedback, or have a partnership inquiry, we'd love to hear from you. Your satisfaction is our priority!
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
  };
  </script>
  
  <style scoped>
  .contact-us {
    background-color: #f5f5f5; /* Light background color */
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
  
  .contact-info {
    margin-bottom: 20px;
  }
  
  .contact-info p {
    color: #555; /* Match the description text color */
    font-size: 1.1em;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  </style>
  