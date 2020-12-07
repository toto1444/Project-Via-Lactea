<template>
  <div class="home">
    <navigation> </navigation> 
    <mainPage></mainPage>
    <srcHeader></srcHeader>
    <rank></rank>
    <src></src>
    <startScreenSource></startScreenSource><br>
    <chatbot></chatbot>
    <VueRealWave wavePosition="bottom" waveBackgoundColor="#fcfcfc" :waveColor="['#3ab2c4','#4db9bf','#60c0bb','#73c8b7']" :waveLayerCount="3" :space="100" :waveHeight="20" :waveGap="50">
    <div>
    <copyrightSource></copyrightSource>      
    </div>
    </VueRealWave>
  </div>
</template>

<script>
// @ is an alias to /src
import mainPage from '@/components/mainPage.vue'
import navigation from '@/components/nav.vue'
import chatbot from '@/components/chatbot.vue'
import srcHeader from '@/components/header1.vue'
import rank from '@/components/rank.vue'
import src from '@/components/source.vue'
import copyrightSource from '@/components/copyright.vue'
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
    copyrightSource,
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

</style>
