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
      <button class="save_button">Save Note</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddNotes",
  data() {
    return {
      noteData: {
        title: "",
        content: "",
      },
    };
  },
  method: {
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
.note_details {
  margin-left: 120px;
}
.save_button {
  background: #2f7254;
  height: 40px;
  width: 118px;
  border-radius: 5px;
  font-size: 20px;
  color: white;
}
.btnSave {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-right: 125px;
}

/* Mobile View */

@media (max-width: 550px) {
  .textarea {
    display: flex;
    justify-content: center;
    font-size: 25px;
  }
  .save_button {
    background: #2f7254;
    height: 40px;
    width: 118px;
    border-radius: 5px;
    font-size: 20px;
    color: white;
    justify-content: center;
  }
  .note_details {
    margin-left: 20px;
  }
  /* .btnSave {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  } */
}
</style>
