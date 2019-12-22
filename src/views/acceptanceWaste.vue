<template>
    <div>
    <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="出库时间">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="开始时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2"> -</el-col>
            <el-col :span="11">
            <el-date-picker type="date" placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="出库单号">
            <el-input v-model="form.number"></el-input>
        </el-form-item>
         <el-form-item label="核心企业名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button>搜索</el-button>
            <!-- <el-button @click="dialogTableVisible = true">出库</el-button> -->
        </el-form-item>
        <div style="margin-top:50px">
            <acceptanceData></acceptanceData>
        </div>
    </el-form>
    </div>
</template>

<script>
    import acceptanceData from '../views/data/acceptanceData.vue'

  export default {
    components: {acceptanceData},

    data() {
      return {
        form: {
          date1: '',
          date2: '',
          number: '',
          type: '',
          name:''
        },
        gridData:[{
            wasteNumber:'MG3456678',
            wasteName:'钢材',
            totals:'400KG',
            balance:'600KG',
        },
        {
            wasteNumber:'TY789',
            wasteName:'木材',
            totals:'90KG',
            balance:'13400KG',
        }],
        dialogFormVisible: false,
        dialogTableVisible:false,
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