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
    // currentNote: {
    //   title: "",
    //   content: "",
    // },
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
    addNewNote(state, payload) {
      state.currentNote = payload;
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
    createNote(context, payload) {
      console.log("created");
      axios
        .post(`${BASE_URL}/Notes/create-note`, {
          creatorUserId: payload.creatorUserId,
          title: payload.title,
          content: payload.content,
        })
        .then(() => {
          context.commit("addNote", payload);
        })
        .catch(error => console.log(error));
    },
  },
  modules: {},
});
