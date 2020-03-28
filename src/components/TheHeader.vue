<template>
  <div class="header">
    <el-row class="content header-wrapper" type="flex" align="middle" justify="space-between">
      <el-col class="logo" :span="4">conduit</el-col>
      <el-col class="links" :span="20">
        <div class="links-item links-home">Home</div>
        <div class="links-item links-common">Sign in</div>
        <div class="links-item links-common">Sign up</div>
        <div class="links-item links-common"><i class="el-icon-edit-outline"></i>new Article</div>
        <div class="links-item links-common"><i class="el-icon-setting"></i>Settings</div>
        <div class="links-item links-common"><i class="el-icon-user"></i>username</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TheHeader"
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 56px;
    box-shadow: 0 0 6px #ddd, 0 0 2px #eee,  0 0 1px #ddd;
    user-select: none;
    min-width: 1110px;
  }

  .header-wrapper {
    height: 100%;
  }

  .logo {
    color: #5CB85C;
    font-size: 24px;
    font-weight: bold;
  }

  .links {
    display: flex;
    justify-content: flex-end;
  }

  .links-item {
    margin-left: 16px;
    font-size: 14px;
    cursor: default;
  }

  .links-common {
    color: rgba(0, 0, 0, 0.3);

    &:hover {
      color: rgba(0, 0, 0, 0.6);
    }
  }
</style>