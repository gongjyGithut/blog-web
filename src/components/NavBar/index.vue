<template>
    <el-menu :default-active="activeIndex" mode="horizontal" router class="menu">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/article">文章</el-menu-item>
        <el-menu-item index="/file">归档</el-menu-item>
        <el-menu-item index="/message">留言</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    computed: {
    },
    data() {
        return {
            // activeIndex:'article'
            activeIndex:this.$route.path
        }
    },
}
</script>

<style lang="scss">
.menu{

    
}
</style>