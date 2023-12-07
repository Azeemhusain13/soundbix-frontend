<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent @focus="handleOnFocus">
      <label for="username">Username:</label>
      <input type="text" id="username"
      autocomplete="username"
       v-model="username"
       @focus="handleOnFocus">

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="userpassword"
       autocomplete="current-password"
       @focus="handleOnFocus">

      <button class="button" type="submit" @click="onButtonClick">Login</button>
    </form>
    <div class="message" v-if="loggedInMessage">{{ loggedInMessage }}</div>
    <div class="error-message" v-else>{{ errorMessage }}</div>

  <RouterLink class="routerLink" to="/signin">registration</RouterLink>
  </div>
  
</template>

<script>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import useAuthStore from '@/store/auth-service.js'
// import router from '@/router';

export default {
  setup() {
    const username = ref('');
    const useremail = ref('');
    const userpassword = ref('');
    const useAuth = useAuthStore()

    const isRegister = computed(()=>useAuth.isRegister);
    const loggedInMessage = computed(() => useAuth.loginedUpMsg)
    const errorMessage = computed(() => useAuth.errorMsg)
    // const token = computed(()=> {
    //  return sessionStorage.getItem('token')
    // })

    // const tokenFlag = computed(()=>useAuth.token)

    const handleSubmit = () => {
      const userCredentials = {
        userName: username.value,
        userPassword: userpassword.value
      };
      useAuth.setLogInCredentials = userCredentials
      useAuth.LOGIN_USER()
      // console.log(token.value)
      // if (token.value) {
      //     router.push('/')
      //     window.location.reload();
      //     window.location.href = '/';
      //   }
    }

    const handleOnFocus = () => {
  
      useAuth.loginedUpMsg = ''
      useAuth.errorMsg = ''

    }

    const onButtonClick = () => {
      handleSubmit()
    }

    return {
      username,
      useremail,
      userpassword,
      handleSubmit,
      onButtonClick,
      loggedInMessage,
      errorMessage,
      handleOnFocus,
      isRegister
    };
  },
  components: {
    RouterLink }
};
</script>

<style scoped>

.button{
  padding: 10px 12px;
    border-radius: 12px;
    background-color: #333333;
    color: white;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;
}
.login {
  max-width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: center;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.button {
  padding: 10px 12px;
  border-radius: 12px;
  background-color: #333333;
  color: white;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button:hover {
  background-color: #555555;
  color: #ffffff;
}

.message {
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  color: green;

}

.error-message {
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  color: red;
}

.routerLink {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  color: grey;

}
</style>
