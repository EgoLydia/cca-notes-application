<template>
  <form>
      <h1>{{ noteContent.title }}</h1>
      <div class="note-pad">
        <p>{{ noteContent.content }}</p>
        <textarea placeholder="Edit your note" type="text" v-model="noteText" @keypress.enter="saveNote" /><br><br>
        <button class="btn">save</button>
      </div>
  </form>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../config.js";

export default {
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
  padding: 100px;
  border-radius: 10px;
}

textarea{
  width: 400px;
  height: 100px;
}
.btn {
  padding: 5px;
  width: 80px;
  transition: 0.5s;
}
.btn:hover {
  transform: scale(1.15);
  transition: 0.5s;
}

</style>
