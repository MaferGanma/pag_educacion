import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('@/pages/AppWrapper'),
    children: [
      {
        path: '/',
        name: 'inicio',
        component: () => import('@/views/InicioView')
      },
      {
        path: '/acerca',
        name: 'acerca',
        component: () => import('@/views/AcercaView')
      },
      {
        path: '/comunicados',
        name: 'comunicados',
        component: () => import('@/views/ComunicadoView')
      },
      {
        path: '/biblioteca',
        name: 'biblioteca',
        component: () => import('@/views/BibliotecaView')
      },
      {
        path: '/tramites',
        name: 'tramites',
        component: () => import('@/views/TramiteView')
      },
      {
        path: '/orientacion',
        name: 'orientacion',
        component: () => import('@/views/psicopedagogica/OrientacionView')
      },
      {
        path: '/apoyo',
        name: 'apoyo',
        component: () => import('@/views/psicopedagogica/ApoyoView')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
