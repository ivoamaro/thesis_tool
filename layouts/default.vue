<template>
  <div class="columns is-desktop">
    <div class="column is-one-quarter">
      <sidebar />
    </div>
    <div class="column page">
      <nuxt />
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/sidebar";
export default {
  components: {
    sidebar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.page {
  padding: 50px;
}
</style>
