<template>
  <note-header></note-header>
  <single-note></single-note>
  <note-footer></note-footer>
</template>

<script>
import SingleNote from "@/components/SingleNote.vue";

export default {
  name: "NoteList",
  components: {
    SingleNote,
  },
};
</script>

<style scoped></style>
