<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 18:31:27
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-09 18:41:59
-->
<!-- 自定义滑动栏 -->
<template>
  <ul class="swiper-box">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'BriefSwiper'
}

</script>
<style scoped>
.swiper-box {
  padding: 10px 15px;
  display: -webkit-box;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.swiper-box::-webkit-scrollbar {
  display: none;
}
</style>