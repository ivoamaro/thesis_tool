<template>
  <div class="columns is-desktop">
    <div class="column is-one-quarter">
      <Sidebar />
    </div>
    <div class="column page">
      <secNav />
      <div class="columns">
        <div class="column">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import secNav from "@/components/SecondaryNav";
export default {
  components: {
    Sidebar,
    secNav
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
