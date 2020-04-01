<template>
  <div>
    <h1 class="title is-1">Wireframe</h1>
    <h2 class="subtitle is-2">Deals with the page itself, how it is sketched</h2>

    <div class="buttons">
      <button v-for="(b,i) in button" :key="b" :class="{ 'is-link': i === activeItem}" class="button" v-on:click="currentTab = i, selectItem(i)">{{b.name}}</button>
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
      activeItem: null,
      button: [
        { name: "Screen Size" },
        { name: "Structure" },
        { name: "Elements" }
      ]
    };
  },
  components: {
    screensize,
    structure,
    elements
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    }
  },
  mounted: function () {
    this.selectItem(0);
  }
};
</script>

<style>
.tab {
  margin-bottom: 20px;
}
</style>