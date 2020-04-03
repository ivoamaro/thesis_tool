<template>
  <div>
    <h1 class="title is-1">Storyboard</h1>
    <h2 class="subtitle is-2">Deals with how simple transition are made like a pop-up</h2>

    <div class="buttons are-small">
      <button
        v-for="(b,i) in button"
        :key="b.name + i"
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
      button: [{ name: "Hover" }, { name: "Submit Form" }]
    };
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    }
  },
  mounted: function() {
    this.selectItem(0);
  }
};
</script>