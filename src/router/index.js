import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: () => import('../components/Search.vue')
    },
    {
      path: '/answer/:id',
      name: 'answer',
      props: true,
      component: () => import('../components/Answer.vue')
    },
    {
      path: '/AnswerCheck',
      name: 'AnswerCheck',
      component: () => import('../views/AnswerCheck.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/Add.vue')
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: () => import('../views/Statistic.vue')
    },
    {
      path: '/backCheck',
      name: 'backCheck',
      component: () => import('../views/BackCheck.vue')
    },
    {
      path: '/BackQue',
      name: 'BackQue',
      component: () => import('../components/BackQue.vue')
    },
    {
      path: '/BackAns',
      name: 'BackAns',
      component: () => import('../views/BackAns.vue')
    },
    {
      path: '/BackQueEdit',
      name: 'BackQueEdit',
      component: () => import('../views/BackQueEdit.vue')
    },

  ]
})

export default router
