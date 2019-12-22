<template>
  <div class="home">
    <el-container>
      <el-container>
        <Head></Head>
        <el-container>
          <el-aside width="200px">
            <MenuAside></MenuAside>
          </el-aside>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
        <el-footer style="padding:20px;height:auto" v-show="$route.name!=='Login'">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less">
  .el-header {
    background-color: #65b1ff;
    color: #fff;
    line-height: 60px;
    // position: fixed;
    // top: 0;
    // width: 100%;
    z-index: 999;
  }
  
  .el-aside {
    color: #333;
    margin-bottom: 60px;
  }
  .el-footer {
    width: 100%;
    position: fixed;
    bottom: 0px;
    text-align: center;
    background: #b3bfd0;
    z-index: 999;
  }
  .el-menu{
    height: 100%;
  }
  .el-main{
    min-width: 500px;
    overflow: scroll;
  }
  .el-select{
    width:100%;
  }
  .line{
    text-align: center;
  }
</style>

<script>
import MenuAside from '@/components/MenuAside.vue'
import Head from '@/components/Head.vue'

export default {
    components: {MenuAside,Head},

    data() {
      return {

      }
    },

  mounted () {

    }
  };
</script>