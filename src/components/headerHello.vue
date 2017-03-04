<template lang="html">
  <div class="header">
    <md-bottom-bar>
      <md-bottom-bar-item md-iconset="ion-ios-fastforward-outline" @click.native="goAbout">
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
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
