<template>
  <div>
    <div class=" loader"  v-if="notes.length == 0">
        <NotesLoader />
      </div>
    <div class="note-list">
      <SingleNote v-for="(note, index) in notes" :key="index" :note="note" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import SingleNote from "@/components/SingleNote.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { BASE_URL } from "../config.js";
import NotesLoader from "./NotesLoader.vue";

onMounted(() => {
  fetchNotes();
});
const notes = ref([]);
const fetchNotes = () => {
  axios
    .get(`${BASE_URL}/Notes`)
    .then(res => {
      notes.value = res.data;
    })
    .catch(err => console.log(err));
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

.loader{
  width:100%;
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
