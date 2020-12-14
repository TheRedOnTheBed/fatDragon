<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-10 19:03:58
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-10 21:39:28
-->
<!--  -->
<template>
  <div id="Home">
    <el-container class="rl-container">
      <div class="register-title">
        <h1>邮箱注册</h1>
        <p>欢迎加入肥龙影院!</p>
      </div>
      <el-main>
        <el-form
          :model="registerValidateForm"
          ref="registerValidateForm"
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
            <label for="email">邮箱</label>
            <el-input
              v-model="registerValidateForm.email"
              placeholder="请输入您的邮箱地址"
              @focus="onFocus1"
              @blur="onBlur1"
            ></el-input>
            <span class="spin" :style="styleStr"></span>
          </el-form-item>
          <el-form-item>
            <label for="verifyCode">验证码</label>
            <el-input
              v-model="registerValidateForm.verifyCode"
              placeholder="请输入验证码"
              @focus="onFocus2"
              @blur="onBlur2"
            ></el-input>
            <el-button type="text" class="get-code" size="medium">获取验证码</el-button>
            <span class="spin" :style="styleStr2"></span>
          </el-form-item>
          <el-form-item>
            <el-button round class="submit">同意并注册</el-button>
          </el-form-item>
        </el-form>
        <p style="color: #ddd; font-size: 14px; margin-left: 25px">已阅读并同意以下协议</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      registerValidateForm: {
        email: "",
        verifyCode: "",
      },
      styleStr: "width:0",
      styleStr2: "width:0",
    }
  },
  methods: {
    onLoad () { },
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