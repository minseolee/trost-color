// src/views/Home.vue

<template>
  <div class="lottie-container">
    <lottie-animation
        path="./lottie/trost-color.json"
    />
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  components: {
    LottieAnimation,
  },
};
</script>

<style scoped>
.lottie-container {
  /*width: calc(100% + 48px);*/
  /*margin: 0 0 0 -24px;*/
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  background-color: rgb(246,203,78);
}
</style>