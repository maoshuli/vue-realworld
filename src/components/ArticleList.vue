<template>
  <!-- 文章列表 -->
  <el-col class="feet" :span="18">
    <div class="feet-title">
      <div class="feet-title-item active">Your Feed</div>
      <div class="feet-title-item">Global Feed</div>
      <div class="feet-title-item"><i class="el-icon-cpu"></i> test</div>
    </div>
    <div class="article">
      <div v-for="item in articleList" class="article-item">
        <!-- 用户信息 -->
        <div class="item-user">
          <div class="item-info">
            <a class="info-img" href="javascript:void(0)">
              <img class="info-img-pic" :src="item.author.image" alt="">
            </a>

            <div class="info-right">
              <a href="javascript:void(0);" class="info-name">{{item.author.username}}</a>
              <div class="info-date">{{item.createdAt}}</div>
            </div>
          </div>
          <div class="item-likes">likes {{item.favoritesCount}}</div>
        </div>

        <!-- 文章信息 -->
        <a href="javascript:void(0);" class="item-main">
          <div class="item-title">{{item.body}}</div>
          <div class="item-subtitle">{{item.description}}</div>
          <div class="item-more">阅读更多...</div>
        </a>

        <!-- 所属标签 -->
        <div v-if="item.tagList.length > 0" class="tags">
          <a href="javascript:void(1);" v-for="tag in item.tagList" class="tag-item">{{tag}}</a>
        </div>


      </div>
    </div>

    <!-- 分页 -->
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>

  </el-col>
</template>

<script>
  export default {
    name: "ArticleList",
    props: {
      articleList: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feet {
    padding-right: 30px;
    box-sizing: border-box;
  }
  .feet-title {
    display: flex;
  }
  .feet-title-item {
    margin-right: 24px;
    padding-bottom: 10px;
    padding-top: 10px;
    cursor: pointer;

    &.active {
      color: #42b983;
      border-bottom: 1px solid #42b983;
    }
  }

  .article {

  }

  .article-item {
    position: relative;
    height: 136px;
    padding: 24px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .item-user {
    display: flex;
    height: 32px;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: flex-start;
  }

  .item-info {
    display: flex;
    align-items: center;
  }

  .info-img {
    position: relative;
    display: block;
    width: 32px;
    height: 32px;
    background-color: #eee;
    border-radius: 50%;
    overflow: hidden;
  }

  .info-img-pic {
    display: block;
    width: 100%;
    height: 100%;
  }

  .info-right {
    line-height: 1;
    margin-left: 4px;
  }

  .info-name {
    display: block;
    text-decoration: none;
    color: #5CB85C;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .info-date {
    font-size: 12px;
  }

  .item-likes {
    color: #42b983;
    border: 1px solid #42b983;
    box-sizing: border-box;
    padding: 4px 6px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
    line-height: 1;
    height: auto;
    &:hover {
      background-color: rgba(66, 185, 131, 0.18);
    }
  }


  .item-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
    color: inherit;
  }

  .item-title {
    font-size: 24px;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .item-subtitle {
    font-size: 16px;
    color: #999;
    margin-bottom: 14px;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


  .item-more {
    font-size: 12px;
    color: #bbb;
    cursor: pointer;
  }

  .tags {
    position: absolute;
    right: 0;
    bottom: 24px;
    color: #aaa;
    display: flex;
  }

  .tag-item {
    display: block;
    font-size: 12px;
    border: 1px solid #eee;
    height: 16px;
    line-height: 16px;
    padding: 0 3px;
    border-radius: 3px;
    margin-left: 7px;
    color: inherit;
    text-decoration: none;
    &:first-child {
      margin-left: 0;
    }
  }
</style>