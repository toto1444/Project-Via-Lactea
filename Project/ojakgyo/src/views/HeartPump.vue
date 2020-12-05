<template>
  <div>
    <navigation></navigation>
    <chatbot></chatbot>
    <HeartPumpSource></HeartPumpSource>
 </div>
 </template>




<script>
import navigation from '@/components/nav.vue'
import chatbot from '@/components/chatbot.vue'
import HeartPumpSource from '@/components/HeartPump'

export default {
      
    name: 'zombieCells',
    components: {
      navigation,
      chatbot,
      HeartPumpSource,
    }

}

</script>

<style scope>

gameTime {
  color: #343A40;
}
</style>
