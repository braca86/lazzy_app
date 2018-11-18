<template>
  <nav class="Navigation">
    <div class="Navigation__left">
      <span class="nav-logo">logo</span>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="shots">Shots</el-menu-item>
        <el-menu-item index="analytics">Analytics</el-menu-item>
        <el-menu-item index="settings">Settings</el-menu-item>
      </el-menu>
    </div>
    <div class="Navigation__right">
      <el-button>Upload</el-button>
      <el-button type="primary">Post</el-button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      activeIndex: 'shots'
    }
  },
  methods: {
    handleSelect (key) {
      this.$router.push(key)
    }
  }
}
</script>
