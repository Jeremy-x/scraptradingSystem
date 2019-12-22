<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="设置密码">
            <el-input v-model="form.psw"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input v-model="form.psw2"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="float: right;" @click="open" v-loading.fullscreen.lock="fullscreenLoading">确认</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
        fullscreenLoading: false,
        form:{
            psw:'',
            psw2:''
        }
      }
    },
    methods: {
      open() {
          this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.$message({
            message: '密码修改成功！',
            type: 'success'
            });
        }, 2000);
      }
    }
  }
</script>
