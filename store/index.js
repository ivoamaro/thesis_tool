import axios from "axios";

export const state = () => ({
  posts: null,
})

export const mutations = {
  SET_ITEM(state, posts) {
    state.posts = posts
  }

};

export const actions = {
  async nuxtServerInit({
    commit
  }) {
    await axios.get('http://localhost:4000/api/database.json/data')
      .then(response => {
        commit('SET_ITEM', response.data);
      }).catch(error => console.log(error));

  }
}
