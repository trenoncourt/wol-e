<template>
  <div id="app" :class="{ 'sidebar-open': navbarOpen }">
    <navbar @close="onNavbarClosed" @open="onNavbarOpen"></navbar>
    <router-view class="site-content"></router-view>
    <div :class="{ 'overlay': navbarOpen }"></div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      navbarOpen: false
    }
  },
  methods: {
    onNavbarClosed () {
      this.navbarOpen = false
      console.log('nb close')
    },
    onNavbarOpen () {
      this.navbarOpen = true
      console.log('nb open')
    }
  }
}
</script>

<style lang="less">
@import "./assets/less/common.less";
#app {
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.site-content {
	padding-top: 66px;
  margin-left: 20px !important;
  margin-right: 20px !important;
}
@media only screen and (max-width: 768px) {
@background_color_3: rgba(0, 0, 0, 0.6);
  #app.sidebar-open {
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transform: translateX(250px);
    transform: translateX(250px);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: @background_color_3;
		}
}
</style>
