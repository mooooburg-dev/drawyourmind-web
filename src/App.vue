<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App with AWS S3 setting for HomeOS"/> -->
    <view-post></view-post>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ViewPost from './components/ViewPost.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ViewPost
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
