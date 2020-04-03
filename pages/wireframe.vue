<template>
  <div>
    <h1 class="title is-1">Wireframe</h1>
    <h2 class="subtitle is-2">Deals with the page itself, how it is sketched</h2>

    <div>
      <nuxt-link class="button" to="/Wireframe/screensize">Screen Size</nuxt-link>
      <nuxt-link class="button" to="/Wireframe/structure">Structure</nuxt-link>
      <nuxt-link class="button" to="/Wireframe/elements">Elements</nuxt-link>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style>
.tab {
  margin-bottom: 20px;
}
</style>