<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="废品名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="总量">
            <el-input v-model="form.totals"></el-input>
        </el-form-item>
         <el-form-item label="发布人">
            <el-input v-model="form.release"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
            <el-input v-model="form.contact"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认发布</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          totals: '',
          release: '',
          contact: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message({
            message: '提交成功',
            type: 'success'
            });
        }
    }
  }
</script>