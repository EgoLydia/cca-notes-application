<template>
  <note-header></note-header>
  <single-note></single-note>
  <note-footer></note-footer>
</template>

<script>
import SingleNote from "@/components/SingleNote.vue";
import NoteHeader from "@/components/NoteHeader.vue";
import NoteFooter from "@/components/NoteFooter.vue";

export default {
  name: "NoteList",
  components: {
    SingleNote,
    NoteHeader,
    NoteFooter,
  },
};
</script>

<style scoped></style>
