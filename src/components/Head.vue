<template>
   <el-header style="text-align: right; font-size: 12px">
       <div class="layout-logo"><h2>废品交易系统</h2></div>
        <el-dropdown style="margin-right:25px;cursor: pointer;">
            <i class="el-icon-s-tools"><span style="margin-left:5px">设置</span></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item index="/accountInfo" @click.native="goTo('/accountInfo')">账号信息</el-dropdown-item>
                <el-dropdown-item index="/securitySettings" @click.native="goTo('/securitySettings')">安全设置</el-dropdown-item>
                <el-dropdown-item index="/addAccount" @click.native="goTo('/addAccount')">添加账号</el-dropdown-item>
                <el-dropdown-item>权限管理</el-dropdown-item>
                <el-dropdown-item index="/API" @click.native="goTo('/API')">API网关</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown style="cursor: pointer;">
            <i class="el-icon-user-solid"><span style="margin-left:5px">王小虎</span></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-header> 
</template>
<style scoped>
    .layout-logo{
        float: left;
    }
    .layout-logo h2{
        margin: 0;
    }
</style>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.push(path);
    },
    loginOut() {
      // alert('000');
       this.$router.push("/");
    }
  }
};
</script>