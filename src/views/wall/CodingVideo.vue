<template>
  <div class="wall-content">
    <video autoplay muted id="myVideo">
      <source :src="getRandomVideoUrl()" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoNum: 4,
      videoPath: '/static/video/',
    }
  },

  mounted() {
    const video = document.querySelector('#myVideo')
    const source = video.querySelector('source')
    const self = this
    video.onended = function() {
      video.pause()
      source.setAttribute('src', self.getRandomVideoUrl())
      video.load()
      video.play()
    }
  },

  methods: {
    getRandomVideoUrl() {
      const randomIdx = Math.ceil(Math.random() * this.videoNum - 1)
      const videoPath = `${this.videoPath}video_${randomIdx}.mp4`
      return videoPath
    },
  },
}
</script>

<style scoped>
.wall-content {
  width: 100%;
  height: 100%;
}

#myVideo {
  opacity: 0.4;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
