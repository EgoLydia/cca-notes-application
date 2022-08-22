<template>
  <single-note></single-note>
  <SignUp/>
</template>

<script>
import SingleNote from '@/components/SingleNote.vue'
import SignUp from '../components/SignUp.vue';

export default {
  name: 'Home',
  components: {
    SingleNote,
    SignUp
  }
}
</script>
