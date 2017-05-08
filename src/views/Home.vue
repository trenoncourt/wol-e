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
import Card from '../components/Card.vue'
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
      let promises = []
      let computers = response.body
      for (let computer of computers) {
        // eslint-disable-next-line no-undef
        promises.push(this.$http.post(__PING_API_URL__, computer.ipAdress).then(response => {
          computer.state = (response.body === '1')
        }, error => {
          computer.state = false
          console.log(error)
        }))
      }
      Promise.all(promises).then(values => {
        this.computers = computers
      })
      response.json().then(json => {
        this.computers
      })
      this.loading = false
    })
  }
}
</script>

<style lang="less" scoped>
@import '~@flexboxgrid';
</style>
