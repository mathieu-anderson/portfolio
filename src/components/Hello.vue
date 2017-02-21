<template>
  <h1 @click='next'>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    next: function () {
      switch (this.msg) {
        case 'hello':
          this.msg = 'my name is mathieu'
          break
        case 'my name is mathieu':
          this.msg = 'i\'m a junior web dev'
          break
        default:
          this.msg = 'hello'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 9em;
}
</style>
