<template>
    <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="发布时间">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="开始时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2"> -</el-col>
            <el-col :span="11">
            <el-date-picker type="date" placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="订单编号">
            <el-input v-model="form.number"></el-input>
        </el-form-item>
         <el-form-item label="接受企业名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button>搜索</el-button>
            <!-- <el-button @click="dialogFormVisible = true">确定接受</el-button> -->
        </el-form-item>
        
        <div style="margin-top:50px">
            <sendData></sendData>
        </div>
    </el-form>
</template>

<script>
    import sendData from '../views/data/sendData.vue'

  export default {
    components: {sendData},

    data() {
      return {
        form: {
          date1: '',
          date2: '',
          number: '',
          type: '',
          name:''
        },
        dialogTableVisible: false,
        dialogFormVisible: false,
        form2: {
          name: '',
          number: '',
        },
        formLabelWidth: '120px'
      };
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