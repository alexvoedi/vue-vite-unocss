import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { router } from './router'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(createHead())

app.mount('#app')
