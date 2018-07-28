<template>
<main class="content">
  {{msg}}
</main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  background: #E7EAED;
  order: 4;
  flex: 10;
  padding: 10px;
}
</style>
