<template>
    <div class="page">
        <sideNavMenu :sideNavOpen='sideNavOpen' />
        <div class="main">
            <button @click="sideNavOpen = !sideNavOpen">Menu</button>
            <div class="note-list">
                <SingleNote v-for="(note, index) in notes" :key="index" :note="note" />
            </div>
        </div>
        
    </div>
  
</template>

<script setup>
import sideNavMenu from '@/components/sideNavMenu.vue';
import SingleNote from '@/components/SingleNote.vue'
import { computed, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

const store = useStore()
const notes = computed(()=>store.state.notes)
const sideNavOpen = ref(false)
</script>

<style scoped>
.page{
    width:100%;
    overflow: hidden;
}
.note-list{
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