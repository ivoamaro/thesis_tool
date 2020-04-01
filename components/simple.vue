<template>
  <div>
    <h1 class="title is-4">Simple</h1>
    <h2 class="subtitle is-5">Simple Elements</h2>
    <div class="buttons are-small">
      <button v-for="b in button" :key="b" class="button">{{b.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
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
  }
};
</script>

