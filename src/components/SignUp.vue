<template>
    <div class="signup-container">
        <h2>Create Account</h2>
        <form class="signup-form" @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Your Name:</label>
                <input v-model="formData.name" type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input v-model="formData.email" type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input v-model="formData.password" type="password" id="password" name="password" required />
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password:</label>
                <input v-model="formData.confirmPassword" type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <div class="form-group">
                <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const submitForm = () => {
      // You can perform form submission logic here
      console.log('Form Submitted:', formData.value);
    };

    return {
      formData,
      submitForm,
    };
  },
};
</script>

<style scoped>
.signup-container {
    padding: 40px;
  width: 300px; /* Adjust the width as needed */
  margin: 0 auto;
  margin-top: 10vh; /* Adjust the top margin as needed */
}

.signup-form {
  width: 300px; /* Adjust the form width as needed */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1e4720;
}


</style>