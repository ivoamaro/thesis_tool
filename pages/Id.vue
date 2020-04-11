<template>
  <div>
    <div class="columns box">
      <div class="column box">
        <img :src="setData.original_src" alt="cenas" />
      </div>
      <div class="column box">
        <h1 class="title is-1">Notes</h1>
        <h2>{{setData.notes}}</h2>
        <h1 class="title is-1">Found</h1>
        <h2>{{setData.found}}</h2>
      </div>
    </div>
    <div class="columns box">
      <div class="column">
        <h1 class="title is-1">Crops</h1>
        <div class="crops box" v-for="(t,i) in setData.crops_src" :key="t+i">
          <img :src="t" alt="cenas" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      entry_id: this.$route.params.id
    };
  },
  computed: {
    setData() {
      return this.$store.state.posts.find(data => data.id === this.entry_id);
    },
    ...mapState(["posts"])
  }
};
</script>

<style scoped>
.crops {
  width: 20%;
  margin: 2.5%;
  float: left;
}

.column {
  margin: 1%;
  padding: 1%;
}
</style>