<template>
    <NoteComponent></NoteComponent>
</template>

<script>
import NoteComponent from '../components/NoteComponent.vue';

export default {
  name: 'NoteComponentPage',
  
  components: {
    NoteComponent,
  },

  props: {
      id: {
        required: true,
      }
    },
}
</script>
