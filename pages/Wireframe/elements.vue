<template>
  <div>
    <h1 class="title is-4">Elements</h1>
    <h2 class="subtitle is-5">Elements of the page</h2>

    <div>
      <nuxt-link class="button" to="/Wireframe/elements/simple">Simple</nuxt-link>
      <nuxt-link class="button" to="/Wireframe/elements/complex">Complex</nuxt-link>
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

<style scoped>
.tab2 {
  margin-bottom: 20px;
}
</style>