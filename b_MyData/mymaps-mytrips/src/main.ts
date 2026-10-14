import { createApp } from 'vue';
import MyTripsApp from './components/MyTripsApp.vue';
import './scss/main.scss';

const app = createApp(MyTripsApp);
app.mount('#app');
