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
    <p>{{ info }}</p>
    <!--<img v-for="(img, i) in info.original" :key="img + i" :src="'~/' + img" />-->
  </div>
</template>

<script>
import axios from "axios";
let funciona;
export default {
  data() {
    return {
      search: "asdasdasda",
      info: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/api/database.json/data")
      .then(response => (this.info = response));
  }
};
</script>

<style scoped>
img {
  width: 25%;
}
</style>