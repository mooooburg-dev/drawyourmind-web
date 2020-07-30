<template>
  <div id="app">
    <profile-menu></profile-menu>
    <div class="bodywrap">
      <div class="router-container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <footer-area></footer-area>
    
  </div>
</template>

<script>
import ProfileMenu from "./views/ProfileMenu.vue"
import FooterArea from "./views/FooterArea.vue"

export default {
  name: "App",

  components: {
    ProfileMenu,
    FooterArea,
  },
}
</script>

<style>
@import url("/static/css/common.css");

#app {
  min-width: 1280px;
  width: 100%;
  height: 100%;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
