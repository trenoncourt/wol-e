<i18n>
{
  "en-US": {
  },
  "fr-FR": {
  }
}
</i18n>

<template>
  <header class="header" v-click-outside="close">

    <a href="#" class="navbar-switcher" @click="open"></a>
    <a href="#" class="navbar-logo">Wol-e</a>

    <nav class="menu">
    </nav>

  </header>
</template>

<script>
import ClickOutside from '@/directives/ClickOutside'

export default {
  directives: {
    ClickOutside
  },
  methods: {
    close () {
      this.$emit('close')
    },
    open () {
      this.$emit('open')
    }
  }
}
</script>

<style lang="less" scoped>
@color_1: inherit;
@color_2: #fff;
@color_3: #c5cae9;
@font_family_1: 'Roboto', sans-serif;
@background_color_1: #546e7a;
@background_color_2: #3849a2;
@background_color_3: rgba(0, 0, 0, 0.6);

/* VARIABLES */
/* BASE */
/* HEADER */
/* MENU */
/* RESPONSIVE */
a {
	text-decoration: none;
	color: @color_1;
}
.container {
	overflow: hidden;
	*zoom: 1;
	margin: 0 20px;
}
.header {
	position: fixed;
	left: 0;
	right: 0;
	height: 66px;
	line-height: 66px;
	color: @color_2;
	background-color: @background_color_1;
}
.navbar-logo {
	font-weight: 700;
	padding: 0 25px;
	float: left;
}
.menu {
	float: left;
	a {
		padding: 0 10px;
		&:hover {
			color: @color_3;
		}
	}
}
@media only screen and (max-width: 768px) {
	.header {
		position: static;
	}
	.navbar-switcher {
		position: relative;
		display: block;
		float: left;
		width: 50px;
		height: 66px;
		cursor: pointer;
		&:after {
			content: '';
			position: absolute;
			display: block;
			width: 1rem;
			height: 0;
			top: 16px;
			left: 15px;
			box-shadow: 0 10px 0 1px #fff, 0 16px 0 1px #fff, 0 22px 0 1px #fff;
		}
	}
	.menu {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		background-color: @background_color_2;
		width: 250px;
		-webkit-transform: translateX(-250px);
		transform: translateX(-250px);
		a {
			display: block;
			height: 40px;
			text-align: center;
			line-height: 40px;
			border-bottom: 1px solid #3f51b5;
		}
	}
}
</style>
