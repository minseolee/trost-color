// src/views/Home.vue

<template>
  <router-link :to="action">
    <div class="container" v-bind:style="{backgroundColor: backgroundColor, color: textColor}">
      <b>{{ text }}</b>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    backgroundColor: { type: String, default: '' },
    text: {type: String, default: '' },
    textColor: {type: String, default: '#ffffff'},
    action: {type: String, default: ''},
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