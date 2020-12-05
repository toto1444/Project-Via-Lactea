<template>
  <div>
    <navigation></navigation>
    <chatbot></chatbot>
    <zombieSource></zombieSource>
    <commentSource></commentSource>
    <comment-grid
  baseURL="https://ojacgyo-70cbb-default-rtdb.firebaseio.com"
  apiKey="AIzaSyDADfelpq1NdJPHWslwZQu92mWaHnptZlo"
  nodeName="ojacgyo">
</comment-grid>
 </div>
 </template>




<script>
import navigation from '@/components/nav.vue'
import chatbot from '@/components/chatbot.vue'
import zombieSource from '@/components/zombieGame'

export default {
      
    name: 'zombieCells',
    components: {
      navigation,
      chatbot,
      zombieSource,
    }

}

</script>

<style scope>

gameTime {
  color: #343A40;
}
</style>
