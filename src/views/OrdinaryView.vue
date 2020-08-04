<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>
    <div class="content-container ordinary-list">
      <div v-for="(item, item_idx) in data" :key="item_idx" class="ordinary-item">
        <span class="ordinary-text oxtail"><a :href="item.url" target="_blank">{{ item.title }}</a></span>
        <span class="ordinary-sm-text oxtail"> at {{ $moment(item.date).format('MMMM YYYY') }}</span>
      </div>
    </div>
    <!-- 
    <div class="wirte-button">
      <b-button size="lg" variant="primary" class="mb-2">
        <b-icon icon="pencil" aria-label="Help"></b-icon>
      </b-button>
    </div>
     -->
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      baseUrl: "",
      data: [],
    }
  },

  mounted() {
    this.baseUrl = process.env.VUE_APP_BASE_URL
    this.getList()
  },

  methods: {
    getList() {
      axios
          .get(this.baseUrl + "/ordinary/list")
          .then((response) => {
            console.log(response)
            this.data = response.data
          })
          .catch((err) => {
            console.log(err)
          })
    },

    register() {},
  }
}
</script>

<style></style>
