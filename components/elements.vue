<template>
  <div>
    <h1 class="title is-4">Elements</h1>
    <h2 class="subtitle is-5">Elements of the page</h2>

    <div class="tab2">
      <button class="button" v-on:click="currentTab = 0">Simple</button>
      <button class="button" v-on:click="currentTab = 1">Complex</button>
    </div>

    <simple v-if="currentTab == 0" />
    <complex v-if="currentTab == 1" />
  </div>
</template>

<script>
import simple from "@/components/simple";
import complex from "@/components/complex";

export default {
  data: function() {
    return {
      currentTab: "0"
    };
  },
  components: {
    simple,
    complex
  },
  methods: {}
};
</script>

<style scoped>
.tab2 {
  margin-bottom: 20px;
}
</style>