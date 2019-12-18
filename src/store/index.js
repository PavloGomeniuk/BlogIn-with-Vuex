import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  posts: [],
}

const mutations = {
  SET_POSTS (state, post) {
    state.posts = post
  },
  DELETE_POST (state, id) {
    state.posts = state.posts.filter(posts => posts._id !== id)
  },
  EDIT_POST (state, payload) {
     for (let i = 0; i < state.posts.length; i++) {
            if (state.posts[i]._id===id) {
              state.posts[i].text=payload.text;
              state.posts[i].text=payload.title;
              break;
            }
      }
  },
}

const actions = {
  async fetchPosts ({commit}) {
    try {
      const res = await axios.get('http://localhost:3000/posts')
      commit('SET_POSTS', res.data)
    } catch (err) {
      console.log(err)
    }
  },
  async deletePost ({commit}, id) {
    if (global.confirm('Are you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:3000/posts/${id}`)
        commit('DELETE_POST', id)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async editPost ({commit}, payload) {
    const data={
      title:payload.title,
      text:payload.text,
    }
    try {
      await axios.put(`http://localhost:3000/posts/${payload.id}`,(data))
      commit('EDIT_POST', payload)
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})