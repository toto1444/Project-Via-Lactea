<template>
  <div>
    <navigation></navigation>
    <chatbot></chatbot>
    <zombieSource></zombieSource>
    <VueMarkdown> # hello </VueMarkdown>
    <VueMarkdown> ## hello </VueMarkdown>
 </div>
 </template>




<script>
import navigation from '@/components/nav.vue'
import chatbot from '@/components/chatbot.vue'
import zombieSource from '@/components/zombieGame'
import VueMarkdown from 'vue-markdown'

export default {
      
    name: 'zombieCells',
    components: {
      navigation,
      chatbot,
      zombieSource,
      VueMarkdown
    }

}

</script>

<style scope>

gameTime {
  color: #343A40;
}

</style>
