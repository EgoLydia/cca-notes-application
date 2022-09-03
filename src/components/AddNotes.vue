<template>
  <form @submit.prevent="createNote">
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
      <button class="save_button">
        <router-link to="/note-list" type="submit">Save Note</router-link>
      </button>
    </div>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const noteData = ref({
      creatorUserId: "27dd9087-f8de-4ae3-a301-af03013e294c",
      title: "",
      content: "",
      groupName: 0,
    });

    const createNote = (noteData) => {
      store.dispatch("createNote", noteData);
      console.log("createNote");
    };
    return {
      createNote,
      noteData,
    };
  },
};

// import axios from "axios";

// export default {
//   name: "AddNotes",
//   data() {
//     return {
//       noteData: {
//         creatorUserId: "27dd9087-f8de-4ae3-a301-af03013e294c",
//         title: "",
//         content: "",
//         groupName: 0,
//       },
//     };
//   },

//   methods: {
//     createNote() {
//       axios
//         .post(
//           "https://ccsanotes-api.azurewebsites.net/Notes/create-note",
//           this.noteData
//         )
//         .then((response) => console.log(response))
//         .catch((error) => console.log(error));
//     },
//   },
// };
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
