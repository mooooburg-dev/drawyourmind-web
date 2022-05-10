<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>
    <div class="content-container career-list">
      <div
        v-for="(item, item_idx) in careers"
        :key="item_idx"
        class="career-item"
      >
        <span
          class="career-text oxtail"
          @click.prevent="careerItemClick(item, item_idx)"
          >{{ item.name }}</span
        >
        <div class="career-item-desc ml-3">
          <span>{{ item.date }}</span>
          <br />
          <br />
          <span v-if="item.role" v-html="item.role"></span>
          <br />
          <br />
          <template v-if="item.projects && item.projects.length > 0">
            <span><b>Projects_</b></span>
            <br />
            <span
              v-for="(project, project_idx) in item.projects"
              :key="project_idx"
            >
              <template v-if="project.path">
                <a href="" @click.prevent="$router.push(project.path)">{{
                  project.label
                }}</a>
                {{ `${project_idx < item.projects.length - 1 ? ' / ' : ''}` }}
              </template>
              <template v-else
                >{{ project.label
                }}{{
                  `${project_idx < item.projects.length - 1 ? ' / ' : ''}`
                }}</template
              >
            </span>
            <br />
            <br />
          </template>
          <template v-if="item.photo">
            <!-- <br /> -->
            <span>
              <img src="/static/img/logo_7.png" class="works-photo-icon" />
              <a :href="item.photo" target="_blank">Season Memory</a>
            </span>
            <br />
            <br />
          </template>

          <div :class="`${item_idx != 0 ? 'career-img-gray' : ''}`">
            <img v-if="item.image" :src="item.image" />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      careers: [
        {
          name: 'Buzzni',
          date: '2021.04 ~ Present',
          role: '<b>Position_</b><br/>Commerce Squad / Front-end Engineer',
          // TODO: 이미지 추가하기
          // photo: 'https://photos.app.goo.gl/FHKaNQnjdJKaN1oz5',
          projects: [
            {
              label: 'HSMOA Commerce Backoffice',
              path: '/works/hsmoabo',
            },
          ],
          // image: '/static/img/career_medit.png',
        },
        {
          name: 'MEDIT',
          date: '2019.09 ~ 2021.03',
          role:
            '<b>Position_</b><br/>R&D Group / Front-end Developer<br/>Informatation Startegy Team / Web Developer',
          photo: 'https://photos.app.goo.gl/FHKaNQnjdJKaN1oz5',
          projects: [
            {
              label: 'Partner Portal System',
              path: '/works/mpp',
            },
            {
              label: 'e-HR System',
              path: '/works/hr',
            },
          ],
          image: '/static/img/career_medit.png',
        },
        {
          name: 'mediabling',
          date: '2016.09 ~ 2019.03',
          role: '<b>Position_</b><br/>Digital Contents Team / Team Leader',
          projects: [
            {
              label: 'Fashion Digital Marketing',
            },
            {
              label: 'adidas golf operation',
              path: '/works/adidas-golf',
            },
            {
              label: 'LookBook Shooting',
            },
            {
              label: 'GOOUT Store operate',
              path: '/works/gooutstore',
            },
          ],
          image: '/static/img/career_mediabling.png',
        },
        {
          name: 'eTRIBE',
          date: '2011.03 ~ 2016.09',
          role: '<b>Position_</b><br/>UX Group / Front-end Developer',
          projects: [
            {
              label: 'Meritz',
              path: '/works/meritz-direct',
            },
            {
              label: 'NEXON',
            },
            {
              label: 'LG',
            },
            {
              label: 'VUAL',
              path: '/works/vual',
            },
            {
              label: 'Lotte',
            },
            {
              label: 'Hanhwa',
            },
          ],
          image: '/static/img/career_etribe.png',
        },
        {
          name: 'Solutionwide Pty Ltd',
          date: '2009.12 ~ 2010.12 (Sydney, Australia)',
          role: '<b>Position_</b><br/>Flash Developer',
          photo: 'https://photos.app.goo.gl/1XrU3z3c5skqXN6s7',
          projects: [
            {
              label: 'Hankook tire',
            },
            {
              label: 'Hyundai MotorsLotte',
            },
            {
              label: 'LG',
            },
          ],
          image: '/static/img/career_solutionwide.png',
        },
        {
          name: 'Pixdine',
          date: '2008.08 ~ 2009.08',
          role: '<b>Position_</b><br/>Flash Developer',
          photo: 'https://photos.app.goo.gl/1GvVjXEPF1jzU4t66',
          projects: [
            {
              label: 'Coca-cola',
            },
            {
              label: 'SK Telecom',
            },
            {
              label: 'LG',
            },
          ],
          image: '/static/img/career_pixdine.png',
        },
        {
          name: 'xPrime',
          date: '2007.08 ~ 2008.07',
          role: '<b>Position_</b><br/>Flash Developer',
          photo: 'https://photos.app.goo.gl/7NwEp4RVmWXD4rqF7',
          projects: [
            {
              label: 'Samsung Anycall',
            },
            {
              label: 'NewYork Life',
            },
            {
              label: 'WooriBank',
            },
            {
              label: 'Nonghyup X-BANK',
            },
          ],
          image: '/static/img/career_xprime.png',
        },
        {
          name: 'DesignArt',
          date: '2006.11 ~ 2007.04',
          role: '<b>Position</b><br/>Web Designer',
          projects: [
            {
              label: 'Makeshop Platform Shoppinmall',
            },
          ],
        },
      ],

      sIdx: -1,
    }
  },

  mounted() {
    $('.career-item-desc').slideUp(0)
    $('.career-text')
      .eq(0)
      .trigger('click')
  },

  methods: {
    careerItemClick(item, item_idx) {
      if (this.sIdx == item_idx) return

      this.sIdx = item_idx

      $('.career-text').removeClass('active')
      $('.career-text')
        .eq(this.sIdx)
        .addClass('active')
      $('.career-item-desc').slideUp()
      $('.career-item-desc')
        .eq(this.sIdx)
        .slideDown()
    },
  },
}
</script>

<style></style>
