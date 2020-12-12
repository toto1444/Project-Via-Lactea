<template>
    <div class="ojakgyo">
      <navigation/>
      <ojakgyoSource/>
    </div>
</template>
<script>
import ojakgyoSource from '@/components/whatsojakgyo.vue'
import navigation from '@/components/nav.vue'

export default {
  name: 'ojakgyo',
  components: {
    navigation,
    ojakgyoSource
  }
}
</script>
