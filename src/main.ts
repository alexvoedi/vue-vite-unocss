import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(createHead())

app.mount('#app')
