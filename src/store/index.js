import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = []
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          let task = payload[key];
          task.id = key;
          state.tasks.push(task)
        }
      }
    },
    addTask(state, payload) {
      state.tasks.push({
        text: payload.text,
        id: payload.key,
        completed: false
      })
    }
  },
  actions: {
    getTasks({
      commit
    }) {
      return firebase
        .database()
        .ref('tasks/')
        .once('value', snapshot => {
          const data = snapshot.val();
          console.log(data);

          commit('setTasks', data);
        });
    },
    async createTask({ commit }, text) {
      const res = await firebase
        .database()
        .ref('tasks/')
        .push({
          text,
          completed: false
        })

      commit('addTask', { key: res.key, text })

    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    }
  },
  modules: {
  }
})
