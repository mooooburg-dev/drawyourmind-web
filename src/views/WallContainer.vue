<template>
  <div class="wall-wrapper">
    <div class="wall-cover"></div>
    <div v-if="issues.items.length > 0" class="issues-container">
      
      <div class="mb-3"><img src="/static/img/logo_4.png" class="works-photo-icon"> Now Issues</div>
      <template v-for="(item, item_idx) in issues.items">
        <div v-if="!item.title.includes('Bump')" class="issue-item" :key="item_idx">
          <a :href="item.html_url" target="_blank">{{item.title}} <span style="font-size:11px;">{{$moment(item.updated_at).format('YYYY/MM/DD')}}</span></a>
        </div>
      </template>
    </div>
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

  data(){
    return {
      issues: {},
    }
  },

  mounted(){
    this.getGitHubIssues();
  },

  methods: {
    showCover(){
      $('.wall-cover').addClass('active');

      setTimeout(() => {
        this.$emit('goMenu');
      }, 1000)
    },

    getGitHubIssues(){
      axios.get('https://api.github.com/search/issues?q=user:mooooburg-dev')
      .then(response => {
        // console.log(response)
        this.issues = response.data;
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>