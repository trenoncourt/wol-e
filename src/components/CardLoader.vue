<template>
  <div class='loader'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
  @keyframes loader {
    50% {
      filter: blur(5px);
      transform: translateY(-10px);
      opacity: 0.3;
    }
  }
  .loader {
    height: 15px;
    width: 100px;
    margin: 45% auto auto;
  }

  .loader > div {
    height: 15px;
    width: 15px;
    background-color: #eee;
    float: left;
    margin: 0 5px 0 0;
    animation: loader 0.7s infinite;
    opacity: 0.5;
    border-radius: 10%;
  }

  .loader > div:nth-child(1) {
    animation-delay: 0.1s;
  }

  .loader > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  .loader > div:nth-child(3) {
    animation-delay: 0.3s;
  }

  .loader > div:nth-child(4) {
    animation-delay: 0.4s;
  }

  .loader > div:nth-child(5) {
    animation-delay: 0.5s;
  }
</style>
