<!--suppress CssRedundantUnit -->
<template>
  <div class="flex">
    <a href="#" @click.prevent="openClose" :class="{ opened: opened }">+</a>
    <div class="modal" v-if="opened">
      <div class="inner-modal">
        <div class="content">
          <h1>Modal Content</h1>
          <p>Pretty nifty.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        opened: false
      }
    },
    methods: {
      openClose () {
        this.opened = !this.opened
      }
    }
  }
</script>

<style lang="less" scoped>
  @color_1: rgb(37,37,37);
  @color_2: #fff;
  @font_family_1: "FontAwesome";
  @background_color_1: rgb(83,87,93);
  @background_color_2: rgb(26,27,29);
  @background_color_3: rgb(226,0,0);
  @background_color_4: rgb(135,187,83);

  .display-none {
    display: none;
  }

  @import url('http://fonts.googleapis.com/css?family=Pacifico|Open+Sans:300');
  * {
    box-sizing: border-box;
    font-family: 'Open Sans',sans-serif;
    font-weight: 300;
  }
  h1 {
    font-family: 'Pacifico',cursive;
    font-weight: 400;
    font-size: 2.5em;
    margin-bottom: 0;
  }
  .flex {
    display: flex;
  }
  .modal {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  .inner-modal {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    background: #01579B;
    width: 0;
    height: 0;
    transition: all .4s ease-in .4s;
    backface-visibility: hidden;
  .content {
    opacity: 0;
    transition: opacity .4s ease;
    backface-visibility: hidden;
    color: #fefefe;
    text-align: center;
    max-width: 90vw;
    max-height: 90vh;
  }
  }
  }

  a {
    font-family: @font_family_1;
    text-shadow: 0 1px 1px rgba(250,250,250,0.1);
    font-size: 32pt;
    display: block;
    position: fixed;
    top: calc(~"100% - 95px");
    left: calc(~"100% - 95px");
    text-decoration: none;
    box-shadow: 0 3px 0 0 rgb(34,34,34), 0 7px 10px 0 rgb(17,17,17), inset 0 1px 1px 0 rgba(250, 250, 250, .2), inset 0px -12px 35px 0px rgba(0, 0, 0, .5);
    width: 70px;
    height: 70px;
    border: 0;
    color: @color_1;
    border-radius: 35px;
    text-align: center;
    line-height: 79px;
    background-color: @background_color_1;
  }
  a.on {
    box-shadow: 0 0px 0px 0px rgb(34,34,34), 0px 3px 7px 0px rgb(17,17,17), inset 0px 1px 1px 0px rgba(250, 250, 250, .2), inset 0px -10px 35px 5px rgba(0, 0, 0, .5);
    background-color: @background_color_1;
    top: 3px;
    color: @color_2;
    text-shadow: 0px 0px 3px rgb(250,250,250);
    &:before {
      top: -5px;
      background-color: @background_color_2;
      box-shadow: 0px 1px 0px 0px rgba(250,250,250,0.1), inset 0px 1px 2px rgba(0, 0, 0, 0.5);
    }
    &+span {
      box-shadow: inset 0px 1px 0px 0px rgba(250,250,250,0.5), 0px 0px 3px 2px rgba(135,187,83,0.5);
      background-color: @background_color_4;
    }
  }
</style>
