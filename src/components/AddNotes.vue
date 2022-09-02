<template>
  <form @submit.prevent="createNote">
    <div class="note_details">
      <input
        class="title"
        type="text"
        placeholder="Edit Note Title"
        id="note_title"
        v-model="noteData.title"
      />
    </div>
    <div class="textarea">
      <textarea
        name="note_content"
        id="note_content"
        cols="118"
        rows="17"
        placeholder="Note Something Down Here"
        v-model="noteData.content"
      ></textarea>
    </div>

    <div class="btnSave">
      <button type="submit" class="save_button">Save Note</button>
    </div>
  </form>
</template>

<script>
// import { mapGetters, mapMutations, mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "AddNotes",
  data() {
    return {
      noteData: {
        creatorUserId: "27dd9087-f8de-4ae3-a301-af03013e294c",
        title: "",
        content: "",
        groupName: 0,
      },
    };
  },
  computed: {
    // ...mapGetters(["noteData"]),
    // ...mapState(["noteData"]),
  },
  methods: {
    // ...mapMutations(["setNoteData"]),
    // ...mapActions(["getUserbyId", "createNote"]),

    createNote() {
      axios
        .post(
          "https://ccsanotes-api.azurewebsites.net/Notes/create-note",
          this.noteData
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
/* Laptop / Desktop*/
form {
  max-width: 1120px;
  margin: 0 auto;
}
.title {
  border: none;
  outline: none;
  font-size: 25px;
  font-weight: bold;
}
#note_content {
  font-size: 16px;
  margin: 10px;
}
.textarea {
  display: flex;
  justify-content: center;
}
textarea {
  resize: none;
  padding: 20px;
  font-size: 30px;
}
.save_button {
  background: #e4fff3;
  height: 40px;
  width: 118px;
  border-radius: 5px;
  font-size: 20px;
}
.btnSave {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-right: 10px;
}

/* Mobile View */

@media (max-width: 550px) {
  .textarea {
    display: flex;
    justify-content: center;
    font-size: 25px;
  }
  .save_button {
    font-size: 20px;
    justify-content: center;
  }
  .note_details {
    margin-left: 20px;
  }
}
</style>
