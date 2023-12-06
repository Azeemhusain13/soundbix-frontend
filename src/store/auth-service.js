import { defineStore } from "pinia";
import { ref } from "vue";

const useAuthStore = defineStore('auth', () => {

    const setSignUpCredentials = ref(null)
    const setLogInCredentials = ref(null)
    const signUpMsg = ref('')
    const loginedUpMsg = ref('')
    const errorMsg = ref('')

    const REGISTER_USER = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(setSignUpCredentials.value),
        };
        const response = await fetch('http://10.20.3.178:8084/auth/register', options)
        const data = await response.json()
        signUpMsg.value = data.message;
        console.log(data.message)
        if (response.status === 409) {
            errorMsg.value = data.error;
            // errorMsg.value =  "Already Register User"
            console.log(data.error)
        } else if (response.status === 400) {
            errorMsg.value = data.error
        }
    }

    const LOGIN_USER = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(setLogInCredentials.value),
        };
        const response = await fetch('http://10.20.3.178:8084/auth/login', options)
        const data = await response.json()
        loginedUpMsg.value = data.userName;
        console.log(data.token)

        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("id", data.userId)
        sessionStorage.setItem("name", data.userName)


        if (response.status === 401) {
            errorMsg.value = data.error;
            console.log(data.error)
        } else if (response.status === 400) {
            errorMsg.value = data.error
        }
    }

    return {
        setSignUpCredentials,
        setLogInCredentials,
        LOGIN_USER,
        REGISTER_USER,
        signUpMsg,
        loginedUpMsg,
        errorMsg
    }
})
export default useAuthStore;