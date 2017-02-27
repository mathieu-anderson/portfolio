<template>
  <transition appear name="fade">
    <div>
      <bottomBar></bottomBar>
      <h1>contact me</h1>
    </div>
  </transition>
</template>

<script>
import bottomBar from './bottomBar.vue'

export default {
  name: 'Contact',
  components: {
    bottomBar
  },
  data () {
    return {
    }
  },
  created: function () {
    this.$material.setCurrentTheme('contact')
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
  transition: opacity .5s
}
.fade-leave-active, .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
