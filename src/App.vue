<template>
  <div id="app">
    <profile-menu></profile-menu>
  </div>
</template>

<script>
import ProfileMenu from "./views/ProfileMenu.vue"

export default {
  name: 'App',
  components: {
    ProfileMenu,
  }
}
</script>

<style>
@import url('/static/css/common.css');
</style>
