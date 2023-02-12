<template>
  <div class="profile-menu-container">
    <div class="profile">
      <div class="avatar-container">
        <div
          v-if="isTweet && isTweet !== '' && $route.path === '/'"
          class="tweet-wrapper"
          @click.prevent="tweetClickHandler(tweet.id)"
        >
          {{ tweet.text }}
        </div>
        <div class="avatar" @click.prevent="homeClickHandler">
          <img src="/static/img/avatar.png" />
          <br />
        </div>
      </div>
      <div class="profile-text-1 mt-4">
        <span id="job" class="oxtail">Front-end Engineer</span>
        <br />
        <span id="name" class="oxtail">Jeongmu Park</span>
        <br />
      </div>
      <div class="profile-text-2 mt-4">
        <span>
          <span class="current-company">BUZZNI</span>
          / Seoul, South Korea
        </span>
        <br />
        <span>jeongmupark@gmail.com</span>
        <br />
        <span>
          <a href="http://github.com/mooooburg-dev" target="_blank">@Github</a>
        </span>
        <br />
        <span>
          <a href="https://twitter.com/jeongmu" target="_blank">@Twitter</a>
        </span>
        <br />
        <span>
          <a href="https://www.linkedin.com/in/jeongmupark" target="_blank">
            @Linkedin
          </a>
        </span>
        <br />
      </div>
      <div class="mt-4">
        <ul class="logos">
          <li class="logo"><img src="/static/img/logo_0.png" /></li>
          <li class="logo"><img src="/static/img/logo_1.png" /></li>
          <li class="logo"><img src="/static/img/logo_2.png" /></li>
          <li class="logo"><img src="/static/img/logo_3.png" /></li>
          <li class="logo"><img src="/static/img/logo_4.png" /></li>
          <li class="logo"><img src="/static/img/logo_5.png" /></li>
        </ul>
      </div>
      <div class="menus mt-4">
        <template v-for="(item, item_idx) in menus">
          <div v-if="item.visible == true" :key="item_idx">
            <span
              :class="`oxtail menu-text menu-item ${
                item.name &&
                $route.name &&
                $route.path.includes(item.name.toLowerCase())
                  ? 'active'
                  : 'unActive'
              }`"
              @click="menuClickHandler(item)"
            >
              {{ item.name }}
            </span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import menus from '../spread/menus'

export default {
  data() {
    return {
      menus,
      baseURL: '',
      tempPath: '',

      tweets: [],
      tweet: '',
      isTweet: false,
    }
  },

  mounted() {
    this.baseURL = process.env.VUE_APP_BASE_URL

    $('.menu-item').on('mouseover', function (e) {
      e.preventDefault()
      $(this).addClass('over')
    })

    $('.menu-item').on('mouseleave', function (e) {
      e.preventDefault()
      $(this).removeClass('over')
    })

    this.getTweet()
  },

  methods: {
    homeClickHandler() {
      this.$router.push({ path: '/' }).catch((err) => err)
      setTimeout(() => {
        this.isTweet = true
      }, 200)
    },

    tweetClickHandler(id) {
      window.open(`https://twitter.com/Jeongmu/status/${id}`)
    },

    async getTweet() {
      const response = await axios.get(this.baseURL + '/tweets')
      this.tweets = response.data.data
      this.tweet = this.tweets[0]
      this.isTweet = true
    },

    menuClickHandler(menu) {
      if (this.$route.path == '/' && menu.path.includes('http') == false) {
        this.$emit('showCover')
        this.tempPath = menu.path
        setTimeout(() => {
          this.isTweet = false
        }, 200)
      } else if (menu.path.includes('http')) {
        window.open(menu.path)
      } else {
        if (this.$route.name !== menu.name.toLowerCase()) {
          if (menu.path.includes('http')) {
            window.open(menu.path)
          } else {
            this.$router.push({ path: menu.path }).catch((err) => err)
          }
        }
      }
    },

    goMenu() {
      if (this.$route.name !== this.tempPath.toLowerCase()) {
        this.$router.push({ path: this.tempPath }).catch((err) => err)
      }
    },
  },
}
</script>

<style></style>
