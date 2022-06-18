import { BASE_LAYOUT } from '~/router/constants'

export default {
  path: '/redirect',
  name: 'redirect',
  component: BASE_LAYOUT,
  meta: {
    requiresAuth: true,
    cached: false,
  },
  children: [
    {
      path: ':path(.*)',
      component: () => import('~/pages/redirect/index.vue'),
    },
  ],
}
