<template>
  <div id="app">
    <div class="nav">
      <div class="nav-content">
        <nav-bar/>
      </div>
    </div>

    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components:{NavBar}
}
</script>
<style lang="scss">
body{
  padding: 0;
  margin: 0;
}

.nav{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid #eee;
    background-color: #fff;
  .nav-content{
    width: 1200px;
    margin: 0 auto;
    /deep/.el-menu.el-menu--horizontal{
        border-bottom:none !important;
    }
  }
}
.main{
  margin-top: 61px;
  width: 1200px;
  min-height: calc(100vh - 61px);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  // background-color: #f6f6f6;
}
</style>
