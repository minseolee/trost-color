<template>
  <div id="app">
    <Header />
    <div class="fullContainer">
      <router-view/>
    </div>
  </div>
</template>

<script>
import router from "./router";

console.log('https://www.github.com/minseolee');

export default {
  name: 'app',
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = 'Trost-Event'
      }
    },
    '$route'(to) {
      if (to.path.indexOf('/loading') !== -1) {
        window.setTimeout(() => {
          router.push('/result');
        }, 4400);
      }
      if (!to.path.split('/')[1]) {
        window.location.href = '/';
      }
      console.log(to.path);
    }
  },
};
</script>