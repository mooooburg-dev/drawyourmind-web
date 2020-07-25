<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{$route.name}}</span>
    </div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arrPathName: [
        'mpp',
      ]
    }
  },

  mounted(){
    // console.log(this.$route.name);
    this.$router.push(this.$route.path + '/' + this.arrPathName[0])
  }
}
</script>

<style>

</style>