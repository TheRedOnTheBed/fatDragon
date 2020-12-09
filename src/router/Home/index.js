/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-08 00:42:59
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-09 23:52:32
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
    }
  ]
} 