<template>
  <div>
    <h1 class="title is-1">Wireframe</h1>
    <h2 class="subtitle is-2">Deals with the page itself, how it is sketched</h2>

    <div class="tab">
      <button class="button" v-on:click="currentTab = 0, isactive()">Screen Size</button>
      <button class="button" v-on:click="currentTab = 1, isactive()">Structure</button>
      <button class="button" v-on:click="currentTab = 2, isactive()">Elements</button>
    </div>

    <screensize v-if="currentTab == 0" />
    <structure v-if="currentTab == 1" />
    <elements v-if="currentTab == 2" />
  </div>
</template>

<script>
import screensize from "@/components/screensize";
import structure from "@/components/structure";
import elements from "@/components/elements";

export default {
  data: function() {
    return {
      currentTab: "0",
      isActive: true
    };
  },
  components: {
    screensize,
    structure,
    elements
  },
  methods: {
    isactive: function() {
      this.isActive = !this.isActive;
      // some code to filter users
    }
  }
};
</script>

<style scoped>
.tab {
  margin-bottom: 20px;
}
</style>