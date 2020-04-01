<template>
  <div>
    <h1 class="title is-1">Wireframe</h1>
    <h2 class="subtitle is-2">Lorem Ipsum fasf afkjld</h2>

    <div class="tab">
      <button class="button button is-link" v-on:click="currentTab = 0">Screen Size</button>
      <button class="button" v-on:click="currentTab = 1">Structure</button>
      <button class="button" v-on:click="currentTab = 2">Elements</button>
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
import toogle from "@/components/toogle";

export default {
  data: function() {
    return {
      currentTab: "0"
    };
  },
  components: {
    screensize,
    structure,
    elements,
    toogle
  },
  methods: {}
};
</script>
<style scoped>
.tab {
  margin-bottom: 20px;
}
</style>