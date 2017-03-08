<template lang="html">
  <md-bottom-bar class="headerBox">
    <md-bottom-bar-item md-iconset="ion-ios-home-outline" @click.native="goHome" />
    <md-bottom-bar-item md-iconset="ion-ios-information-outline" @click.native="goAbout" />
    <md-bottom-bar-item md-iconset="ion-ios-star-outline" @click.native="goApps" />
  </md-bottom-bar>
</template>

<script>
export default {
  name: 'headerDefault',
  data () {
    return {
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    goAbout () {
      this.$router.push('/about-me')
    },
    goApps () {
      this.$router.push('/mini-apps')
    }
  }
}
</script>

<style scoped lang="css">
.headerBox {
  width: 100vw;
  border: $borderBottom;
  flex: 0 0 auto;
  align-self: flex-start;
  position: fixed;
}
</style>
