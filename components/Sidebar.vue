<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/Editor">Editor</nuxt-link>
          <nuxt-link class="navbar-item" to="/ShowData">Search</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.sidebar_menu {
  padding-top: 37px;
  padding-left: 50px;
}
</style>
