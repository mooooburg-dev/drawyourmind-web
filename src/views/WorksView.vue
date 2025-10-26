<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>

    <div class="content-container">
      <div class="mb-3" style="width: 840px; position: relative">
        <div class="works-page-text">
          work no
          <span style="font-weight: bold; color: #3ab67f">{{ pageNum }}</span>
          of {{ arrPathName.length }} /
          <a href="#" @click.prevent="clickCallback(arrPathName.length)"
            >view all project</a
          >
        </div>
        <span @click="arrowClick('prev')" class="works-arrow-btn">
          <b-icon
            icon="arrow-left-circle-fill"
            font-scale="2"
            class="works-arrow"
          ></b-icon>
          Prev
        </span>
        <span
          @click="arrowClick('next')"
          class="works-arrow-btn"
          style="float: right"
        >
          Next
          <b-icon
            icon="arrow-right-circle-fill"
            font-scale="2"
            class="works-arrow"
          ></b-icon>
        </span>
      </div>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>

    <nav aria-label="Page navigation example">
      <paginate
        v-model="pageNum"
        :page-count="arrPathName.length"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :container-class="'pagination justify-content-center'"
        :prev-class="'page-item'"
        :page-class="'page-item'"
        :next-class="'page-item'"
        :prev-link-class="'page-link'"
        :page-link-class="'page-link'"
        :next-link-class="'page-link'"
      ></paginate>
    </nav>
  </div>
</template>

<script>
import paginate from 'vuejs-paginate'
import worksConfig from '../content/works-config.json'

export default {
  components: {
    paginate,
  },
  data() {
    return {
      // works 데이터 - 설정 파일에서 자동 로드
      arrPathName: worksConfig.projects
        .filter((p) => p.active)
        .sort((a, b) => a.order - b.order)
        .map((p) => p.id),

      pageNum: 1,
    }
  },

  watch: {
    $route: {
      handler() {
        if (this.$route.path.toLowerCase() === '/works') {
          this.$router.push(
            this.$route.path + '/' + this.arrPathName[this.pageNum - 1]
          )
        } else if (this.$route.path.toLowerCase() === '/works/') {
          this.$router.push(
            this.$route.path + this.arrPathName[this.pageNum - 1]
          )
        } else {
          for (const idx in this.arrPathName) {
            if (this.arrPathName[idx] === this.$route.meta.name) {
              this.pageNum = Number(idx) + 1
            }
          }
        }
      },
      immediate: true,
    },
  },

  mounted() {},

  methods: {
    clickCallback: function (pageNum) {
      this.pageNum = pageNum
      this.$router.push(`/works/${this.arrPathName[this.pageNum - 1]}`)
    },

    arrowClick(arrow) {
      if (arrow == 'prev') {
        if (this.pageNum > 1) {
          this.pageNum--
          this.clickCallback(this.pageNum)
        }
      } else {
        if (this.arrPathName.length > this.pageNum) {
          this.pageNum++
          this.clickCallback(this.pageNum)
        }
      }
    },
  },
}
</script>

<style></style>
