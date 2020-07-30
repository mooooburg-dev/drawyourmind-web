<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>
    <div class="content-container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <nav aria-label="Page navigation example">
    <paginate
      v-model="pageNum"
      :page-count=arrPathName.length
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :container-class="'pagination justify-content-center'"
      :prev-class="'page-item'" 
      :page-class="'page-item'" 
      :next-class="'page-item'"
      :prev-link-class="'page-link'" 
      :page-link-class="'page-link'" 
      :next-link-class="'page-link'" >
    </paginate>
    </nav>
  </div>
</template>

<script>


export default {
  data() {
    return {
      // works 데이터
      arrPathName: ["mpp", "hr", "adidasGolf"],

      pageNum: 0,
    }
  },

  mounted() {
    if (this.$route.path.toLowerCase() == "/works"){
      this.$router.push(this.$route.path + "/" + this.arrPathName[this.pageNum])
    } else {
      for(const idx in this.arrPathName){
        if(this.arrPathName[idx] == this.$route.meta.name){
          this.pageNum = Number(idx)+1;
        }
      }

      console.log(this.pageNum);
    }
  },

  methods: {
    clickCallback: function(pageNum) {
      // if(this.pageNum == pageNum) return;
      
      this.pageNum = pageNum;
      this.$router.push(`/works/${this.arrPathName[this.pageNum-1]}`)
    }
  }
}
</script>

<style></style>
