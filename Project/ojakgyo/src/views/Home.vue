<template>
  <div class="home">
    <navigation> </navigation>
    <mainPage></mainPage>
    <srcHeader></srcHeader>
    <rank></rank>
    <src></src>
    <startScreenSource></startScreenSource>
    <chatbot></chatbot>
    <div>
      <p class="pr"> toto1444/Project-Via-Lactea is licensed under the </p> 
      <h4> GNU General Public License v3. </h4><br>
      <p class="pr"> Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.</p><br>
    </div>
    <div>
      <div class="copyDiv">
        <h4> Permissions </h4>
        <ul class="copyLi">
          <li> <img src="../assets/done-24px.svg"/> Commercial use </li>
          <li> <img src="../assets/done-24px.svg"/> Modification </li>
          <li> <img src="../assets/done-24px.svg"/> Distribution </li>
          <li> <img src="../assets/done-24px.svg"/> Patent use </li>
          <li> <img src="../assets/done-24px.svg"/> Private use </li>
          </ul>
      </div>
      <div class="copyDiv">
        <h4> Limitations </h4>
        <ul class="copyLi">
          <li> <img src="../assets/clear-24px.svg" /> Liablility </li>
          <li> <img src="../assets/clear-24px.svg" /> Warranty </li>
        </ul>
      </div>
      <div class="copyDiv">
        <h4> Conditions </h4>
        <ul class="copyLi">
          <li> <img src="../assets/search-24px.svg" /> License and copyright notice </li>
          <li> <img src="../assets/search-24px.svg" /> State change </li>
          <li> <img src="../assets/search-24px.svg" /> Disclose source </li>
          <li> <img src="../assets/search-24px.svg" /> Same license </li>
        </ul>
      </div>
    </div>
    <VueRealWave wavePosition="bottom" waveBackgoundColor="#fcfcfc" :waveColor="['#3ab2c4','#4db9bf','#60c0bb','#73c8b7']" :waveLayerCount="3" :space="100" :waveHeight="20" :waveGap="50"><br>
  </VueRealWave>
  </div>
</template>

<script>
// @ is an alias to /src
import mainPage from '@/components/mainPage.vue'
import navigation from '@/components/nav.vue'
import chatbot from '@/components/chatbot.vue'
import srcHeader from '@/components/header.vue'
import rank from '@/components/rank.vue'
import src from '@/components/source.vue'
//import copyright from '@/components/copyright.vue'
import startScreenSource from '@/components/startScreen.vue'
import VueRealWave from 'vue-real-wave'


export default {
  name: 'Home',
  
  components: {
    mainPage,
    navigation,
    chatbot,
    srcHeader,
    rank,
    src,
//    copyright,
    startScreenSource,
    VueRealWave
  }
}
</script>

<style scope>

* {
  margin: 0px;
  padding: 0px;
}

.copyLi li {
  
  font-size: 13px;
  

}
.pr {
  font-size: 12px;
  color: #586069
}
.copyDiv {

  width: 33%;
}
</style>
