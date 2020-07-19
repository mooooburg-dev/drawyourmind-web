<template>
  <div class="profile-menu-continer">
    <div class="profile mt-5 ml-5">
      <img src="/static/img/avatar.png"><br/>
      <div class="profile-text-1 mt-4">
        <span id="job" class="oxtail">Web Developer</span><br/>
        <span id="name" class="oxtail">Jeongmu Park</span><br/>
      </div>
      <div class="profile-text-2 mt-3">
        <span>MEDIT corp.</span><br/>
        <span>jeongmupark@gmail.com</span><br/>
        <span><a href="http://github.com/mooooburg-dev" target="_blank">github.com/mooooburg-dev</a></span><br/>
        <span>+82 10 3806 7021</span><br/>
      </div>
      <div class="mt-5">
        <img src="/static/img/web_icons.png">
      </div>
      <div class="menus mt-5">
        <div v-for="(item, item_idx) in menus" :key="item_idx">
          <span class="oxtail menu-text menu-item"><a href="#">{{ item }}</a></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      menus: [
        'CAREER',
        'WORKS',
        'ORDINARY',
        'BLOG',
        'COMMENTS',
      ]
    }
  },

  mounted(){
    console.log($('.menu-item'));
  },

  methods: {
    
  }
}
</script>

<style>

</style>