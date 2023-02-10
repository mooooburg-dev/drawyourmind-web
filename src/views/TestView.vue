<template>
  <div>
<<<<<<< HEAD
    <embed
=======
    <vue-markdown :source="conetent" />
    <!-- <embed
>>>>>>> master
      src="https://www.notion.so/Test-d1e54f1c02e34ed9b8b2014f3cadc929"
      border="0"
    />

    <iframe
      width="100%"
      height="150"
      src="https://www.notion.so/Test-d1e54f1c02e34ed9b8b2014f3cadc929"
      frameborder="0"
      allowtransparency
      allowfullscreen
      sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
<<<<<<< HEAD
    ></iframe>
=======
    ></iframe> -->
>>>>>>> master
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import workContent from '../md/hsmoa-backoffice.md'

export default {
  name: 'test',
  data() {
    return {
      conetent: workContent,
    }
  },
  components: {
    VueMarkdown,
  },
}
</script>

<style></style>
