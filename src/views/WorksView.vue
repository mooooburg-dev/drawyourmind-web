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

  watch: {
    '$route.path': {
      handler(){
        console.log('????');
        if(this.$route.path == '/works'){
          console.log('11');
          this.$router.push(this.$route.path + '/' + this.arrPathName[0])
        }
      }
    }
  },

  mounted(){
    // console.log(this.$route.name);
    if(this.$route.path.toLowerCase() == '/works') this.$router.push(this.$route.path + '/' + this.arrPathName[0])
  }
}
</script>

<style>

</style>