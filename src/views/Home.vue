<template>
  <div class="row">
    <div v-for="computer in computers" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <wol-btn :on="true"></wol-btn>
    </div>
  </div>
</template>

<script>
import WolBtn from '../components/Button.vue'

export default {
  components: { WolBtn },
  data () {
    return {
      computers: [
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@flexboxgrid';
</style>
