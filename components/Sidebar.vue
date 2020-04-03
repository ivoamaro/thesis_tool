<template>
  <div class="sidebar_menu">
    <aside class="menu">
      <h1 class="title is-1">
        <nuxt-link to="/">Home</nuxt-link>
      </h1>
      <p class="menu-label">Graphic Database</p>
      <ul class="menu-list">
        <li>
          <nuxt-link to="/Sitemap">Sitemap</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Storyboard">Storyboard</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/Wireframe">Wireframe</nuxt-link>
          <ul>
            <li>
              <nuxt-link to="/Wireframe/screensize">Screen Size</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/Wireframe/structure">Structure</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/Wireframe/elements">Elements</nuxt-link>

              <ul>
                <li>
                  <nuxt-link to="/Wireframe/elements/simple">Simple</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/Wireframe/elements/complex">Complex</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
.sidebar_menu {
  padding-top: 37px;
  padding-left: 50px;
}
</style>
