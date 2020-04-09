<template>
  <div>
    <div class="column">
      <sidebar />
    </div>
    <div class="column">
      <nuxt />
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/sidebar";
export default {
  components: {
    sidebar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.page {
  padding: 50px;
}
.column {
  padding: 10px;
}

h1,
h2,
h3,
h4,
h4,
h5,
p,
label,
input,
button,
span,
a {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
