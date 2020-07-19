<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title">CAREER</span>
    </div>
    <div class="content-container career-list">
      <div v-for="(item, item_idx) in careers" :key="item_idx" class="career-item" @click.prevent="careerItemClick(item, item_idx)">
        <span class="career-text oxtail">{{ item.name }}</span>
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
          name: 'MEDIT',
          date: '2019.09',
        },
        {
          name: 'MEDIA BLING',
          date: '2019.09',
        },
        {
          name: 'ETRIBE',
          date: '2019.09',
        },
        {
          name: 'SOLUTION WIDE',
          date: '2019.09',
        },
        {
          name: 'PIXDINE',
          date: '2019.09',
        },
        {
          name: 'XPRIME',
          date: '2019.09',
        },
        {
          name: 'DESIGNART',
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