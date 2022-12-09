import { defineStore } from "pinia";

const usedMemory = 1000
const totoalMemory = 2000

export const gpuInfoStore = defineStore('gpuInfo', {
    state: () => {
        return {
            index:Number,
            name: String,
            usedMemory,
            totoalMemory,
        }
    },

    getters: {
        getUsage: (state) =>{
            return () => state.usedMemory / state.totoalMemory ;
        }
    }
})

export const gpuStatusStore = defineStore('gpuStatus', {
    state: () => {
        return {
            currentUser:String,
            timeAssigned: Number,
            timePast: Number,
        }
    }
})