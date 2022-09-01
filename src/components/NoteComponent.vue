<template>
  <form>
      <h1>{{ noteContent.title }}</h1>
      <div class="note-pad">
        <p>{{ noteContent.content }}</p>
        <textarea type="text" v-model="noteText" @keypress.enter="saveNote" /><br><br>
        <EditButton/>
      </div>
  </form>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../config.js";
import EditButton from "./EditButton.vue";

export default {
    components: {
    EditButton
    },

    name: 'NoteComponent',

    data() {
      return {
        noteContent: '',
        noteText:''
      }
    },

    mounted() {
       this.getData();
    },

    methods: {
      getData() {
        axios
          .get(`${BASE_URL}/Notes/by-id/${this.note}`)
          .then(res => {
            this.noteContent = res.data;
          })
          .catch(err => console.log(err));
      },
    },

    computed: {
      note() {
        return this.$route.params.id;
      }
    },
};

</script>
<style scoped>
  h1{
    text-align: center;
  }
.note-pad {
  margin: 0 auto;
  width: 500px;
  text-align: center;
  box-shadow: 0px 2px 12px 5px #ccccccff;
  padding: 100px;
  border-radius: 10px;
}

textarea{
  width: 400px;
  height: 100px;
}

</style>
