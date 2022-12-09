import { defineStore } from "pinia";


export const userInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            uuid: String,
            name: String,
            
        }
    },

})




export const userContainersStore = defineStore('userContainers', {
    state: () => {
        return {
            containers: [],
            containerNumber: Number,
        }
    }
})

