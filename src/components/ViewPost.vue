<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <div class="md-layout md-alignment-vertical md-alignment-center md-size-100">
        <md-dialog-title>Add Content</md-dialog-title>
        <div class="md-layout-item md-size-80">
          <md-field>
            <label>TITLE</label>
            <md-input v-model="title"></md-input>
          </md-field>
          <md-field>
            <label>URL</label>
            <md-input v-model="url"></md-input>
          </md-field>
        </div>
      </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="addPost">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-fab md-primary" @click="showDialog=true">
        <md-icon>add</md-icon>
      </md-button>
  
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      showDialog: false,

      title: '',
      url: '',
    }
  },

  mounted(){
    axios.get('http://localhost:8080/post/list').then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  },

  methods: {
    addPost(){
      axios.get('http://localhost:8080/post/register', {
        params: {
          title: this.title,
          url: this.url,
        }
      }).then(response => {
        console.log(response.data);
        this.showDialog = false;
      }).catch(error => {
        console.log(error);
      })
    },
  }
  
}
</script>

<style lang="scss" scoped>
.md-dialog /deep/.md-dialog-container {
  width: 50%;
  max-width: 768px;
}
</style>