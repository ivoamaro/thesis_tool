<template>
  <div>
    <h1 class="title">{{wireframe.title}}</h1>
    <h2 class="subtitle">{{wireframe.subtitle}}</h2>
    <div class="tabs is-toggle">
      <ul>
        <li v-for="(menus,i) in wireframe.menu" :key="menus.name" v-on:click="changeHeader(i)">
          <a>{{menus.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    menu() {
      return this.$store.state.menu.wireframe.menu;
    }
  }
};
</script>