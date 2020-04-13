<template>
  <div>
    <div class="column">
      <h1 class="title is-1">Database</h1>
      <h2 class="subtitle is-2">List of all entrys</h2>
    </div>
    <div class="column">
      <label class="label">Retrieved On</label>

      <div class="select">
        <select v-model="search">
          <option>All</option>
          <option>Survey</option>
          <option>Online</option>
          <option>Professional</option>
        </select>
      </div>
    </div>
    <div v-for="(t,i) in setData" :key="t+i">
      <nuxt-link :to="{ 
      name:'Id',
      params: { id: t.id}
      }">
        <div class="entrys box">
          <img :src="t.original_src" alt="cenas" />
          <span>retrieved: {{t.found}}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      search: "All"
    };
  },
  computed: {
    setData() {
      switch (this.search) {
        case "Online":
          return this.$store.state.posts.filter(fil => {
            return fil.found.match("Online");
          });
          break;
        case "Survey":
          return this.$store.state.posts.filter(fil => {
            return fil.found.match("Survey");
          });
          break;
        case "Professional":
          return this.$store.state.posts.filter(fil => {
            return fil.found.match("Professional");
          });
          break;
        default:
          return this.$store.state.posts;
      }
    },
    ...mapState(["posts"])
  }
};
</script>

<style scoped>
.entrys {
  width: 20%;
  margin: 2.5%;
  float: left;
}
</style>