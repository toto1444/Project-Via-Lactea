<!--
코드 제작 한지웅
-  댓글기능 구현, 소스코드 작성

스토리 제작 강성룡 
- 스토리 보드 

버그 제거 안아현
-->

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
