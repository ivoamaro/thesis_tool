<template>
  <div class="main">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Search</h1>
        <input v-model="search" class="input" type="text" placeholder="Text input" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div v-for="(crops,i) in filteredCrops" :key="crops + i">
          <div class="box src">
            <img class="size" :id="i" :src="crops" alt="cenas" v-on:click="greet(i)" />
            <!--<p>{{crops}}</p>-->
          </div>
        </div>
      </div>
    </div>

    <div class="column">
      <div>
        <h1>ORDERED</h1>
        <div class="src_ord" v-for="(or,i) in this.order" :key="or+i">
          <img class="size" :src="or" alt="cenas" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      data: "",
      order: []
    };
  },
  computed: {
    setData() {
      return this.$store.state.posts;
    },
    filteredCrops() {
      let data = [];
      data.length = 0;

      this.$store.state.posts.forEach(crops => {
        crops.crops_src.forEach(c => {
          data.push(c);
        });
      });
      return data.filter(fil => {
        return fil.match(this.search);
      });
    },
    ...mapState(["posts"])
  },
  methods: {
    greet: function(ele) {
      let imgsrc = document.getElementById(ele);
      this.order.push(imgsrc.src);
      imgsrc.style.width = 0;
    }
  }
};
</script>
<style scoped>
.src {
  width: 20vw;
  margin: 2vw;
  float: left;
}
.src_ord {
  width: 15vw;
  margin: 2vw;
  float: left;
}
.size {
  width: 100%;
}
.title {
  width: 25%;
  margin: 2.5%;
}
input {
  width: 40%;
  margin-left: 2.5%;
}
</style>