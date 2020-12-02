<template>
  <div class="home">
    <navigation> </navigation>
    <mainPage></mainPage>
    <srcHeader></srcHeader>
    <rank></rank>
    <src></src>
    <chatbot></chatbot>
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
export default {
  name: 'Home',
  components: {
    mainPage,
    navigation,
    chatbot,
    srcHeader,
    rank,
    src
  }
}
</script>

<style scope>

* {
  margin: 0px;
  padding: 0px;
}
</style>
