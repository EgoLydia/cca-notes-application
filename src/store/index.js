import { createStore } from "vuex";
import axios from "axios";
import { BASE_URL } from "../config.js";

export default createStore({
  state: {
    notes: [],
  },
  getters: {
    getNoteById: state => id => {
      return state.notes.find(note => note.id == id);
    },
    note(state) {
      return state.notes;
    },
  },
  mutations: {
    setNotes(state, payload) {
      state.notes = payload;
      console.log(payload);
    },
    addNote(state, payload) {
      state.notes.push(payload);
    },
    deleteNote(state, id) {
      const indexOfItem = state.notes.findIndex(note => note.id === id);
      if (indexOfItem > -1) {
        state.notes.splice(indexOfItem, 1);
      }
    },
  },
  actions: {
    fetchNotes(context) {
      axios
        .get(`${BASE_URL}/Notes`)
        .then(res => {
          context.commit("setNotes", res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    },
    deleteNoteById(context, id) {
      axios.delete(`${BASE_URL}/Notes?id=` + id).then(() => {
        console.log("delete");
        context.commit("deleteNote", id);
      });
    },
  },
  modules: {},
});
