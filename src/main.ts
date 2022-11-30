import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)


export default {
    data() {
        return {
            cardNumber: 10,
            containerNumber: 3,
        }
    }
}

app.use(ElementPlus)
app.mount('#app')


