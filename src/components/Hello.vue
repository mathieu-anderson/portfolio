<template>
  <div class="wrapper">
    <transition appear name="fade">
      <p class="hello" @click='next' v-if="skip">{{ msg }}</p>
    </transition>
    <transition appear name="fade">
      <div class="fastforward" @click="fastforward" v-if="skip">
        <router-link to="about-me">
          <md-button class="md-icon-button"><md-icon md-iconset="ion-ios-fastforward"></md-bottom-bar-item></md-button>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello',
      skip: true
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
        case 'i\'m a junior web dev':
          this.msg = 'i\'m also french'
          break
        default:
          this.msg = 'hello'
      }
    },
    fastforward: function () {
      this.skip = !this.skip
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  cursor: pointer;
  font-size: 10vw
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
