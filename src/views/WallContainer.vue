<template>
  <div class="wall-wrapper">
    <div class="wall-cover"></div>
    <transition name="fade">
      <div
        v-if="issues.items && issues.items.length > 0"
        class="issues-container"
      >
        <div
          class="issues-logo mb-3"
          style="cursor:pointer;"
          @click.prevent="issueLogoClick"
        >
          <img src="/static/img/logo_4.png" class="works-photo-icon" />
          현재 진행중인 이슈
        </div>
        <template v-for="(item, item_idx) in fixedIssues">
          <div v-if="item.visible" class="issue-item" :key="'fixed' + item_idx">
            <a :href="item.html_url" target="_blank">
              > {{ item.title }}
              <span style="font-size:11px;">
                [{{ item.repository_url }}]
                {{ $moment(item.updated_at).format('YYYY/MM/DD') }}
              </span>
            </a>
          </div>
        </template>
        <template v-for="(item, item_idx) in issues.items">
          <div
            v-if="!item.title.includes('Bump') && item.state === 'open'"
            class="issue-item"
            :key="item_idx"
          >
            <a :href="item.html_url" target="_blank">
              > {{ item.title }}
              <span style="font-size:11px;">
                [{{ getRepositoryNm(item.repository_url) }}]
                {{ $moment(item.updated_at).format('YYYY/MM/DD') }}
              </span>
            </a>
          </div>
        </template>
      </div>
    </transition>
    <coding-video></coding-video>
  </div>
</template>

<script>
import axios from 'axios'
import CodingVideo from './wall/CodingVideo.vue'

export default {
  components: {
    CodingVideo,
  },

  data() {
    return {
      fixedIssues: [
        {
          title: 'drawyourmind-web repository',
          html_url: 'https://github.com/mooooburg-dev/drawyourmind-web',
          repository_url: 'drawyourmind-web',
          updated_at: '20200712',
          visible: true,
        },
        {
          title: '타임라인 구상중',
          html_url:
            'https://www.notion.so/drawyourmind/Timeline-57f4ad0d1d1e40c2b1be068fe0fd09a0',
          repository_url: 'drawyourmind-labs',
          updated_at: '20210207',
          visible: false,
        },
        {
          title: '📘 리액트를 다루는 기술(업데이트 중)',
          html_url:
            'https://www.notion.so/drawyourmind/81dbc01da55e44ce9cda8db9054e7aab',
          repository_url: 'notion-BOOKS',
          updated_at: '20201116',
          visible: false,
        },
      ],
      issues: {},
    }
  },

  mounted() {
    this.getGitHubIssues()
  },

  methods: {
    showCover() {
      $('.wall-cover').addClass('active')

      setTimeout(() => {
        this.$emit('goMenu')
      }, 500)
    },

    issueLogoClick() {
      window.open('https://github.com/mooooburg-dev')
    },

    getGitHubIssues() {
      axios
        .get(
          'https://api.github.com/search/issues?q=author:mooooburg-dev&sort=updated'
        )
        .then((response) => {
          this.issues = response.data
          // this.issues.sort()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getRepositoryNm(strUrl) {
      const repo_name = strUrl.split('mooooburg-dev/')[1]
      return repo_name
    },
  },
}
</script>

<style></style>
