<template lang="html">
  <md-bottom-bar class="headerBox">
    <md-bottom-bar-item md-iconset="ion-ios-fastforward-outline" @click.native="goAbout">
    </md-bottom-bar-item>
  </md-bottom-bar>
</template>

<script>
export default {
  name: 'headerHello',
  data () {
    return {
    }
  },
  methods: {
    goAbout () {
      this.$router.push('/about-me')
    }
  }
}
</script>

<style lang="css">
</style>
