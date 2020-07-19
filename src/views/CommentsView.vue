<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title">COMMENTS</span>
    </div>
    <div class="content-container career-list w-100">
      <div class="comment-form mr-2">
        <b-form-input id="input-name" placeholder="Enter your name"></b-form-input>
      </div>
      <div class="comment-form mr-2" style="width:60%">
        <b-form-input id="input-commet" placeholder="Enter your comment"></b-form-input>
      </div>
      <div>
        <b-button variant="success">Submit</b-button>
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