<template>
  <transition appear name="fade">
  <div class="wrapper">
      <type class="type" :str="'Hello. \n\nMy name is Mathieu.\n\nI\'m a full stack web developer.'" :type-speed="50" v-on:done="done" :delay="2000"></type>
      <div class="fastforward" @click="fastforward" v-if="skip">
        <router-link to="about-me">
          <md-button class="md-icon-button"><md-icon md-iconset="ion-ios-fastforward"></md-bottom-bar-item></md-button>
        </router-link>
      </div>
  </div>
</transition>
</template>

<script>
import type from './Typed.vue'

export default {
  name: 'hello',
  components: {
    type
  },
  data () {
    return {
      sentenceIndex: 0,
      skip: true
    }
  },
  created: function () {
    this.$material.setCurrentTheme('default')
  },
  methods: {
    done () {
      this.sentenceIndex += 1
      console.log('type done')
    },
    fastforward () {
      this.skip = !this.skip
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  margin-top: 40vh;
}
.fastforward {
  cursor: pointer;
}
.type {
  line-height: 3vh;
  font-size: 5vw
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
