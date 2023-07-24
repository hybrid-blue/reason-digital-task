import './styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPrismic } from "@prismicio/vue";

import App from './App.vue'
import router from './router'

const prismic = createPrismic({
    endpoint: "reason-digital-task",
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(prismic).mount('#app')
