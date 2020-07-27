<template>
  <div class="profile-menu-continer">
    <div class="profile mt-5 ml-5">
      <div class="avatar" @click.prevent="homeClickHandler"><img src="/static/img/avatar.png" /><br /></div>
      <div class="profile-text-1 mt-4">
        <span id="job" class="oxtail">Web Developer</span><br />
        <span id="name" class="oxtail">Jeongmu Park</span><br />
      </div>
      <div class="profile-text-2 mt-4">
        <span>MEDIT corp. / Seoul, South Korea</span><br />
        <span>jeongmupark@gmail.com</span><br />
        <span>+82 10 3806 7021</span><br /><br />
        <span><a href="http://github.com/mooooburg-dev" target="_blank">@Github</a></span><br />
        <span><a href="https://www.linkedin.com/in/jeongmu-park-7b064b27/" target="_blank">@Linkedin</a></span><br />
      </div>
      <div class="mt-4">
        <img src="/static/img/web_icons.png" />
      </div>
      <div class="menus mt-5">
        <div v-for="(item, item_idx) in menus" :key="item_idx" @click="menuClickHandler(item)">
          <span :class="`oxtail menu-text menu-item ${item.name && $route.name && $route.path.includes(item.name.toLowerCase()) ? 'active' : 'unActive'}`">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "Career",
          path: "/career",
        },
        {
          name: "Works",
          path: "/works",
        },
        {
          name: "Ordinary",
          path: "/ordinary",
        },
        {
          name: "Blog",
          path: "http://mooooburg-dev.github.io",
        },
        {
          name: "Comments",
          path: "/comments",
        },
      ],
    }
  },

  watch: {
    sIdx: function() {},
  },

  mounted() {},

  methods: {
    homeClickHandler() {
      this.$router.push({ path: "/" }).catch((err) => err)
    },

    menuClickHandler(menu) {
      if (this.$route.name !== menu.name.toLowerCase()) {
        if (menu.path.includes("http://")) {
          window.open(menu.path)
        } else {
          this.$router.push({ path: menu.path }).catch((err) => err)
        }
      }
    },
  },
}
</script>

<style></style>
