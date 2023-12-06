<template>
    <div class="registration">
        <h2>Registration</h2>
        <form @submit.prevent @focus="handleOnFocus">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username"  required>

            <label for="useremail">Useremail:</label>
            <input type="text" id="useremail" v-model="useremail"  required>

            <label for="password">Password:</label>
            <input type="password" id="password" v-model="userpassword" >

            <button class="button" type="button" @click="onButtonClick">Registration</button>
        </form>
        <div class="message" v-if="signUpMessage">{{ signUpMessage }}</div>
        <div class="error-message" v-else>{{ errorMessage }}</div>

        <RouterLink class="routerLink" to="/login">login</RouterLink>


    </div>
</template>
  
<script>
import { ref, computed } from 'vue';
// import { useRouter } from 'vue-router';
import useAuthStore from '@/store/auth-service.js'

export default {
    setup() {
        const username = ref('');
        const useremail = ref('');
        const userpassword = ref('');
        const useAuth = useAuthStore()
        // const router = useRouter();

        const signUpMessage = computed(() => useAuth.signUpMsg)
        const errorMessage = computed(() => useAuth.errorMsg)

        console.log(signUpMessage.value, errorMessage.value)

        const handleSubmit = () => {
            const userCredentials = {
                userName: username.value,
                userEmail: useremail.value,
                userPassword: userpassword.value
            };
            useAuth.setSignUpCredentials = userCredentials
            useAuth.REGISTER_USER()
        }

        setTimeout(() => {
            useAuth.signUpMsg = ''
            useAuth.errorMsg = ''
            username.value = ''
            useremail.value = ''
            userpassword.value = ''
        }, 2000)

        const handleOnFocus = () => {
            username.value = ''
            useremail.value = ''
            userpassword.value = ''
            useAuth.signUpMsg = ''
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
            signUpMessage,
            useAuth,
            errorMessage,
            handleOnFocus
        };
    },
};
</script>
  
<style scoped>
.registration {
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
  