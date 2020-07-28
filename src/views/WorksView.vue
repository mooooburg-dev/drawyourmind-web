<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // works 데이터
      arrPathName: ["mpp", "hr"],

      workIdx: 1,
    }
  },

  mounted() {
    if (this.$route.path.toLowerCase() == "/works") this.$router.push(this.$route.path + "/" + this.arrPathName[this.workIdx])
  },
}
</script>

<style></style>
