<template>
  <div>
    <h1 class="title is-1">{{title}}</h1>
    <h2 class="subtitle is-2">{{subtitle}}</h2>

    <nuxt-link
      v-for="(b,i) in buttons"
      :key="b.name + i"
      class="button is-small"
      :to="'/Storyboard/'+b.path"
    >{{b.name}}</nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  computed: {
    buttons() {
      return this.$store.getters.getStoryboardButtons;
    },
    title() {
      return this.$store.getters.getStoryboardTitle;
    },
    subtitle() {
      return this.$store.getters.getStoryboardSubTitle;
    }
  }
};
</script>