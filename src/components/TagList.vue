<template>
  <!-- tags -->
  <el-col class="tag" :span="6">
    <div class="tag-title">Popular Tags</div>
    <div class="tag-list">
      <el-tag class="tag-item" v-for="n in 100">test{{n}}</el-tag>

    </div>
  </el-col>
</template>

<script>
  export default {
    name: "TagList"
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
</style>