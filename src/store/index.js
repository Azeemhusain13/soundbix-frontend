import { defineStore } from "pinia";
import { reactive } from "vue";
 
 const useRootStore = defineStore('root', () => {
 
    const posts = reactive({ value: {} })

    const FETCH_POST = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const jsonnew = await res.json();
        posts.value = { ...jsonnew }
        console.log(posts.value)
    }
 
    return {
     posts,
     FETCH_POST,
    }
})

export default useRootStore;
