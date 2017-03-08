<template>
  <transition appear name="fade">
  <div class="wrapper">
    <headerHello class="box headerBox"></headerHello>
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
          <i v-if="showButton" class="ion-ios-redo-outline link grow"/>
        </transition>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import Type from './Typed.vue'
import headerHello from './headerHello.vue'

export default {
  name: 'hello',
  components: {
    Type,
    headerHello
  },
  data () {
    return {
      sentenceIndex: 0,
      skip: true,
      showButton: false,
      routeName: this.$route.name
    }
  },
  // created: function () {
  //   this.$material.setCurrentTheme('default')
  // },
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
.link {
  font-size: 3vw;
}
.link:hover {
  cursor: pointer;
}
.grow {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.grow:hover, .grow:focus, .grow-active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.typing {
  margin-left: 25%;
  margin-right: 25%;
  max-height: 100vh;
}
.type {
  font-family: lato;
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
