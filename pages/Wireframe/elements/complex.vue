<template>
  <div>
    <h3 class="title is-3">{{title}}</h3>
    <h4 class="subtitle is-4">{{subtitle}}</h4>

    <nuxt-link
      v-for="(b,i) in buttons"
      :key="b.name + i"
      class="button is-small"
      :to="'/Wireframe/elements/complex/'+b.path"
    >{{b.name}}</nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  computed: {
    buttons() {
      return this.$store.getters.getComplexButtons;
    },
    title() {
      return this.$store.getters.getComplexTitle;
    },
    subtitle() {
      return this.$store.getters.getComplexSubTitle;
    }
  }
};
</script>