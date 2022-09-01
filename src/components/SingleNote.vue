<template>
  <div class="note-widget" :style="widgetColor">
    <h2 class="title">{{ note.title.substring(0, 15) }}</h2>
    <p>{{ note.content }}</p>
    <div class="wrap">
      <div class="date">{{ formatDate(note.updatedDate) }}</div>
      <button :style="widgetColor" @click="deleteNote(note.noteId)">
        <i class="ri-delete-bin-6-line"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { colors } from "../config.js";
// import { BASE_URL } from "../config.js";
import { useStore } from "vuex";

export default {
  props: {
    note: {
      type: Object,
    },
  },
  setup() {
    const store = useStore();
    const colorList = colors;
    const formatDate = dateString => {
      return new Date(dateString).toLocaleDateString();
    };
    const randomColor = computed(() => {
      const randIdx = Math.floor(Math.random() * colorList.length + 1);
      return colorList[randIdx];
    });
    const widgetColor = computed(() => {
      return {
        backgroundColor: randomColor.value,
      };
    });
    const deleteNote = id => {
      store.dispatch("deleteNoteById", id);
      console.log("deleteNoteById");
    };
    // const deleteNote = id => {
    //   console.log(props.note);
    //   axios.delete(`${BASE_URL}/Notes?id=` + id).then(() => {
    //     console.log("delete");
    //     store.dispatch("noteDeleted");
    //   });
    // };

    return {
      widgetColor,
      formatDate,
      deleteNote,
    };
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  border: none;
  font-size: 18px;
}
.note-widget {
  padding: 0.8rem;
  font-size: 0.6rem;
  border-radius: 10px;
  box-shadow: 0 0 2px #ccc;
  height: 150px;
  display: flex;
  flex-direction: column;
}

.note-widget:hover {
  transform: scale(1.05);
  cursor: pointer;
}
button:hover {
  cursor: pointer;
}

.note-widget > p {
  width: 100%;
  height: 60%;
  overflow: hidden;
}
</style>
