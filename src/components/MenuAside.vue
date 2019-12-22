<template>
  <el-row class="tac" v-show="$route.name!=='Login'"> 
    <el-col :span="12">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" @click="goTo('/releaseWaste')">
            <i class="el-icon-menu"></i>
            <span slot="title">发布废品</span>
        </el-menu-item>

        <el-menu-item index="2" @click="goTo('/acceptWaste')">      
            <i class="el-icon-location"></i>
            <span slot="title">接受废品</span>
        </el-menu-item>

        <el-menu-item index="3" @click="goTo('/sendWaste')">  
            <i class="el-icon-location"></i>
            <span slot="title">发货</span>
        </el-menu-item>

        <el-menu-item index="4" @click="goTo('/storageWaste')">  
            <i class="el-icon-location"></i>
            <span slot="title">入库废品</span>
        </el-menu-item>

        <el-menu-item index="5" @click="goTo('/outWaste')">  
            <i class="el-icon-location"></i>
            <span slot="title">出库废品</span>
        </el-menu-item>  

        <el-menu-item index="6" @click="goTo('/acceptanceWaste')">  
            <i class="el-icon-location"></i>
            <span slot="title">验收废品</span>
        </el-menu-item>

        <el-submenu index="7">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>查询</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="7-1" @click="goTo('/inquiry')">废品</el-menu-item>
            <el-menu-item index="7-2" @click="goTo('/shipment')">发货</el-menu-item>
            <el-menu-item index="7-3" @click="goTo('/stockIn')">入库单</el-menu-item>
            <el-menu-item index="7-4" @click="goTo('/stockOut')">出库单</el-menu-item>
            <el-menu-item index="7-5" @click="goTo('/receipt')">验收单</el-menu-item>
        </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="8" @click="goTo('/checkWaste')">
            <i class="el-icon-location"></i>
            <span slot="title">审核废品</span>
        </el-menu-item>
        
        <el-menu-item index="9" @click="goTo('/certification')">
            <i class="el-icon-location"></i>
            <span slot="title">实名认证</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

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
    }
  }
};
</script>

<style scoped>
.el-col-12{
  width: 100%;
}
</style>