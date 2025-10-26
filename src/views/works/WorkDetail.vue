<template>
  <div>
    <div v-if="loading" class="text-center mt-5">
      <p>Loading...</p>
    </div>
    <div v-else-if="error" class="text-center mt-5">
      <p>{{ error }}</p>
    </div>
    <div v-else class="work-item-container">
      <div class="work-item-img">
        <img :src="frontMatter.mainImage" />
      </div>
      <div class="work-item mt-4">
        <span class="work-text oxtail">{{ frontMatter.title }}</span
        ><br /><br />
        <span v-if="frontMatter.duration"
          >duration : {{ frontMatter.duration }}</span
        ><br v-if="frontMatter.duration" />
        <span v-if="frontMatter.advertiser"
          >Advertiser : {{ frontMatter.advertiser }}</span
        ><br v-if="frontMatter.advertiser" />
        <span v-if="frontMatter.member">Member : {{ frontMatter.member }}</span
        ><br v-if="frontMatter.member" />
        <span v-if="frontMatter.team">{{ frontMatter.team }}</span
        ><br v-if="frontMatter.team" />
        <span v-if="frontMatter.role">Role : {{ frontMatter.role }}</span
        ><br v-if="frontMatter.role" />
        <span v-if="frontMatter.skills"
          >Skill: {{ frontMatter.skills }}</span
        ><br v-if="frontMatter.skills" />
        <span v-if="frontMatter.github"
          ><a :href="frontMatter.github" target="_blank">{{
            frontMatter.github
          }}</a></span
        ><br v-if="frontMatter.github" />
        <span v-if="frontMatter.website"
          ><a :href="frontMatter.website" target="_blank"
            >VUAL 공식 홈페이지</a
          ></span
        ><br v-if="frontMatter.website" />
        <span v-if="frontMatter.facebook"
          ><a :href="frontMatter.facebook" target="_blank"
            >VUAL 페이스북 페이지</a
          ></span
        ><br v-if="frontMatter.facebook" />
        <span v-if="frontMatter.photos"
          ><img src="/static/img/logo_7.png" class="works-photo-icon" /><a
            :href="frontMatter.photos"
            target="_blank"
            >프로젝트 스케치</a
          ></span
        >

        <div v-html="markdownContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
import matter from 'gray-matter'

export default {
  data() {
    return {
      frontMatter: {},
      markdownContent: '',
      loading: true,
      error: null,
    }
  },

  async mounted() {
    await this.loadMarkdown()
    // 컴포넌트 마운트 시 스크롤을 최상단으로 이동
    this.$nextTick(() => {
      window.scrollTo(0, 0)
    })
  },

  watch: {
    '$route.meta.name': {
      async handler() {
        await this.loadMarkdown()
        // 페이지 이동 시 스크롤을 최상단으로 이동
        this.$nextTick(() => {
          window.scrollTo(0, 0)
        })
      },
    },
  },

  methods: {
    async loadMarkdown() {
      this.loading = true
      this.error = null

      try {
        const projectId = this.$route.meta.name || 'hsmoabo'

        // Markdown 파일을 동적으로 import
        const markdown = await import(
          /* webpackMode: "lazy-once" */ `!!raw-loader!../../content/works/${projectId}.md`
        ).then((m) => m.default)

        // gray-matter로 front matter 파싱
        const { data, content } = matter(markdown)

        this.frontMatter = data
        this.markdownContent = content
      } catch (err) {
        console.error('Error loading markdown:', err)
        this.error = `프로젝트를 로드할 수 없습니다: ${err.message}`
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.works-photo-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
