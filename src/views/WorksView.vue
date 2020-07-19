<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title">WORKS</span>
    </div>
    <div class="content-container">
      <div>
        <img src="http://placehold.it/840x480" />
      </div>
      <div class="work-item mt-4">
        <span class="work-text oxtail">{{ data.name }}</span><br/><br/>
        <span v-html="data.desc">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data: {
        name: 'MEDIT PARTNER PORTAL SYSTEM',
        desc: "In many of the examples shown in BootstrapVue's documentation, you may see the use of CSS classes such as ml-2, py-1, etc. These are Bootstrap v4.5 utility classes that help control padding, margins, positioning and more. You can find information on these classes in the Utility Classes reference section.\n Many of the examples in this documentation are live and can be edited in-place for an enhanced learning experience (note some examples may not work in IE 11 due to use of ES6 JavaScript code in the <template> sections).\n BootstrapVue also provides an interactive playground where you can experiment with the various components and export your results to JSFiddle, CodePen, and/or CodeSandbox."
      }
    }
  }
}
</script>

<style>

</style>