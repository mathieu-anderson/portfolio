<template lang="html">
  <transition appear name="fade">
    <div>
      <headerDefault />
      <p>Here will be a "random movie selector" based on TMDB. Select a year, a genre and a minimum rating and get a random movie. The idea of this page is to showcase mini-apps.</p>
    </div>
  </transition>
</template>

<script>
import headerDefault from './headerDefault.vue'

export default {
  name: 'Apps',
  components: {
    headerDefault
  }
}
</script>

<style scoped lang="scss" >
.fade-enter-active {
  transition: opacity .5s
}
.fade-leave-active, .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
