<template>
    <div>
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
        <el-form-item label="发货单号">
            <el-input v-model="form.number"></el-input>
        </el-form-item>
         <el-form-item label="供应商类型">
            <el-select v-model="form.type" placeholder="请选择供应商类型">
            <el-option label="企业" value="qiye"></el-option>
            <el-option label="个人" value="geren"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="供应商名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button>搜索</el-button>
            <el-button @click="dialogFormVisible = true">入库</el-button>
        </el-form-item>
        <div style="margin-top:50px">
            <storageData></storageData>
        </div>
    </el-form>
    <template>
      <div>
        <el-dialog title="确认入库" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="仓库名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="仓库地址" :label-width="formLabelWidth">
              <el-input v-model="form.add" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="仓库联系人" :label-width="formLabelWidth">
              <el-input v-model="form.contacts" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="仓库连联系电话" :label-width="formLabelWidth">
              <el-input v-model="form.number" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>        
    </template>
    </div>
</template>

<script>
    import storageData from '../views/data/storageData.vue'

  export default {
    components: {storageData},

    data() {
      return {
        form: {
          date1: '',
          date2: '',
          number: '',
          type: '',
          name:''
        },
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