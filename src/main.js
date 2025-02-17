import { createApp } from 'vue'
import './style.scss'
import Vuetify from '././plagins/vuetify.js'
import App from './App.vue'



createApp(App)
    .use(Vuetify)
    .mount('#app')
