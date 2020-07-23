<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{$route.name}}</span>
    </div>
    <div class="content-container career-list">
      <div v-for="(item, item_idx) in careers" :key="item_idx" class="career-item">
        <span class="career-text oxtail" @click.prevent="careerItemClick(item, item_idx)">{{ item.name }}</span>
        <div class="career-item-desc ml-3">
          <span>{{ item.date }}</span><br/><br/>
          <span v-if="item.role" v-html="item.role"></span><br/><br/>
          <span v-if="item.projects" v-html="item.projects"></span><br/><br/><br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      careers: [
        {
          name: 'Medit',
          date: '2019.09 ~ ',
          role: '<b>Role_</b><br/>Informatation Startegy Team / Web Developer',
          projects: '<b>Projects_</b><br/><a href="https://github.com/mooooburg-dev/medit-partner-portal" target="_blank">Partner Portal System</a> / <a href="https://github.com/mooooburg-dev/Medit-HR" target="_blank">HR System</a>'
        },
        {
          name: 'mediabling',
          date: '2016.09 ~ 2019.03',
          role: 'Digital Contents Team / Team Leader',
          projects: 'Socical Marketing<br/>(LF / adidas / Reebok)'
        },
        {
          name: 'e-tribe',
          date: '2011.03 ~ 2016.09',
          role: 'UX Group / Front-end Developer',
          projects: 'Socical Marketing<br/>(LF / adidas / Reebok)'
        },
        {
          name: 'Solutionwide Pty Ltd',
          date: '2019.09',
        },
        {
          name: 'Pixdine',
          date: '2019.09',
        },
        {
          name: 'xPrime',
          date: '2019.09',
        },
        {
          name: 'DesignArt',
          date: '2019.09',
        },
      ],

      sIdx: -1,
    }
  },

  mounted(){
    $('.career-item-desc').slideUp(0);
    $('.career-text').eq(0).trigger("click");
  },

  methods: {
    careerItemClick(item, item_idx){
      this.sIdx = item_idx;

      $('.career-text').removeClass('active');
      $('.career-text').eq(this.sIdx).addClass('active');
      $('.career-item-desc').slideUp();
      $('.career-item-desc').eq(this.sIdx).slideDown();
    } 
  }
}
</script>

<style>

</style>