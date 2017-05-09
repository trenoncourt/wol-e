<!--suppress CssRedundantUnit -->
<template>
  <div>
    <dark-button :on="on" :icon="icon"></dark-button>
    <span></span>
  </div>
</template>

<script>
  import DarkButton from './DarkButton.vue'
  export default {
    components: { DarkButton },
    props: {
      on: Boolean,
      icon: String
    }
  }
</script>

<style lang="less" scoped>
  @background_color_3: rgb(226,0,0);
  @background_color_4: rgb(135,187,83);

  a+span {
    display: block;
    width: 8px;
    height: 8px;
    background-color: @background_color_3;
    box-shadow: inset 0px 1px 0px 0px rgba(250,250,250,0.5), 0px 0px 3px 2px rgba(226,0,0,0.5);
    border-radius: 4px;
    clear: both;
    position: absolute;
    bottom: 0;
    left: 42%;
    transition: background-color 350ms, box-shadow 700ms;
    -o-transition: background-color 350ms, box-shadow 700ms;
    -moz-transition: background-color 350ms, box-shadow 700ms;
    -webkit-transition: background-color 350ms, box-shadow 700ms;
  }

  a.on+span {
    box-shadow: inset 0px 1px 0px 0px rgba(250,250,250,0.5), 0px 0px 3px 2px rgba(135,187,83,0.5);
    background-color: @background_color_4;
  }
</style>
