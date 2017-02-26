<template>
  <div class="wrapper">
    <div class="fastforward" @click="fastforward">
      <router-link to="about-me">
        <md-button class="md-icon-button"><md-icon md-iconset="ion-ios-fastforward"></md-bottom-bar-item></md-button>
      </router-link>
    </div>
    <br /><br />
    <Type class="type" :str="'Hello. \n\nMy name is Mathieu.\n\nI\'m a full stack web developer.\n\n I\'m also French.\n\n'" :type-speed="55" :cleanCursor="true" v-on:done="done" :delay="2000"></Type>
    <Type class="type" :str="'My favourite things include: \n\n - ES6 syntax features (fat arrows!) \n\n - Exciting JS libraries (React.js! Vue.js!) \n\n - Delightful APIs (baking and consuming)\n\n - Sharing my favourite things with people'" :type-speed="50" v-if="sentenceIndex > 0" :cleanCursor="true" v-on:done="done" :delay="2000"></Type>
    <br /><br />
    <div @click="fastforward">
      <md-button v-show="showButton" class="md-raised md-primary" >Want to know me better?</md-button>
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
.fastforward {
  cursor: pointer;
}
.type {
  font-size: 3vw
}
</style>
