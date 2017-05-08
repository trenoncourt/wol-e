<template>
  <div class="card">
    <wol-btn :on="computer.state"></wol-btn>
  </div>
</template>

<script>
import WolBtn from '../components/Button.vue'

export default {
  components: { WolBtn },
  props: { computer: Object },
  mounted () {
    this.computer.state = false
    // eslint-disable-next-line no-undef
    this.$http.post(__PING_API_URL__, this.computer.ipAdress).then(response => {
      this.computer.state = (response.body === '1')
    }, error => {
      this.computer.state = false
      console.log(error)
    })
  }
}
</script>

<style lang="less" scoped>
.card {
  background: rgba(50, 50, 50, 0.1);
  max-width: 400px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px
    rgba(0, 0, 0, 0.23);
  box-sizing: border-box;
  padding: 48px;
  text-align: center;
}
</style>
