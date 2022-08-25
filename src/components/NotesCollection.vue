<template>
    <div class="note-list">
        <SingleNote v-for="(note, index) in notes" :key="index" :note="note" />
    </div>
</template>

<script setup>
import axios from 'axios'
import SingleNote from '@/components/SingleNote.vue'
import { onMounted, ref } from '@vue/runtime-core'
import { BASE_URL } from '../config.js'

onMounted(()=>{
    console.log('Notes Collection');
    fetchNotes()
})
const notes = ref([])
const fetchNotes = ()=>{
    axios.get(`${BASE_URL}/Notes`)
        .then((res) => {
            notes.value = res.data
        })
        .catch(err => console.log(err))
}
</script>

<style scoped>
.page{
    width:100%;
    overflow: hidden;
}
.note-list{
    margin:1.5rem 0;
    padding:1.5rem;
    display: grid;
    gap:1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

@media (min-width:630px) {
    .note-list{
        padding:2rem;
    }
}
</style>