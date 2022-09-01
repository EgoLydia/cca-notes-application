<template>
  <div class="note-widget" :style="widgetColor">
    <h2 class="title">{{ note.title.substring(0, 15) }}</h2>
    <p>{{ note.content }}</p>
    <div class="date">{{ formatDate(note.updatedDate) }}</div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { colors } from "../config.js";
export default {
  props: {
    note: {
      type: Object,
    },
  },
  setup() {
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
    return {
      widgetColor,
      formatDate,
    };
  },
};
</script>

<style scoped>
.note-widget {
  padding: 0.8rem;
  font-size: 0.6rem;
  border-radius: 10px;
  box-shadow: 0 0 2px #ccc;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
</style>
