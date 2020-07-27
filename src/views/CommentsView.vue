<template>
  <div class="content-wrapper mt-5">
    <div class="content-label">
      <span class="oxtail content-title text-uppercase">{{ $route.name }}</span>
    </div>
    <div class="content-container career-list w-100">
      <div class="comment-form mr-2">
        <b-form-input id="input-name" class="UhBeeMiMi" v-model="name" placeholder="Enter your name"></b-form-input>
      </div>
      <div class="comment-form mr-2" style="width:60%">
        <b-form-input id="input-commet" class="UhBeeMiMi" v-model="comment" placeholder="Enter your comment"></b-form-input>
      </div>
      <div>
        <b-button variant="success" @click.prevent="submitClick">Submit</b-button>
      </div>
      <br />
      <div class="comment-container ml-4 mt-4">
        <div v-for="(item, item_idx) in data" :key="item_idx" class="comment-item mb-1">
          <div class="comment-name">
            <span class="UhBeeMiMi comment-name comment-text">{{ item.name }}</span>
          </div>
          <span class="UhBeeMiMi comment-text">{{ item.comment }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      baseUrl: "",

      data: [],
      name: "",
      comment: "",
    }
  },

  mounted() {
    this.baseUrl = process.env.VUE_APP_BASE_URL
    this.getList()
  },

  methods: {
    submitClick() {
      this.register()
    },

    getList() {
      axios
        .get(this.baseUrl + "/list")
        .then((response) => {
          console.log(response)
          this.data = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },

    register() {
      if (this.name == "" || this.comment == "") {
        return
      }
      axios
        .get(this.baseUrl + "/register", {
          params: {
            name: this.name,
            comment: this.comment,
          },
        })
        .then((response) => {
          if (response.data == "OK") {
            this.name = this.comment = ""
            this.getList()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
