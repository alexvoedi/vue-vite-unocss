import routes from "./routes";

import i18n from "./plugins/i18n";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

import "@unocss/reset/tailwind.css";
import "uno.css";

import "@iconify/iconify";
import "@purge-icons/generated";

app.use(routes);
app.use(pinia);
app.use(head);
app.use(i18n);

app.mount("#app");
