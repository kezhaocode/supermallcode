<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>

  </div>
</template>
<script>
import MainTabbar from "@/components/content/MainTabbar/MainTabbar";

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>


