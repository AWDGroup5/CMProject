import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/main.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueApexCharts);
app.use(ElementPlus)

app.mount('#app')
