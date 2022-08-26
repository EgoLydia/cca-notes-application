import { createStore } from 'vuex'

export default createStore({
  state: {
    //currentNote:{},
  },
  getters: {
    getNoteById: (state) => (id) => {
      return state.notes.find(note => note.id == id)
    }
  },
  mutations: {
    /*setCurrentNote(state,payload){
      state.currentNote = state.notes.find(note=> note.id == payload)
      console.log(state.currentNote)
    }*/
  },
  actions: {
  },
  modules: {
  }
})
