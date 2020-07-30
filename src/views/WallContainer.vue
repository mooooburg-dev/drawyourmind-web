<template>
  <div class="wall-wrapper">
    <div class="wall-cover"></div>
    <coding-video></coding-video>
  </div>
</template>

<script>
import CodingVideo from "./wall/CodingVideo.vue"
export default {
  components: {
    CodingVideo,
  },

  methods: {
    showCover(){
      $('.wall-cover').addClass('active');

      setTimeout(() => {
        this.$emit('goMenu');
      }, 800)
    }
  }
}
</script>

<style>

</style>