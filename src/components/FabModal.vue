<!--suppress CssRedundantUnit -->
<template>
  <div class="flex">:icon="'&#xf067;'"
    <dark-button id="fab-add-computer" class="fab-fixed" icon="&#xf067;" @click.native="openClose" :class="{opened: opened}" :on="opened" ></dark-button>
    <div class="modal"  >
      <div class="inner-modal">
        <div class="content">
          <slot>toto</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DarkButton from './DarkButton.vue'
  export default {
    components: {DarkButton},
    data () {
      return {
        opened: true
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
    .opened {
      top: -230px;
      left: -80px;
      transform: rotate(-49deg);
      transform-origin: 650%;
      & ~ .modal .inner-modal {
        width: 200vw;
        height: 200vw;
        .content {
          opacity: 1;
          transition-delay: .5s;
        }
      }
      &:active {
        top: -250px;
      }
    }
  }

  .fab-fixed{
    position: fixed;
    top: calc(~"100% - 95px");
    left: calc(~"100% - 95px");
    z-index: 2;
    transform-origin: 50%;
    transform: rotate(180deg);
    transition: all .7s ease;
    backface-visibility: hidden;
    box-shadow: 0px -3px 0px 0px rgb(34,34,34), 0px -7px 10px 0px rgb(17,17,17), inset 0px -1px 1px 0px rgba(250, 250, 250, .2), inset 0px 12px 35px 0px rgba(0, 0, 0, .5);
    &:active {
      top: calc(~"100% - 92px");
    }
    & > {
      text-align: center;
      line-height: 75px;
    }
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

</style>
