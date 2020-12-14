<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-08 12:41:51
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-10 21:46:53
-->
<!-- 底部导航栏 -->
<template>
  <van-tabbar active-color="#ff7675" :border="showborder" route>
    <van-tabbar-item name="home" icon="home-o" replace to="/home/main">首页</van-tabbar-item>
    <van-tabbar-item name="movie" icon="video-o" replace to="/home/movie">电影</van-tabbar-item>
    <van-tabbar-item name="mine" icon="user-circle-o" replace to="/mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      showborder: false
    }
  },
}

</script>
<style scoped>
</style>