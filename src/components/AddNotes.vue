<template>
  <form>
    <div class="note_details">
      <input
        class="title"
        type="text"
        placeholder="Edit Note Title"
        id="note_title"
        v-model="noteData.title"
        required
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
        required
      ></textarea>
    </div>

    <div class="btnSave">
      <button class="save_button" @click.prevent="createNote">Save Note</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddNotes",
  data() {
    return {
      noteData: {
        creatorUserId: "f7a268ad-ab83-42dd-8599-aef400943033",
        title: "",
        content: "",
        groupName: 0,
      },
    };
  },

  methods: {
    async createNote() {
      await this.$store.dispatch("createNote", this.noteData);
      this.$store.dispatch("fetchNotes");
      this.noteListRoute();
    },
    noteListRoute() {
      this.$router.push({ path: "/note-list" });
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
  height: 40px;
  width: 118px;
  border-radius: 5px;
  font-size: 18px;
  background: #2f7254;
  color: #ffffff;
  border: none;
}
.save_button:hover {
  background: #5e8b77;
  font-size: 18px;
  transition-delay: 0.3s;
}
.btnSave {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: white;
}

/* Mobile View */

@media (max-width: 550px) {
  .textarea {
    display: flex;
    justify-content: center;
    font-size: 25px;
  }
  .save_button {
    font-size: 18px;
    justify-content: center;
    background: #2f7254;
  }
  .note_details {
    margin-left: 20px;
  }
  .save_button:hover {
    font-size: 18px;
    background: #5e8b77;

    border: none;
  }
  .btnSave {
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: white;
  }
}
</style>
