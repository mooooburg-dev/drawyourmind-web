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
    this.getTweet();
  },

  methods: {
    showCover(){
      $('.wall-cover').addClass('active');

      setTimeout(() => {
        this.$emit('goMenu');
      }, 1000)
    },

    getTweet(){
      // axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2').
      // then(response => {
      //   console.log(response);
      // }).
      // catch(err => {
      //   console.log(err);
      // })
    },
  }
}
</script>

<style>

</style>