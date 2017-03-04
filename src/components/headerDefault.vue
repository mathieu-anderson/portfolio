<template lang="html">
  <div>
    <md-bottom-bar>
      <md-bottom-bar-item md-iconset="ion-ios-home-outline" @click.native="goHome">
      </md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="ion-ios-information-outline" @click.native="goAbout">
      </md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="ion-ios-paperplane-outline" @click.native="goContact">
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'headerDefault',
  data () {
    return {
    }
  },
  methods: {
    isHello () {
      this.routeName === 'Hello'
    },
    goHome () {
      this.$router.push('/')
    },
    goAbout () {
      this.$router.push('/about-me')
    },
    goContact () {
      this.$router.push('/contact')
    }
  }
}
</script>

<style lang="css">
</style>
