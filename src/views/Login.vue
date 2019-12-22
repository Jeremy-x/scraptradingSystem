<template>
    <div class="login-wrap">
        <div class="ms-title">废品交易后台管理系统</div>
        <el-form :model="formInline" class="demo-form-inline">
            <el-form-item label="">
                <el-input v-model="formInline.userName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="formInline.userPsw" show-password placeholder="用户密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitLogin" v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
            </el-form-item>
        </el-form>
        <!-- <button @click="submitLogin" v-loading.fullscreen.lock="fullscreenLoading">登录</button> -->
    </div>    
</template>

<script>
export default {
  data(){
    return{
      fullscreenLoading: false,
      formInline: {
          userName: '',
          userPsw: ''
        }
    }
  },
  methods:{
      submitLogin(){
        // if (!this.userName) {
        //     this.$message({
        //         message: '请输入用户名！',
        //         type: 'warning'
        //         });
        //     return false
        // }
        // if (!this.userName) {
        //     this.$message({
        //         message: '请输入密码！',
        //         type: 'warning'
        //         });
        //     return false
        // }
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.$router.push({path:'/releaseWaste'});
          this.$message('登录成功！');
        }, 2000);
      }
  }
}
</script>

<style lang="less" scoped>
    .login-wrap{
        padding:30px 300px;
        height: 100%;
        // background-image: url(../assets/background.svg);
        margin-top: 70px;
        text-align: center;
        margin-right: 200px;
    }
    .ms-title{
        font-size: 35px;
        line-height: 100px;
        margin-bottom: 30px;
    }
</style>