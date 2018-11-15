<template>
  <el-container>
    <el-header height="80px">
      <navigation />
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.component'
export default {
  name: 'layout',
  components: {
    Navigation
  }
}
</script>
