<template>
  <div class="router" @click="editNote">
    <div class="note-widget" :style="widgetColor">
      <h2 class="title">{{ note.title.substring(0, 15) }}</h2>
      <p>{{ note.content }}</p>
      <div class="wrap">
        <div class="date">{{ formatDate(note.updatedDate) }}</div>
        <button :style="widgetColor" @click.stop="deleteNote(note.noteId)">
          <i class="ri-delete-bin-6-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { colors } from "../config.js";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  props: {
    note: {
      type: Object,
    },
  },
  setup(props) {
    const router = useRouter();
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
    };

    const editNote = () => {
      router.push(`/note-component-page/${props.note.noteId}`);
    };
    return {
      widgetColor,
      formatDate,
      deleteNote,
      editNote,
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
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
}
button:hover {
  cursor: pointer;
}
.note-widget > p {
  width: 100%;
  height: 60%;
  overflow: hidden;
}
.note-widget:hover {
  transform: scale(1.05);
  cursor: pointer;
  transition: 0.5s;
}
.router {
  text-decoration: none;
}
</style>
