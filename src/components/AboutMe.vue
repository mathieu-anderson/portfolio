<template>
  <div class="wrapper">
    <transition appear name="fade">
      <h1>my cv</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
