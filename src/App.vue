<template>
  <div id="app">
    <layout>
      <router-view />
    </layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout/Layout.component'
export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
