<template>
  <div>
    <navigation></navigation>
    <chatbot></chatbot>
    <DollarTruckSource></DollarTruckSource>
 </div>
 </template>




<script>
import navigation from '@/components/nav.vue'
import chatbot from '@/components/chatbot.vue'
import DollarTruckSource from '@/components/DollarTruck.vue'

export default {
      
    name: 'zombieCells',
    components: {
      navigation,
      chatbot,
      DollarTruckSource
    }

}

</script>

<style scope>

gameTime {
  color: #343A40;
}
</style>
