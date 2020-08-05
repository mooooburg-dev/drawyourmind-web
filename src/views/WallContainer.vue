<template>
  <div class="wall-wrapper">
    <div class="wall-cover"></div>
    <coding-video></coding-video>
  </div>
</template>

<script>
import axios from "axios"
import CodingVideo from "./wall/CodingVideo.vue"

export default {
  components: {
    CodingVideo,
  },

  mounted(){
    const github = require('octonode')
    
    const 
  },



  methods: {
    showCover(){
      $('.wall-cover').addClass('active');

      setTimeout(() => {
        this.$emit('goMenu');
      }, 1000)
    },
  }
}
</script>

<style>

</style>