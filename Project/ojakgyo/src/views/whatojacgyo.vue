<template>
    <div class="ojacgyo">
      <navigation/>
      <ojacgyoSource/>
    </div>
</template>
<script>
import ojacgyoSource from '@/components/whatsojacgyo.vue'
import navigation from '@/components/nav.vue'

export default {
  name: 'ojacgyo',
  components: {
    navigation,
    ojacgyoSource
  }
}
</script>
