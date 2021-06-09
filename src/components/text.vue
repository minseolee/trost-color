<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link>router-link to="/foo">Go to Foo</router-link>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
