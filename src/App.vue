<template>
  <div id="app">
    <profile-menu></profile-menu>
    <div class="router-container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import ProfileMenu from "./views/ProfileMenu.vue"

export default {
  name: "App",
  components: {
    ProfileMenu,
  },
}
</script>

<style>
@import url("/static/css/common.css");

#app {
  min-width: 1280px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
