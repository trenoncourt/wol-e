<template>
  <div>
    <wol-btn :on="true"></wol-btn>
  </div>
</template>

<script>
import WolBtn from '../components/Button.vue'

export default {
  components: { WolBtn },
  data () {
    return {
      computers: []
    }
  }
}
</script>

<style scoped>

</style>
