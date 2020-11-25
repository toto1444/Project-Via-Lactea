<template>
  <div class="home">
    <navigation> </navigation>
    <img alt="Vue logo" src="../assets/logo.png">
    <mainPage></mainPage>
    <chatbot></chatbot>
  </div>
</template>

<script>
// @ is an alias to /src
import mainPage from '@/components/mainPage.vue'
import navigation from '@/components/nav.vue'
import chatbot from '@/components/chatbot.vue'

export default {
  name: 'Home',
  components: {
    mainPage,
    navigation,
    chatbot
  }
}
</script>

<style scope>

* {
  margin: 0px;
  padding: 0px;
}

</style>
