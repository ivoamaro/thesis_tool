<template>
  <div class="sidebar_menu">
    <aside class="menu">
      <h1>
        <nuxt-link to="/" class="is-active">Home</nuxt-link>
      </h1>
      <p class="menu-label">Graphic Database</p>
      <ul class="menu-list">
        <li>
          <nuxt-link to="/sitemap">Sitemap</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/storyboard">Storyboard</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/wireframe">Wireframe</nuxt-link>
          <ul>
            <li>
              <a>Screen Size</a>
            </li>
            <li>
              <a>Structure</a>
            </li>
            <li>
              <a>Elements</a>
              <ul>
                <li>
                  <a>Simple</a>
                </li>
                <li>
                  <a>Complex</a>
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
  padding-top: 50px;
  padding-left: 50px;
}
</style>
