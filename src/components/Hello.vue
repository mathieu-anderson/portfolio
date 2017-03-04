<template>
  <transition appear name="fade">
  <div class="wrapper">
    <bottomBar class="header" :routeName='routeName'></bottomBar>
    <br />
    <br />
    <br />
    <br />
    <div class="typing">
      <Type class="type"
      :str="`Hello. \n\nMy name is Mathieu.\n\nI\'m a full stack web developer.\n\nI\'m also French.\n\n`"
      :type-speed="55"
      :cleanCursor="true"
      :delay="2000"
      v-on:done="done" />
      <Type class="type"
      :str="'My favourite things include : \n\n - Exciting JS libraries (React.js! Vue.js!) \n\n - Delightful APIs (baking and consuming)\n\n - Sharing my favourite things with people'" :type-speed="50" v-if="sentenceIndex > 0" :cleanCursor="true" v-on:done="done" :delay="2000"></Type>
      <br /><br />
      <div @click="goAbout">
        <transition appear name="fade">
          <md-button v-if="showButton" class="md-raised md-primary" >Would you like to know more?</md-button>
        </transition>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import Type from './Typed.vue'
import bottomBar from './bottomBar.vue'

export default {
  name: 'hello',
  components: {
    Type,
    bottomBar
  },
  data () {
    return {
      sentenceIndex: 0,
      skip: true,
      showButton: false,
      routeName: this.$route.name
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
    goAbout () {
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
  max-height: 100%;
}
.type {
  font-size: 2.5vw;
}
.fade-enter-active {
  transition: opacity .5s
}
.fade-leave-active, .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
@media (max-width: 450px) {
  .typing {
    margin-left: 15%;
    margin-right: 15%;
  }
}
</style>
