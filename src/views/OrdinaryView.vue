<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>
    <div class="content-container ordinary-list">
      <div v-for="(item, item_idx) in paginatedData()" :key="item_idx" class="ordinary-item">
        <span class="ordinary-text oxtail"><a :href="item.url" target="_blank">{{ item.title }}</a></span>
        <span class="ordinary-sm-text oxtail"> at {{ $moment(item.date).format('MMMM YYYY') }}</span>
      </div>
    </div>
    <!-- 
    <div class="wirte-button">
      <b-button size="lg" variant="primary" class="mb-2">
        <b-icon icon="pencil" aria-label="Help"></b-icon>
      </b-button>
    </div>
     -->
    <nav aria-label="Page navigation example">
      <paginate
        v-model="pageNum"
        :page-count="pageCount()"
        :page-range="5"
        :margin-pages="1"
        :container-class="'pagination justify-content-center'"
        :prev-class="'page-item'" 
        :page-class="'page-item'" 
        :next-class="'page-item'"
        :prev-link-class="'page-link'" 
        :page-link-class="'page-link'" 
        :next-link-class="'page-link'" >
        :click-handler="clickCallback"
      </paginate>
    </nav>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      baseUrl: "",
      data: [],

      pageNum: 1,
    }
  },

  props: {
    pageSize: {
      type: Number,
      required: false,
      default: 10,
    }
  },

  mounted() {
    this.baseUrl = process.env.VUE_APP_BASE_URL
    this.getList()
  },

  methods: {
    getList() {
      axios
          .get(this.baseUrl + "/ordinary/list")
          .then((response) => {
            console.log(response)
            this.data = response.data
          })
          .catch((err) => {
            console.log(err)
          })
    },

    register() {},

    pageCount(){
      let listLength = this.data.length,
        listSize = this.pageSize,
        page = Math.floor(listLength / listSize);
      if (listLength % listSize > 0) page += 1;

      return page;
    },

    paginatedData(){
      const start = (this.pageNum - 1) * this.pageSize,
        end = start + this.pageSize;

      return this.data.slice(start, end);
    },

    clickCallback(){
      
    },
  }
}
</script>

<style></style>
