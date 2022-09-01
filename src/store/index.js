import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {
    getNoteById: state => id => {
      return state.notes.find(note => note.id == id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
