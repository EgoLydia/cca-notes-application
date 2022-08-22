<template>
  <div class="note-list">
    <SingleNote v-for="(note, index) in notes" :key="index" :note="note" />
  </div>
</template>

<script setup>
import SingleNote from '@/components/SingleNote.vue'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

const store = useStore()
const notes = computed(()=>store.state.notes)
</script>

<style scoped>
.note-list{
    padding:1rem;
    display: grid;
    gap:1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>