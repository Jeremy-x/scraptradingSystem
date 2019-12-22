<template>
    <div>
    <el-table
        border
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
        label="提交时间">
        <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
        prop="type"
        label="类型" class-name="type">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名/企业名称">
        </el-table-column>
        <el-table-column
        prop="status"
        label="审核状态">
        </el-table-column>
        <el-table-column
        prop="operation"
        label="操作"
        show-overflow-tooltip>
        <template>
            <el-button type="text" size="small" @click="persionCertificationVisible = true">审核</el-button>
            <el-button type="text" size="small" @click="persionCertificationVisible = true">详情</el-button>
        </template>
        </el-table-column>
    </el-table>  

    <template>
        <div>
        <el-pagination
        small
        layout="prev, pager, next"
        :total="50"
        style="text-align:right;padding-top:10px" /> 
        </div>
    </template>
    
    <template>
      <div>
        <el-dialog title="个人实名认证审核" :visible.sync="persionCertificationVisible">
          <table v-for="(item, index) in gridData" :key="index" style="width:100%">
            <tr>
              <th>姓名：</th>
              <td>{{item.name}}</td>
            </tr>
            <tr>
              <th>身份证号：</th>
              <td>{{item.persionID}}</td>
            </tr>
          </table>
        <template>
            <el-upload
                class="upload-demo"
                style="text-align: center;"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">请上传身份证正面照</div>
                <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
            <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">请上传身份证反面照</div>
                <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
            <el-upload
                class="upload-demo"
                drag
                style="padding-bottom: 40px;border-bottom: 1px solid #c1c1c1;"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">请上传手持身份证照片</div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </template>
        <template>
            <p><strong>拒绝原因：</strong></p>
            <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容（不超过500字）"
            maxlength="50"
            v-model="textarea">
            </el-input>
        </template> 
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="persionCertificationVisible = false">同 意</el-button>
            <el-button type="danger" @click="persionCertificationVisible = false">拒 绝</el-button>
            <el-button type="success" @click="persionCertificationVisible = false">关 闭</el-button>
          </div>
        </el-dialog>
      </div>        
    </template>
  </div>
</template>
<style scoped>
tr{
  line-height: 28px;
  border:1px
}
th{
  width: 120px;
  text-align:right
}
td{
  margin-left:30px
}
.upload-demo{
    text-align: center;
    margin-bottom: 20px
}
</style>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          type:'企业',
          name: '上海化工',
          status:'待审核'
        },
        {
          date: '2016-05-03',
          type:'个人',
          name: '王小虎',
          status:'通过' 
        }],
        persionCertificationVisible:false,
        multipleSelection: [],
        gridData:[{
          date: '2016-05-03',
          number:'BG3578784535',
          wasteName:'樟木',
          total:'200KG',
          vendorName:'上海林业局',
          vendorType:'企业',
          status:'成功',
          publisher:'陈小虎',
          tel:'15678907658',
          reviewDate:'2016-05-08',
          Verifier:'李丽',
          reviewUnit:'上海审计局',
          reason:''
        }],
        textarea:''
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    //   showDialog(){
    //     this.multipleSelection = val;
    //     console.log(val);
    //       for (var i = 0; i < this.multipleTable.length; i++) {
    //         var halo = this.multipleTable[i];
    //         console.log(halo);
    //         // halo即为选中数组里的值。控制台打印就看得到 拿到了值想如何操作都可以了。
    //         // this.$axios.post().then(res => {
    //         //  
    //         // });
    //       }
    //   }
    }
  }
</script>