import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { router } from './router'
import { i18n } from './plugins/i18n'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(createPinia())
app.use(createHead())

app.mount('#app')
