<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-08 12:41:51
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-09 23:48:40
-->
<!-- 底部导航栏 -->
<template>
  <van-tabbar v-model="active" active-color="#ff7675" route>
    <van-tabbar-item icon="home-o" replace to="/home/main">首页</van-tabbar-item>
    <van-tabbar-item replace to="/home/movie">
      <span>电影</span>
      <template #icon="props">
        <img :src="require(`../../../public/img/icon/${props.active?icons.active:icons.inactive}`)" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" replace to="/mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      active: 0,
      icons: {
        active: 'movieselected.png',
        inactive: 'movie.png',
      }
    }
  },
}

</script>
<style scoped>
</style>