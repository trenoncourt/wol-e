<template>
  <div class="row top-lg top-xs">
    <loader :visible="loading"></loader>

    <div v-for="computer in computers" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <card class="top" :computer="computer"></card>
    </div>
  </div>
</template>

<script>
import WolBtn from '../components/Button.vue'
import Card from '../components/ComputerCard.vue'
import Loader from '../components/Loader.vue'

export default {
  components: { WolBtn, Card, Loader },
  data () {
    return {
      computers: [],
      loading: true
    }
  },
  mounted () {
    this.$computersResource = this.$resource('computers')
    this.$computersResource.get().then(response => {
      let computers = response.body
      for (let computer of computers) {
        computer.state = false
      }
      this.computers = computers
      this.loading = false
    })
  }
}
</script>

<style lang="less" scoped>
@import '~@flexboxgrid';
</style>
