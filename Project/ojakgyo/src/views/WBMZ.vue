<template>
  <div>
    <navigation></navigation>
    <chatbot></chatbot>
    <WBMZsource></WBMZsource>
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
import WBMZsource from '@/components/WhatBeautifulMyZoo.vue'

export default {
      
    name: 'WBMZ',
    components: {
      navigation,
      chatbot,
      WBMZsource,
    }

}

</script>

<style scope>

gameTime {
  color: #343A40;
}
</style>
