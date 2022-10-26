import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

// Import our custom CSS
import './scss/styles.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// define routing views
const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('./views/StartView.vue'),
  },
  {
    path: '/bla',
    name: 'Start',
    component: () => import('./views/ChildrenList.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
createApp(App).use(router).mount('#app');
