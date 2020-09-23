<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>
    <div class="content-container career-list">
      <div v-for="(item, item_idx) in careers" :key="item_idx" class="career-item">
        <span class="career-text oxtail" @click.prevent="careerItemClick(item, item_idx)">{{ item.name }}</span>
        <div class="career-item-desc ml-3">
          <span>{{ item.date }}</span
          ><br /><br />
          <span v-if="item.role" v-html="item.role"></span><br /><br />
          <span v-if="item.projects" v-html="item.projects"></span><br /><br />
          <div :class="`${item_idx != 0 ? 'career-img-gray' : ''}`">
            <img v-if="item.image" :src="item.image" />
          </div>
          <br /><br />
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
          name: 'Medit',
          date: '2019.09 ~ ',
          role: '<b>Position_</b><br/>Informatation Startegy Team / Web Developer',
          projects: "<b>Projects_</b><br/><a href='/works/mpp' target='_self'>Partner Portal System</a> / <a href='/works/hr' target='_self'>HR System</a>",
          image: '/static/img/career_medit.png',
        },
        {
          name: 'mediabling',
          date: '2016.09 ~ 2019.03',
          role: '<b>Position_</b><br/>Digital Contents Team / Team Leader',
          projects: "<b>Projects_</b><br/>Fashion Digital Marketing / <a href='/works/adidasGolf' target='_self'>adidas golf operation</a> / LookBook Shooting / <a href='/works/gooutStore' target='_self'>GOOUT Store operate</a>",
          image: '/static/img/career_mediabling.png',
        },
        {
          name: 'e-tribe',
          date: '2011.03 ~ 2016.09',
          role: '<b>Position_</b><br/>UX Group / Front-end Developer',
          projects: "<b>Projects_</b><br/><a href='/works/meritzDirect' target='_self'>Meritz</a> / NEXON / LG / <a href='/works/vual' target='_self'>VUAL</a> / Lotte / Hanhwa",
          image: '/static/img/career_etribe.png',
        },
        {
          name: 'Solutionwide Pty Ltd',
          date: '2009.12 ~ 2010.12 (Sydney, Australia)',
          role: '<b>Position_</b><br/>Flash Developer',
          projects: '<b>Projects_</b><br/>Hankook tire / Hyundai Motors / LG',
          image: '/static/img/career_solutionwide.png',
        },
        {
          name: 'Pixdine',
          date: '2008.08 ~ 2009.08',
          role: '<b>Position_</b><br/>Flash Developer',
          projects: '<b>Projects_</b><br/>Coca-cola / SK Telecom / LG',
          image: '/static/img/career_pixdine.png',
        },
        {
          name: 'xPrime',
          date: '2007.08 ~ 2008.07',
          role: '<b>Position_</b><br/>Flash Developer',
          projects: '<b>Projects_</b><br/>Samsung Anycall / NewYork Life / WooriBank / Nonghyup X-BANK',
          image: '/static/img/career_xprime.png',
        },
        {
          name: 'DesignArt',
          date: '2006.11 ~ 2007.04',
          role: '<b>Position</b><br/>Web Designer',
          projects: '<b>Projects_</b><br/>Makeshop Platform Design',
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
