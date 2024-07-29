import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.VUE_APP_URL_API || 'http://localhost:5500'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

createApp(App).use(store).use(router).use(vueAxios, axios).mount('#app')
