<template>
  <div>
    <textarea name="" id="" cols="30" rows="10" v-model="currentNoteContent"></textarea>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
export default {
    setup(){
        const route = useRoute();
        const store = useStore();
        const currentNoteContent = ref('');
        const currentNote = ref('')
        onMounted(()=>{
            currentNote.value = store.getters.getNoteById(route.params.id);
            currentNoteContent.value = currentNote.value.content;
        })
        return{
            currentNoteContent,
        }
    }
}
</script>

<style scoped>

</style>