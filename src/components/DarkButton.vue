<!--suppress CssRedundantUnit -->
<template>
  <a href="#">&#xf067;</a>
</template>

<style lang="less" scoped>
  @color_icon: rgb(37,37,37);
  @color_light: #fff;

  @background_button_color: rgb(83,87,93);
  @background_button_back_color: rgb(26,27,29);

  @font-face {
    font-family: "FontAwesome";
    font-weight: normal;
    font-style: normal;
  }

  a {
    font-family: "FontAwesome";
    text-shadow: 0px 1px 1px rgba(250,250,250,0.1);
    font-size: 32pt;
    display: block;
    position: relative;
    text-decoration: none;
    box-shadow: 0px 3px 0px 0px rgb(34,34,34), 0px 7px 10px 0px rgb(17,17,17), inset 0px 1px 1px 0px rgba(250, 250, 250, .2), inset 0px -12px 35px 0px rgba(0, 0, 0, .5);
    width: 70px;
    height: 70px;
    border: 0;
    color: @color_icon;
    border-radius: 35px;
    text-align: center;
    line-height: 79px;
    background-color: @background_button_color;
    transition: color 350ms ease, text-shadow 350ms;
    -o-transition: color 350ms ease, text-shadow 350ms;
    -moz-transition: color 350ms ease, text-shadow 350ms;
    -webkit-transition: color 350ms ease, text-shadow 350ms;
    &:before {
      content: "";
      width: 80px;
      height: 80px;
      display: block;
      z-index: -2;
      position: absolute;
      background-color: @background_button_back_color;
      left: -5px;
      top: -2px;
      border-radius: 40px;
      box-shadow: 0px 1px 0px 0px rgba(250,250,250,0.1), inset 0px 1px 2px rgba(0, 0, 0, 0.5);
    }
    &:active {
      box-shadow: 0px 0px 0px 0px rgb(34,34,34), 0px 3px 7px 0px rgb(17,17,17), inset 0px 1px 1px 0px rgba(250, 250, 250, .2), inset 0px -10px 35px 5px rgba(0, 0, 0, .5);
      background-color: @background_button_color;
      top: 3px;
      &:before {
        top: -5px;
        background-color: @background_button_back_color;
        box-shadow: 0px 1px 0px 0px rgba(250,250,250,0.1), inset 0px 1px 2px rgba(0, 0, 0, 0.5);
      }
    }
  }
  a.on {
    box-shadow: 0 0px 0px 0px rgb(34,34,34), 0px 3px 7px 0px rgb(17,17,17), inset 0px 1px 1px 0px rgba(250, 250, 250, .2), inset 0px -10px 35px 5px rgba(0, 0, 0, .5);
    background-color: @background_button_color;
    top: 3px;
    color: @color_light;
    text-shadow: 0px 0px 3px rgb(250,250,250);
  }
</style>
