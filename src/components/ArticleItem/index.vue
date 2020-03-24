<template>
    <div>
        <ul class="article-list" >
            <li class="article-item" v-for="i in 10" :key="i">
                <h4 class="title">标题{{i}}</h4>
                <p class="abstract">简介{{i}}</p>
                <div class="meta">
                    <span>查看</span>
                    <span>评论</span>
                    <span>赞</span>
                    <span>时间</span>
                </div>
                <el-image :src="imgUrl" class="article-img"></el-image>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:'ArticleItem',
    data() {
      return {
        imgUrl:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    },
}
</script>

<style lang="scss" scoped>
.article-list{
    margin: 0;
    padding: 0;
    list-style: none;
    width: 80%;
    margin: 0 auto;
}
.article-item{
    line-height: 20px;
    position: relative;
    padding: 15px 0;
    padding-right: 150px;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    cursor: pointer;
    .title{
      color: #333;
      margin: 7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }
    .title:hover{
      color: #1890ff;
    }
    .abstract{
      min-height: 30px;
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #555;
    }
    .meta{
      padding-right: 0!important;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      span{
        margin-right: 10px;
        color: #666;
      }
    }
    .article-img{
      position: absolute;
      top: 50%;
      margin-top: -50px;
      right: 0;
      width: 125px;
      height: 100px;
    }
}
</style>