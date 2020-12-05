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
    <zombieSource></zombieSource>
    <commentSource></commentSource>
    <VueLikeDislikeButtonsSource></VueLikeDislikeButtonsSource>
    <vue-like-dislike-buttons :likes="876547" :dislikes="4567" likeChecked />
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
import zombieSource from '@/components/zombieGame.vue'
import VueLikeDislikeButtons from 'vue-like-dislike-buttons'


export default {
      
    name: 'zombieCells',
    components: {
      navigation,
      chatbot,
      zombieSource,
      VueLikeDislikeButtons
    }

}

</script>

<style scope>

gameTime {
  color: #343A40;
}
</style>
