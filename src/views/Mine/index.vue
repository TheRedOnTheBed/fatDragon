<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-08 00:38:17
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-09 17:34:29
-->
<!-- “我的”视图 -->
<template>
  <div id="Home">
    <el-container>
      <el-main>mine</el-main>
      <el-footer>
        <FooterMenu></FooterMenu>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import FooterMenu from '@/components/Footer'
export default {
  name: 'Mine',
  components: {
    FooterMenu
  }
}

</script>
<style scoped>
@import '../../../public/css/container.css';
</style>