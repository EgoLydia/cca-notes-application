import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        //currentNote:{},
        noteData: {
            userId: "",
            title: "",
            content: "",
        },
    },
    getters: {
        getNoteById: (state) => (id) => {
            return state.notes.find((note) => note.id == id);
        },

        noteData: (state) => {
            return state.noteData;
        },
    },
    mutations: {
        setNoteData(state, payload) {
            state.noteData = payload;
        },
        /*setCurrentNote(state,payload){
                                                      state.currentNote = state.notes.find(note=> note.id == payload)
                                                      console.log(state.currentNote)
                                                    }*/
    },

    actions: {
        async getUserbyId() {
            const response = await axios.get(
                "https://ccsanotes-api.azurewebsites.net/users/user/27dd9087-f8de-4ae3-a301-af03013e294c"
            );
            return response.data;
        },

        async createNote() {
            await axios
                .post(
                    "https://ccsanotes-api.azurewebsites.net/Notes/create-note",
                    this.noteData
                )
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
        },
    },
    modules: {},
});