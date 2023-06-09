import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>  import('../views/ContactView.vue')
  },
  {
    path:'/projects',
    name: 'Projects',
    component: () => import('../views/HomeView.vue')
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () =>  import('../views/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.name === 'Projects') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            el: '#projects-wrapper',
            behavior: 'smooth'
          });  
        }, 500)
      })
    }
    return { left: 0, top: 0 };
  }
});

export default router;