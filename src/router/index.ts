// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
        {
            path: '',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: 'portfolio',
            name: 'Portfolio',
            component: () => import('@/views/Portfolio.vue'),
        },
        {
            path: 'resume',
            name: 'Resume',
            component: () => import('@/views/Resume.vue'),
        },
        {
            path: 'skills',
            name: 'Skills',
            component: () => import('@/views/Skills.vue'),
        },
        {
            path: 'contact',
            name: 'Contact',
            component: () => import('@/views/Contact.vue'),
        },
        {   
            path: "/:pathMatch(.*)*", 
            name: 'PageNotFound',
            component: () => import('@/views/PageNotFound.vue'), 
        }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
