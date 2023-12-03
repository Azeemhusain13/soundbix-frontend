<!-- Footer Section -->
<template><footer class="footer">
    <div class="footer-logo">SoundBix</div>

    <div class="footer-links">
        <router-link to="/banner">HOME</router-link>
        <router-link to="/categories">CATEGORIES</router-link>
        <router-link to="/deals">DEALS</router-link>
        <router-link to="/contacts">CONTACT</router-link>
        <router-link to="/about">ABOUT</router-link>
    </div>

    <div class="footer-social">
      <a href="#" >Facebook</a>
      <a href="#" >Twitter</a>
      <a href="#">Instagram</a>
    </div>

    <div class="footer-disclaimer">
       2023 Soundbix. All rights reserved.
    </div>
  </footer>
</template>
<script>
</script>
<style>

body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .footer {
      background-color: #333;
      color: #fff;
      padding: 30px 0;
      text-align: center;
    }

    .footer-logo {
      font-size: 24px;
      font-weight: bold;
    }

    .footer-links {
      margin-top: 20px;
    }

    .footer-links a {
      color: #fff;
      text-decoration: none;
      margin: 0 15px;
    }

    .footer-social {
      margin-top: 20px;
    }

    .footer-social a {
      color: #fff;
      text-decoration: none;
      margin: 0 15px;
      font-size: 18px;
    }

    .footer-disclaimer {
      margin-top: 20px;
      font-size: 14px;
    }

</style>