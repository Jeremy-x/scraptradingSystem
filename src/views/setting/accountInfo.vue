<template>
    <!-- <div>
        <table id="infoTable">
            <tr>
                <th>账号：</th>
                <td>15923492842</td>
            </tr>
            <tr>
                <th>认证状态：</th>
                <td>已认证 <el-button size="mini" style="margin-left:10px">查看详情</el-button></td>
            </tr>
            <tr>
                <th>所属类型：</th>
                <td>供应商</td>
            </tr>
        </table>
    </div> -->
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="account"
        label="账号">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
        <!-- {{ tableData.state }}
            <el-button
            type="text"
            size="small">
            查看
            </el-button> -->
      </el-table-column>
      <el-table-column
        prop="type"
        label="所属类型">
      </el-table-column>
    </el-table>
</template>

<style scoped>
    #infoTable{
        width:100%;
    }
    #infoTable th{
        width:200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bolder;
        line-height: 40px;
    }
</style>

<script>
    export default {
      data() {
        return {
          tableData: [{
            account: '195679807654',
            type: '供应商',
            state:'已认证'
          }]
        }
      }
    }
  </script>