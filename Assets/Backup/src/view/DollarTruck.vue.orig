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
    <vue-like-dislike-buttons
      :likes="likes"
      :dislikes="dislikes"
      :likeChecked="likeChecked"
      :dislikeChecked="dislikeChecked"
      @like="like"
      @dislike="dislike"
    />
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
import VueLikeDislikeButtons from "vue-like-dislike-buttons";

export default {
      
    name: 'zombieCells',
    components: {
      navigation,
      chatbot,
      DollarTruckSource,
      VueLikeDislikeButtons
    },
    data() {
    return {
      likes: 0,
      dislikes: 0,
      likeChecked: false,
      dislikeChecked: false
    };
  },
  methods: {
    like() {
      this.likes += 1;
    },
    dislike() {
      this.dislikes -= 1;
    }
<<<<<<< HEAD
}
=======
  }
};
>>>>>>> origin/jiung

</script>

<style scope>
gameTime {
  color: #343A40;
}
</style>
