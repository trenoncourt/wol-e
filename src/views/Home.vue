<template>
  <div class="row top-lg top-xs">
    <loader :visible="loading"></loader>
    <div v-for="computer in computers" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <card class="top" :computer="computer"></card>
    </div>
    <fab-modal>

    </fab-modal>
  </div>
</template>

<script>
import WolBtn from '../components/Button.vue'
import Card from '../components/ComputerCard.vue'
import Loader from '../components/Loader.vue'
import FabModal from '../components/FabModal.vue'
import DarkButton from '../components/DarkButton.vue'
import DarkButtonIndicator from '../components/DarkButtonIndicator.vue'

export default {
  components: { WolBtn, Card, Loader, FabModal, DarkButton, DarkButtonIndicator },
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

<style lang="less">
  @import '~@flexboxgrid';

  html, body, #app {
    height:100%;
  }
</style>
