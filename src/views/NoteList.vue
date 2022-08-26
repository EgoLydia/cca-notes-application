<template>
  <div>
    <NoteHeader />
    <NotesCollection />
    <NoteFooter />
  </div>
</template>

<script>
import NoteHeader from "@/components/NoteHeader.vue";
import NotesCollection from "../components/NotesCollection.vue";
import NoteFooter from "@/components/NoteFooter.vue";
export default {
  components: {
    NotesCollection,
    NoteHeader,
    NoteFooter,
  },
};
</script>

<style scoped></style>
