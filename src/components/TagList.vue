<template>
  <!-- tags -->
  <el-col class="tag" :span="6">
    <div class="tag-title">Popular Tags</div>
    <div class="loading" v-if="tagList.length == 0">
      <i class="el-icon-loading"></i>
    </div>

    <div v-else class="tag-list">
      <el-tag class="tag-item" v-for="item in tagList">{{item}}</el-tag>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: "TagList",
    props: {
      tagList: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tag {
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(238, 238, 238, 0.6);
  }

  .tag-title {
    margin-bottom: 5px;
  }
  .tag-item {
    margin-right: 6px;
    margin-bottom: 3px;
    cursor: default;
    &:hover {
      background-color: #b9ffb6;
    }
  }

  .loading {
    text-align: center;
  }
</style>