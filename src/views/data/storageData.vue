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
        type="selection"
        width="55">
        </el-table-column>
            <el-table-column
        label="发货时间"
        width="200">
        <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
        prop="number"
        label="发货单号"
        width="250">
        <el-button slot-scope="scope" type="text" size="small" round @click="dialogTableVisible = true">{{ scope.row.number }}</el-button>
        </el-table-column>   
        <el-table-column
        prop="type"
        label="供应商类型">
        </el-table-column>
        <el-table-column
        prop="name"
        label="供应商名称">
        </el-table-column>
        <el-table-column
        prop="wasteType"
        label="废品种类">
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
        <el-dialog title="发货单详情" :visible.sync="dialogTableVisible">
          <el-table :data="gridData" border>
            <el-table-column property="name" label="供应商名称"></el-table-column>
            <el-table-column property="acceptName" label="核心企业名称"></el-table-column>
            <el-table-column property="date" label="发货时间"></el-table-column>
            <el-table-column property="number" label="发货单号"></el-table-column>
            <el-table-column property="name2" label="收货人"></el-table-column>
            <el-table-column property="tel" label="收货人联系电话"></el-table-column>
          </el-table>
          <el-table :data="gridData2" style="margin-top:50px" border>
            <el-table-column property="number" label="废品单号"></el-table-column>
            <el-table-column property="name" label="废品名称"></el-table-column>
            <el-table-column property="totals" label="总量"></el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>        
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          number:'SF20191230123456030',
          wasteType: '金属',
          type:'企业',
          name: '唐山钢铁集团'
        },
        {
          date: '2016-05-03',
          number:'SF20195673456030',
          wasteType: '木材',
          type:'个人',
          name: '上海市林业局'
        }],
        multipleSelection: [],
        dialogTableVisible: false,
        gridData: [{
          name:'中国园林',
          acceptName:'绿化企业',
          date: '2016-05-03',
          number: 'SW2345678',
          name2: '钟启超',
          tel:'18679089745'
        }],
        gridData2: [{
          number: 'SW2345678',
          name: '树木',
          totals: '50吨'
        }, 
        {
          number: 'SW2345678',
          name: '树木',
          totals: '50吨'
        }],
        form:[{
          name:'',
          add:''
        }],
        formLabelWidth: '120px'
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
      }
    }
  }
</script>