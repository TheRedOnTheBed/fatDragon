/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-08 00:42:59
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-10 11:58:18
 */
export default {
  path: '/home',
  component: () => import('@/views/Home'),
  children: [
    {
      path: 'main',
      component: () => import('@/components/HomeMain'),
    },
    {
      path: 'movie',
      component: () => import('@/components/HomeMovie'),
    },
    {
      path: '/home',
      redirect: '/home/main'
    }
  ]
} 