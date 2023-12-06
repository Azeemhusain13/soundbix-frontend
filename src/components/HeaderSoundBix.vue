<template>
    <nav>
    <div class="nav-inner">
      <!-- Logo -->
      <div class="logo">
       SoundBix
      </div>
      <div class="search-container">
            <input type="text" class="search-box" placeholder="Search...">
      </div>
      <!-- Links -->
      <div class="links">
        <router-link to="/">HOME</router-link>
        <router-link to="/categories">CATEGORIES</router-link>
        <router-link to="/searchpageproduct">PRODUCT</router-link>
      </div>

      <div class="icons">
        <div class="sub-header" v-if="isLoggedIn">
          <div class="name">{{ name }}</div>
          <button class="logout" @click="handleLogout">Logout</button>
        </div>
        <router-link to="/login" v-else>
          <span class="icon">
             <div class="iconss"> 
        <router-link to="/login"> LOGIN</router-link></div>
            <!-- <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5Z"
                stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z"
                stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
            </svg> -->
          </span>
        </router-link>
        
        <button @click="getUserCart">
          <router-link to="/cart">
            <span class="icons">
            <!-- <span class="iconss"> -->
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13ZM2 7H16L17 19H1L2 7Z"
                  stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
              </svg> 
            </span>
            <!-- </span> -->
          </router-link>
        </button>
     
 
      </div>
      <!-- Icons -->
      <!-- <div class="iconss"> 
        <router-link to="/login"> LOGIN</router-link></div> -->
        <!-- <span class="icon">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5Z"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z"
              stroke="#121212"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>--->
     
        <!-- <button @click="getUserCart">
          <router-link to="/cart">
            <span class="icons">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13ZM2 7H16L17 19H1L2 7Z"
                  stroke="#121212"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> </span
          ></router-link>
        </button> -->
      </div>
  </nav>

</template>
<script>

import router from '@/router';
// import { computed } from 'vue';
import { ref, watch } from 'vue';
export default {
  name: 'HeaderSoundBix',
  props: {
    msg: String
  },
  setup() {
    const getUserCart = () => {
      if (isLoggedIn.value) {
        router.push({
          name: "cart",
          query: {
            userId: 1
          }
        })
      }else{
        router.push('/login')
      }
 
    }
 
    const handleLogout = () => {
      sessionStorage.clear()
    }
 
    const isLoggedIn = ref(sessionStorage.getItem("token"));
    const name = ref(sessionStorage.getItem("name"));
 
    watch(() => {
      isLoggedIn.value = sessionStorage.getItem("token");
      name.value = sessionStorage.getItem("name");
    });
    // const isLoggedIn = computed(() =>
    //   sessionStorage.getItem("token")
    // )
    // const name = computed(() =>
    //   sessionStorage.getItem("name")
    // )
    return {
      getUserCart,
      isLoggedIn,
      name,
      handleLogout
    }
  }
}















// import router from '@/router';
// export default {
//   name: 'HeaderSoundBix',
//   props: {
//     msg: String
//   },
//   setup(){
//    const getUserCart = ()=>{
//     router.push({
//   name:"cart",
//     query:{
//       userId:1
//     }
// })
//   }
//   return{
//     getUserCart
//   }
// }
// }
</script>
<style>

.links {
  color: #3498db; 
  text-decoration: none; 
}

.logo {
  font-family: sans-serif; 
  font-weight: bold; 
  color: white; 
  text-transform: uppercase; 
  letter-spacing: 2px;
  padding: 10px;
  font-size: 30px;
  margin-left: 50px;
}

.iconss{
  background-color: 	#ff9900;
  padding: 12px;
  border-radius: 10%;
}

nav {
  border-bottom: 2px solid #f8f8f8;
}
nav .nav-inner {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  margin: auto;
  z-index: 5;
  background-color: #FFFFFF;
  box-shadow:0px 3px 5px #F3F3F3;
  background-color: #282828;
}
.nav-inner .links a {
  margin: 0px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: white;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  text-decoration: none;
}
.nav-inner .links a:hover {
  border-color: #121212;
}

.icons{
    display: flex;
    align-items: center;
    color: black;
    padding: 8px;
    margin-right: 10px;
}
.icons span {
  margin: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container {
      position: relative;
    }

.search-box {
      padding: 10px;
      width: 500px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
    }

 a {
  text-decoration: none;
  color:white;
}
/* @media (width < 400px) {
  .links{
    display: block;
    flex-wrap: wrap;
    text-align: left;

  }
  .search-container{
    display: none;
}
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
} */


@media (max-width: 400px) {
  .nav-inner {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .links {
    display: flex;
    flex-direction: row;
    color: black;
    background-color: black;
  }

  .links a {
    width: 100%;
    box-sizing: border-box;
    padding: 10px; 
    margin-bottom: 5px; 
    margin-top: -88px;
    
  }
  .search-container {
    margin-top: 10px;
    padding: 10px; /* Adjust as needed */
    display: none;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo img {
    width: 50px;
    height: 50px;
  }

  .icons {
    margin-top: 10px; 
    display:none;
    /* Adjust as needed */
  }}
</style>