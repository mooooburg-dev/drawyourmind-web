<template>
  <div>
    
    <!-- <span class="md-display-1">drawyourmind.com</span> -->
    
    <div class="md-layout md-alignment-left" style="width:300px;">
      <div v-for="(item, item_idx) in data" :key="item_idx" style="width:300px;">
        <span><a :href="item.url" target="myframe">{{item.title}}</a></span>
      </div>
    </div>


    <md-button class="md-fab md-primary" @click="showDialog=true">
      <md-icon>add</md-icon>
    </md-button>
    
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
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      data: {},
      showDialog: false,

      title: '',
      url: '',
      
    }
  },

  mounted(){
    this.getList();
  },

  methods: {
    getList(){
      axios.get('http://ec2-3-34-8-184.ap-northeast-2.compute.amazonaws.com/drawyourmind-api/post/list').then(response => {
        console.log(response);

        this.data = response.data;
      }).catch(error => {
        console.log(error);
      })
    },

    addPost(){
      axios.get('http://ec2-3-34-8-184.ap-northeast-2.compute.amazonaws.com/drawyourmind-api/post/register', {
        params: {
          title: this.title,
          url: this.url,
        }
      }).then(response => {
        console.log(response.data);
        this.showDialog = false;
        this.getList();
      }).catch(error => {
        console.log(error);
      })
    },
  }
  
}
</script>

<style lang="scss" scoped>

// .md-dialog /deep/.md-dialog-container {
//   width: 50%;
//   max-width: 768px;
// }
</style>