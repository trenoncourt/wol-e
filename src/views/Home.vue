<template>
  <div class="row top-lg top-xs">
    <div v-for="computer in computers" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <card class="top"></card>
    </div>
    <card></card>
  </div>
</template>

<script>
import WolBtn from '../components/Button.vue'
import Card from '../components/Card.vue'

export default {
  components: { WolBtn, Card },
  data () {
    return {
      computers: []
    }
  },
  mounted () {
    this.$computersResource = this.$resource('computers')
    this.$computersResource.get().then(response => {
      this.computers = response.body
    })
  }
}
</script>

<style lang="less" scoped>
@import '~@flexboxgrid';
</style>
