<template>
  <div id="app">
    <mheader></mheader>
    <tab></tab>
    <keep-alive>
    <router-view></router-view></keep-alive>
  </div>
</template>

<script>
import Mheader from './components/m-header/m-header'
import Tab from './components/tab/tab'
export default {
  name: 'App',
  components: {
    Mheader,
    Tab
  }
}
</script>

<style lang="stylus">
@import 'common/stylus/variable';

#app {
  color: $color-theme;
}
</style>
