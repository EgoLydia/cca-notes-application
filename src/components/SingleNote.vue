<template>
  <router-link class="router" :to="`/note-component-page/${note.noteId}`">
    <div class="note-widget" @click="getData()" :style="widgetColor">
      <h2 class="title">{{ note.title.substring(0, 15) }}</h2>
      <p>{{ note.content }}</p>
      <div class="date">{{ formatDate(note.updatedDate) }}</div>
    </div>
  </router-link>
  
</template>

<script>
//import {colors} from "../colors"
import { computed } from "@vue/runtime-core";
import { colors } from "../config.js";
export default {
  name: 'SingleNote',
  props: {
    note: {
      type: Object,
    },
  },
  

  methods: {
      getData() {
        // let router = useRouter();
        this.$router.push({
          name:"note-component-page",
          params:{
            id:this.note.noteId
          }
        })
      }
  },

  setup() {
    const store = useStore();
    const colorList = colors;
    /*const goToNotePad = ()=>{
      router.push({
        name:"Note-Editor",
        params:{e
          id:props.note.noteId
        }
      })
    }*/
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
  height: 130px;
  display: flex;
  flex-direction: column;
}

.note-widget:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.note-widget > p {
  width: 100%;
  height: 60%;
  overflow: hidden;
}

.router {
  text-decoration: none;
}
</style>
