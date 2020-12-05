<template>
  <div>
    <navigation></navigation>
    <chatbot></chatbot>
    <DollarTruckSource></DollarTruckSource>
    <comment-grid
  baseURL="https://ojacgyo-70cbb-default-rtdb.firebaseio.com"
  apiKey="AIzaSyDADfelpq1NdJPHWslwZQu92mWaHnptZlo"
  nodeName="ojacgyo">
  </comment-grid>
  </div>
 </template>


    <script src="https://www.powr.io/powr.js?platform=vuejs"></script>

<script>
import navigation from '@/components/nav.vue'
import chatbot from '@/components/chatbot.vue'
import DollarTruckSource from '@/components/DollarTruck.vue'

export default {
      
    name: 'zombieCells',
    components: {
      navigation,
      chatbot,
      DollarTruckSource,
    }

}

</script>

<style scope>

gameTime {
  color: #343A40;
}
</style>
