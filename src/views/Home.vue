<template>
  <div class="home">
    <div class="banner">
      <div class="content">
        <div class="banner-title">conduit</div>
        <div class="banner-subtitle">A place to show your knowledge.</div>
      </div>
    </div>

    <div class="content">
      <el-row class="main">
        <ArticleList :articleList="articleList"></ArticleList>
        <TagList :tagList="tagList"></TagList>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ApiService from "@/common/api.service";
  import { TagsService, ArticlesService } from "@/common/api.service";

  // 引入组件
  import ArticleList from "@/components/ArticleList";
  import TagList from "@/components/TagList";

  export default {
    name: 'Home',
    data() {
      return {
        tagList: [],
        articleList: []
      }
    },
    components: {
      ArticleList,
      TagList
    },
    methods: {
      getTags() {
        TagsService.get().then(data => {
          this.tagList = data.data.tags;
        })
      },
      getArticles() {
        ArticlesService.query().then(data => {
          console.log('data', data.data)
          this.articleList = data.data.articles;
        })
      }
    },
    mounted() {
      this.getTags();
      this.getArticles();
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    position: relative;
  }
  .banner {
    height: 170px;
    background: #5CB85C;
    box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
    min-width: 1110px;
  }

  .banner-title {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    font-weight: 700;
    text-align: center;
    font-size: 50px;
  }

  .banner-subtitle {
    font-weight: 100;
    font-size: 20px;
  }

  .main {
    margin-top: 24px;
  }

</style>
