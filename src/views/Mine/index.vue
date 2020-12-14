<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-08 00:38:17
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-10 21:17:13
-->
<!-- “我的”视图 -->
<template>
  <div id="Home">
    <el-container class="rl-container">
      <el-main>
        <div class="login-img">
          <van-image round width="8rem" height="8rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <el-form
          :model="loginValidateForm"
          ref="loginValidateForm"
          class="demo-dynamic"
          status-icon
        >
          <el-form-item
            prop="email"
            :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ]"
          >
            <label for="username">用户名</label>
            <el-input
              v-model="loginValidateForm.username"
              placeholder="请输入您的邮箱地址"
              @focus="onFocus1"
              @blur="onBlur1"
            ></el-input>
            <span class="spin" :style="styleStr"></span>
          </el-form-item>
          <el-form-item>
            <label for="uwerpwd">密码</label>
            <el-input
              v-model="loginValidateForm.userpwd"
              placeholder="请输入密码"
              type="password"
              @focus="onFocus2"
              @blur="onBlur2"
            ></el-input>
            <span class="spin" :style="styleStr2"></span>
          </el-form-item>
          <el-form-item>
            <el-button round class="submit">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="other-items">
          <p>
            其他登录方式：
            <el-button type="primary" icon="el-icon-mobile-phone" circle></el-button>
          </p>
          <router-link to="/register">
            <p style="color: red">免费注册</p>
          </router-link>
        </div>
      </el-main>
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
  },
  data () {
    return {
      loginValidateForm: {
        username: "",
        userpwd: "",
      },
      styleStr: "width:0",
      styleStr2: "width:0",
    }
  },
  methods: {
    onFocus1 () {
      this.styleStr = "width:100%"
    },
    onBlur1 () {
      this.styleStr = "width:0"
    },
    onFocus2 () {
      this.styleStr2 = "width:100%"
    },
    onBlur2 () {
      this.styleStr2 = "width:0"
    },
  },
}

</script>
<style scoped>
@import '../../../public/css/container.css';
@import '../../../public/css/loginregister.css';
</style>