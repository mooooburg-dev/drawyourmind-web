<template>
  <div class="profile-menu-continer">
    <div class="profile mt-5 ml-5">
      <div class="avatar" @click.prevent="homeClickHandler">
        <img src="/static/img/avatar.png"><br/>
      </div>
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
        <div v-for="(item, item_idx) in menus" :key="item_idx" @click="menuClickHandler(item)">
          <span :class="`oxtail menu-text menu-item ${item.active ? 'active' : 'unActive'}`">{{ item.name }}</span>
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
        {
          name: 'CAREER',
          path: '/career',
          active: false,
        },
        {
          name: 'WORKS',
          path: '/works',
          active: false,
        },
        {
          name: 'ORDINARY',
          path: '/ordinary',
          active: false,
        },
        {
          name: 'BLOG',
          path: '/blog',
          active: false,
        },
        {
          name: 'COMMENTS',
          path: '/comments',
          active: false,
        },
      ],

      sIdx: -1,
    }
  },

  watch: {
    sIdx : function(){

    }
  },

  mounted(){
  },

  methods: {
    homeClickHandler(){
      this.$router.push({path:'/'}).catch(err => err);
    },

    menuClickHandler(menu){
      this.menus.forEach(menu => menu.active = false);
      menu.active = true;
      this.$router.push({path:menu.path}).catch(err => err);
    }
  }
}
</script>

<style>

</style>