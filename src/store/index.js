import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    currentTask: {
      completed: null,
      text: null
    },
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
    },
    clearCurrentTask(state) {
      state.currentTask = {
        completed: null,
        text: null
      }
    },
    deleteTask(state, payload) {
      let pos = null;
      for (let i = 0; i < state.tasks.length; i++) {
        const task = state.tasks[i];
        if (task.id === payload) {
          pos = i;
          break;
        }
      }
      state.tasks.splice(pos, 1)
    },
    setCurrentTask(state, payload) {
      console.log('ЗАПИСЬ ', payload);

      state.currentTask = payload
    },
    completeTask(state) {
      state.currentTask.completed = true;
    },
    editTask(state, payload) {
      state.currentTask.text = payload;
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
    },

    deleteTask({ commit }, id) {
      firebase
        .database()
        .ref('tasks/' + id)
        .remove()
        .then(() => {
          commit('deleteTask', id)
        })
    },
    clearCurrentTask({ commit }) {
      commit('clearCurrentTask')
    },
    getTask({ commit }, tid) {
      return firebase
        .database()
        .ref('tasks/' + tid)
        .once('value', snapshot => {
          commit('setCurrentTask', snapshot.val())
        })
    },
    updateTask({ commit }, tid) {
      return firebase
        .database()
        .ref('tasks/' + tid)
        .update({ completed: true })
        .then(() => {
          commit('completeTask')
        })
    },

    editTask({ commit }, { tid, text }) {
      return firebase
        .database()
        .ref('tasks/' + tid)
        .update({ text })
        .then(() => {
          commit('editTask', text)
        })
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    currentTask(state) { return state.currentTask }
  },
  modules: {
  }
})
