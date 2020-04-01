<template>
  <div>
    <h1 class="title is-4">Elements</h1>
    <h2 class="subtitle is-5">Elements of the page</h2>

    <div class="buttons">
      <button
        v-for="(b,i) in button"
        :key="b"
        :class="{ 'is-link': i === activeItem}"
        class="button"
        v-on:click="currentTab = i, selectItem(i)"
      >{{b.name}}</button>
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
      currentTab: "0",
      activeItem: null,
      button: [{ name: "Simple" }, { name: "Complex" }]
    };
  },
  components: {
    simple,
    complex
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

<style scoped>
.tab2 {
  margin-bottom: 20px;
}
</style>