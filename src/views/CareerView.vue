<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title">CAREER</span>
    </div>
    <div class="content-container career-list">
      <div v-for="(item, item_idx) in careers" :key="item_idx" class="career-item">
        <span class="career-text oxtail" @click.prevent="careerItemClick(item, item_idx)">{{ item.name }}</span>
        <div class="career-item-desc">
          <span>{{ item.date }}</span><br/>
          <span>Role: Front-ent Developer</span><br/>
          <span>{{ item.date }}</span><br/><br/><br/>
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
          date: '2019.09',
        },
        {
          name: 'Mediabling',
          date: '2019.09',
        },
        {
          name: 'e-tribe',
          date: '2019.09',
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