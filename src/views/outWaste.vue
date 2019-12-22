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
        <el-form-item label="入库单号">
            <el-input v-model="form.number"></el-input>
        </el-form-item>
         <el-form-item label="供应商名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button>搜索</el-button>
            <el-button @click="dialogTableVisible = true">出库</el-button>
        </el-form-item>
        <div style="margin-top:50px">
            <outData></outData>
        </div>
    </el-form>

    <template>
      <div>
        <el-dialog title="确认出库" :visible.sync="dialogTableVisible">
          <el-table :data="gridData" border>
            <el-table-column property="wasteNumber" label="废品单号"></el-table-column>
            <el-table-column property="wasteName" label="废品名称"></el-table-column>
            <el-table-column property="totals" label="总量"></el-table-column>
            <el-table-column property="balance" label="剩余总量"></el-table-column>
            <el-table-column property="outQTY" label="出库数量">
                <template slot-scope="scope">
                    <el-input placeholder="出库数量" v-model="scope.row.xxx" clearable></el-input>
                </template>
            </el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible = false;dialogFormVisible = true">下一步</el-button>
          </div>
        </el-dialog>
      </div>        
    </template>

    <template>
      <div>
        <el-dialog title="确认出库" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="发送方联系人" :label-width="formLabelWidth">
              <el-input v-model="form.sendName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="发送方联系电话" :label-width="formLabelWidth">
              <el-input v-model="form.sendNumber" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="接收客户名称" :label-width="formLabelWidth">
              <el-input v-model="form.contactsName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="接收方联系人" :label-width="formLabelWidth">
              <el-input v-model="form.contacts" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 认</el-button>
          </div>
        </el-dialog>
      </div>        
    </template>
    </div>
</template>

<script>
    import outData from '../views/data/outData.vue'

  export default {
    components: {outData},

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