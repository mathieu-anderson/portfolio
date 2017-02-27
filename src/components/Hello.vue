<template>
  <div class="wrapper">
    <div class="row">
      <div class="bottomBar">
        <md-bottom-bar>
          <md-bottom-bar-item md-iconset="ion-ios-fastforward-outline" @click.native="fastforward">
          </md-bottom-bar-item>
        </md-bottom-bar>
      </div>
    </div>
    <br /><br />
    <div class="row">
      <div class="twelve columns typing">
        <Type class="type"
          :str="`Hello. \n\nMy name is Mathieu.\n\nI\'m a full stack web developer.\n\nI\'m also French.\n\n`"
          :type-speed="55"
          :cleanCursor="true"
          :delay="2000"
          v-on:done="done" />
        <Type class="type"
        :str="'My favourite things include : \n\n - Exciting JS libraries (React.js! Vue.js!) \n\n - Delightful APIs (baking and consuming)\n\n - Sharing my favourite things with people'" :type-speed="50" v-if="sentenceIndex > 0" :cleanCursor="true" v-on:done="done" :delay="2000"></Type>
        <br /><br />
        <div class="fastforward" @click="fastforward">
          <transition appear name="fade">
            <md-button v-if="showButton" class="md-raised md-primary" >Would you like to know more?</md-button>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Type from './Typed.vue'

export default {
  name: 'hello',
  components: {
    Type
  },
  data () {
    return {
      sentenceIndex: 0,
      skip: true,
      showButton: false
    }
  },
  created: function () {
    this.$material.setCurrentTheme('default')
  },
  methods: {
    done () {
      this.sentenceIndex += 1
      if (this.sentenceIndex === 2) {
        setTimeout(() => { this.showButton = true }, 1000)
      }
    },
    fastforward () {
      this.$router.push('/about-me')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.typing {
  margin-left: 25%;
  margin-right: 25%;
}
.fastforward {
  margin-left: 30%;
  margin-right: 30%;
}
.type {
  font-size: 3vw
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
