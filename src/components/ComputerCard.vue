<i18n>
{
  "en-US": {
    "ipAdress": "Ip adress"
  },
  "fr-FR": {
    "ipAdress": "Adresse ip"
  }
}
</i18n>

<template>
  <div class="card">
    <h1>{{ computer.name }}</h1>
    <h2>{{ computer.ipAdress }}</h2>
    <dark-button-indicator class="button-wrapper" :on="computer.state" v-if="loaded" icon="&#xF011;"></dark-button-indicator>
    <card-loader v-else></card-loader>
  </div>
</template>

<script>
import WolBtn from '../components/Button.vue'
import CardLoader from '../components/CardLoader.vue'
import DarkButtonIndicator from './DarkButtonIndicator.vue'

export default {
  components: { WolBtn, CardLoader, DarkButtonIndicator },
  props: { computer: Object },
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    this.computer.state = false
    // eslint-disable-next-line no-undef
    this.$http.post(__PING_API_URL__, this.computer.ipAdress).then(response => {
      this.computer.state = (response.body === '1')
      this.loaded = true
    }, error => {
      this.computer.state = false
      console.log(error)
      this.loaded = true
    })
  }
}
</script>

<style lang="less" scoped>
  h1, h2 {
    color: lightgray;
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
.card {
  height: 340px;
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

  .button-wrapper {
    margin: 60px auto 0;
    width: 75px;
    height: 95px;
    position: relative;
    text-align: center;
  }
</style>
