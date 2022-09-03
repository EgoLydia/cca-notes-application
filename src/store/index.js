import { createStore } from "vuex";
import axios from "axios";
import { BASE_URL } from "../config.js";

export default createStore({
  state: {
    notes: [],
    currentUser: {
      userId: "",
      username: "",
      email: "",
      password: "",
    },
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
    },
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    addNote(state, payload) {
      state.notes.push(payload);
    },
    deleteNote(state, id) {
      const indexOfItem = state.notes.findIndex(note => note.noteId === id);
      if (indexOfItem > -1) {
        state.notes.splice(indexOfItem, 1);
      }
    },
  },
  actions: {
    async signUp(context, payload) {
      await axios
        .post(`${BASE_URL}/users/byUser`, {
          userId: new Date().toISOString(),
          username: payload.username,
          email: payload.email,
          password: payload.password,
        })
        .then(() => {
          context.commit("setCurrentUser");
        })
        .catch(err => console.log(err));
    },
    fetchNotes(context) {
      axios
        .get(`${BASE_URL}/Notes`)
        .then(res => {
          context.commit("setNotes", res.data);
        })
        .catch(err => console.log(err));
    },
    deleteNoteById(context, id) {
      axios.delete(`${BASE_URL}/Notes?id=` + id).then(() => {
        context.commit("deleteNote", id);
      });
    },
  },
  modules: {},
});
