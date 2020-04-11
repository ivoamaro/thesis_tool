<template>
  <div>
    <h1>Search for Data</h1>

    <!--<div v-for="(t,i) in info" :key="t+i">
      <img :src="t.original_src" alt="cenas" />
      <div v-for="(t2,i) in t.crops_src" :key="t2+i">
        <img :src="t2" alt="cenas" />
      </div>
    </div>-->

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
      search: ""
    };
  },
  computed: {
    setData() {
      return this.$store.state.posts;
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