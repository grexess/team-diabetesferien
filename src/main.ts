import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import {createRouter, createWebHashHistory } from 'vue-router';

// Import our custom CSS
import './scss/styles.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Parse from 'parse/dist/parse.min.js';
Parse.initialize('8PzeU2cmYFKLbLnpHzZAfe');
Parse.serverURL = 'https://test.diabetesferien.de/parse';

// define routing views
const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('./views/StartView.vue'),
  },
  {
    path: '/children',
    name: 'Children',
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

router.beforeEach((to, from, next) => {
  if (to.name !== "Login") {
    if (Parse.User.current() && Parse.User.current().authenticated()) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

createApp(App).use(router).mount('#app');

