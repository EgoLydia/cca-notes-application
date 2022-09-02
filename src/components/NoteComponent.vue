<template>
  <form class="note-pad" @submit.prevent="updateNote">
    <label>Change your note title below</label><br><br>
    <input v-model="noteTitle" />
      <div>
        <p>{{ noteContent.content }}</p>
        <br><br>
        <button type="submit" class="btn">save</button>
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
        noteTitle: ''
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
            this.noteTitle = res.data.title;
          })
          .catch(err => console.log(err));
      },
      updateNote() {
        // 'https://ccsanotes-api.azurewebsites.net/Notes/title?id=20750d7a-1e86-490d-a1db-af03013880d7&title=bible'
        axios
        .put(`${BASE_URL}/Notes/title?title?id=${this.noteContent.noteId}&title=${this.noteTitle}`,
          {
            id: this.noteContent.noteId,
            title: this.noteTitle
          })
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
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

input {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 300px;
}
.note-pad {
  margin: 0 auto;
  width: 500px;
  text-align: center;
  padding: 100px;
  border-radius: 10px;
}
.btn {
  background-color: #e4fff3;
  border-radius: 10px;
  border: none;
  padding: 10px;
  width: 80px;
  transition: 0.5s;
}
.btn:hover {
  transform: scale(1.15);
  transition: 0.5s;
  background-color: #7da794;
  color: white;
  cursor: pointer;
}

</style>
