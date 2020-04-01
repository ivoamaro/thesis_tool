<template>
  <div>
    <h1 class="title is-4">Complex</h1>
    <h2 class="subtitle is-5">Complex elements</h2>
    <div class="buttons are-small">
      <button v-for="b in button" :key="b" class="button">{{b.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      button: [{ name: "navbar" }, { name: "footer" }]
    };
  }
};
</script>