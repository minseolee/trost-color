// src/views/Home.vue

<template>
  <div class="container" v-bind:style="{backgroundColor: backgroundColor, color: textColor}" @click="webShare">
    <B>{{ text }}</B>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: { type: String, default: '' },
    text: {type: String, default: '' },
    textColor: {type: String, default: '#ffffff'},
  },
  methods: {
    webShare() {
      const webKitData = {
        title: '',
        text: '',
        url: window.location.href.split('/result')[0],
      };
      try {
        window.navigator.share(webKitData)
      } catch {
        this.$clipboard(window.location.href.split('/result')[0]);
        alert('링크가 복사되었습니다');
      }
    }
  }
};
</script>

<style scoped>
.container {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.17);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: 50px;
}

</style>