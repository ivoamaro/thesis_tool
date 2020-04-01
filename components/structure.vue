<template>
  <div>
    <h1 class="title is-4">Structure</h1>
    <h2 class="subtitle is-5">isto faz isto isto</h2>
     <div class="buttons are-small">
      <button
        v-for="(b,i) in button"
        :key="b"
        :class="{ 'is-link': i === activeItem}"
        class="button"
        v-on:click="currentTab = i, selectItem(i)"
      >{{b.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      activeItem: null,
      button: [
        { name: "Columns" },
        { name: "Row" },
        { name: "Section" },
        { name: "Container" },
        { name: "Grid" }
      ]
    };
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


