import router from "@/router";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
// import { useCookies } from "vue3-cookies";

const useAuthStore = defineStore('auth', () => {

    // const { cookies } = useCookies();

    const setSignUpCredentials = ref(null)
    const setLogInCredentials = ref(null)
    const signUpMsg = ref('')
    const loginedUpMsg = ref('')
    const errorMsg = ref('')
    const isRegister = ref(false)
    const token = computed(() => sessionStorage.getItem("token") || '')
    const id = computed(() => sessionStorage.getItem("id") || '')
    const name = computed(() => sessionStorage.getItem("name") || '')



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
        console.log(data.message)
        signUpMsg.value = data.message;
        if (response.status !== 200) {
            errorMsg.value = data.error
            console.log(data.error)
            
        } else {
           
            setTimeout(()=>{
                router.push('/login')
            },1000)
            
        }
    }

    const LOGIN_USER = async () => {
        console.log(setLogInCredentials.value);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(setLogInCredentials.value),
        };
        const response = await fetch('http://10.20.3.178:8084/auth/login', options)
        const data = await response.json()
        loginedUpMsg.value = "Logged In";
        console.log(data.token)

        if (data.token !== null && data.userId !== null && data.userName !== null) {
            sessionStorage.setItem("token", data.token)
            sessionStorage.setItem("id", data.userId)
            sessionStorage.setItem("name", data.userName)
        }

        // cookies.set("token", data.token)
        // cookies.set("id", data.userId)
        // cookies.set("name", data.userName)


        if (response.status !== 200) {
            errorMsg.value = data.error
            console.log(data.error)
        } else {

            setTimeout(()=>{
                router.push('/')
                window.location.reload()
                window.location.href = '/'
            },1000)
            
        }
    }

    return {
        setSignUpCredentials,
        setLogInCredentials,
        LOGIN_USER,
        REGISTER_USER,
        signUpMsg,
        loginedUpMsg,
        errorMsg,
        isRegister,
        token,
        id,
        name
    }
})
export default useAuthStore;