<template>
  <transition appear name="fade">
    <div>
      <h1>contact me</h1>
      <md-bottom-bar>
        <router-link to="about-me">
          <md-bottom-bar-item md-iconset="ion-android-happy">about me</md-bottom-bar-item></router-link>
        <router-link to="contact">
          <md-bottom-bar-item md-iconset="ion-android-mail">contact</md-bottom-bar-item>
        </router-link>
      </md-bottom-bar>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Contact',
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
.router-link-active {
  color: black;
  text-decoration: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
