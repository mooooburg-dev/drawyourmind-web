<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>
    <div class="content-container career-list">
      <div v-for="(item, item_idx) in careers" :key="item_idx" class="career-item">
        <span class="career-text oxtail">{{ item.name }}</span>
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

  getList() {},

  register() {},
}
</script>

<style></style>
