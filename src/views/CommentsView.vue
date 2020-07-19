<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title">COMMENTS</span>
    </div>
    <div class="content-container career-list">
      <div v-for="(item, item_idx) in careers" :key="item_idx" class="career-item">
        <span class="career-text oxtail">{{ item.name }}</span>
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
          name: 'MEDIT'
        },

      ]
    }
  }
}
</script>

<style>

</style>