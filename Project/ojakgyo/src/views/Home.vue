<template>
  <div class="home">
    <navigation> </navigation>
    <mainPage></mainPage>
    <srcHeader></srcHeader>
    <rank></rank>
    <src></src>
    <startScreenSource></startScreenSource>
    <chatbot></chatbot>
    <VueRealWave wavePosition="bottom" waveBackgoundColor="#fcfcfc" :waveColor="['#3ab2c4','#4db9bf','#60c0bb','#73c8b7']" :waveLayerCount="3" :space="200" :waveHeight="20" :waveGap="50"><br>
    <div>
      <p class="pr"> toto1444/Project-Via-Lactea is licensed under the </p> 
      <h4> GNU General Public License v3. </h4><br>
      <p class="pr"> Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.</p>
      <h4> Permissions </h4>
      <ul>
        <li><i class="fas fa-check"/>Commercial use </li>
        <li>    <font-awesome-icon icon="user-secret" /> Modification </li>
        <li> Distribution </li>
        <li> Patent use </li>
        <li> Private use </li>
        </ul>
    </div>
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
.pr {
  font-size: 12px;
  color: #586069
}

</style>
