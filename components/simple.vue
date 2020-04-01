<template>
  <div>
    <h1 class="title is-4">Simple</h1>
    <h2 class="subtitle is-5">Simple Elements</h2>
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
        { name: "text" },
        { name: "link" },
        { name: "image" },
        { name: "video" },
        { name: "input" },
        { name: "list" },
        { name: "table" },
        { name: "buttons" },
        { name: "graph" },
        { name: "map" },
        { name: "calendar" }
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

