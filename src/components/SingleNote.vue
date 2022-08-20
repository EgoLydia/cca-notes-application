<template>
  <div class="note-widget" @click="goToNotePad" :style="widgetColor">
    <h2 class="title">{{note.title.substring(0,20)}}</h2>
    <p>{{note.content}}</p>
    <div class="date">{{note.date}}</div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useRouter} from 'vue-router'
export default {
  props: {
    note:{
      type:Object
    }
  },
  setup(props) {
    const router = useRouter();
    
    
    const goToNotePad = ()=>{
      router.push({
        name:"Note-Editor",
        params:{
          id:props.note.id
        }
      })
    }

    const backgroundColors = ['#DC828F', '#F7CE76', '#E8D6CF', '#8C7386', '#9C9359']
    const randomColor = ()=>{
      const randIdx = Math.floor(Math.random() * backgroundColors.length + 1);
      return backgroundColors[randIdx]
    }
    const widgetColor = computed(()=>{
      return {
        'backgroundColor': randomColor()
      }
    })

    /*const setCurrentNote = ()=>{
      store.commit('setCurrentNote', props.note.id);
    }*/
    return{
      goToNotePad,
      widgetColor
    }
  }

}
</script>

<style scoped>
.note-widget{
  margin:10px;
  padding:0.8rem;
  font-size:0.6rem;
  width:50%;
  border-radius:10px;
  box-shadow: 0 0 2px #ccc;
}

.note-widget:hover{

  cursor: pointer;
}

.note-widget >p{
  width:100%;
  height:70px;
  overflow: hidden;
}
</style>