<template>
  <note-header></note-header>
  <single-note></single-note>
  <note-footer></note-footer>
</template>

<script>
import NoteHeader from "@/components/NoteHeader.vue";
import SingleNote from "@/components/SingleNote.vue";
import NoteFooter from "@/components/NoteFooter.vue";

export default {
  name: "NoteList",
  components: {
    NoteHeader,
    SingleNote,
    NoteFooter,
  },
};
</script>

<style scoped></style>
