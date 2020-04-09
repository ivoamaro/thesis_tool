<template>
  <div>
    <h1>Search for Data</h1>

    <div class="field has-addons">
      <div class="control">
        <input class="input" v-model="search" type="text" placeholder="Search" />
      </div>
      <div class="control">
        <a class="button is-info">Search</a>
      </div>
    </div>
    <!---->
    <div v-for="(data,i) in info" :key="data + i">
      <h2>{{data.friends}}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      info: []
    };
  },
  created() {
    //load data array
    /*axios
      .get("https://thesisdatabase-ffa2d.firebaseio.com/entry.json")
      .then(function(data) {
        console.log(data);
        this.info = data.body.slice(0, 10);
      })
      .catch(error => {
        console.log(error);
      });*/
  },
  computed: {
    filterData() {
      return this.info.filter(info => {
        return boolean;
      });
    }
  }
};
</script>