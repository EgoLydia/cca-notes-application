<template>
  <div>
    <div class="loader" v-if="notes.length == 0">
      <NotesLoader />
    </div>
    <div class="note-list">
      <SingleNote v-for="(note, index) in notes" :key="index" :note="note" />
    </div>
  </div>
</template>

<script>
import SingleNote from "../components/SingleNote.vue";
import NotesLoader from "../components/NotesLoader.vue";
export default {
  components: {
    SingleNote,
    NotesLoader,
  },
  methods: {
    fetchNotes() {
      const getNotes = this.$store.dispatch("fetchNotes");
      return getNotes;
    },
  },
  computed: {
    notes() {
      const note = this.$store.getters.note;
      return note;
    },
  },
  mounted() {
    if (this.notes.length == 0) {
      this.fetchNotes();
    }
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  overflow: hidden;
}
.note-list {
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: space-evenly;
  margin-bottom: 100px;
}
.loader {
  width: 100%;
  display: flex;
  justify-content: center;
}
@media (min-width: 600px) {
  .note-list {
    padding: 2rem;
    margin: 0 auto;
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minmax(150px, 0.25fr));
    max-width: 1120px;
  }
}
</style>