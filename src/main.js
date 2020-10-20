import { createApp } from 'vue';
import { VuelidatePlugin } from '@vuelidate/core';
import router from './router';
import App from './App.vue';
import 'normalize.css';
import '@/styles/index.styl';

const app = createApp(App);
app.config.devtools = true;
app.config.productionTip = false;
app.use(router);
app.use(VuelidatePlugin);
app.mount('#app');
