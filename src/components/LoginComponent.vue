<template>
  <div class ="login">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">

      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const handleSubmit = () => {
      console.log('Signing up:', username.value);
    };

    return {
      username,
      password,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
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

button {
  padding:20px 
}

</style>
