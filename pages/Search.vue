<template>
  <div class="main">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Search</h1>
        <input v-model="search" class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div v-for="(crops,i) in filteredCrops" :key="crops + i">
      <div class="box src">
        <img :src="crops" alt="cenas" />
        <p>{{crops}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      data: ""
    };
  },
  computed: {
    setData() {
      return this.$store.state.posts;
    },
    filteredCrops() {
      let data = [];
      data.length = 0;
      this.$store.state.posts.forEach(crops => {
        crops.crops_src.forEach(c => {
          data.push(c);
        });
      });

      return data.filter(fil => {
        return fil.match(this.search);
      });
    },
    ...mapState(["posts"])
  }
};
</script>
<style scoped>
.src {
  width: 20%;
  margin: 2.5%;
  float: left;
}
.title {
  width: 25%;
  margin: 2.5%;
}
input {
  width: 40%;
  margin-left: 2.5%;
}
</style>