<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 23:45:57
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-09 23:47:19
-->
<!-- 主页中的电影界面 -->
<template>
  <div>
    <van-tabs v-model="movieActived">
      <van-tab title="热映">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"></van-list>
      </van-tab>
      <van-tab title="影院">内容 2</van-tab>
      <van-tab title="即将上映">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'HomeMovie',
  data () {
    return {
      movieActived: 0,
      loading: false,
      finished: true,
    }
  },
  methods: {
    onLoad () {
    }
  },
}

</script>
<style scoped>
</style>