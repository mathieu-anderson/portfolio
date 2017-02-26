<template lang="html">
  <div class="bottomBar">
    <md-bottom-bar>
      <md-bottom-bar-item md-iconset="ion-android-happy" @click.native="goAbout">
      </md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="ion-android-mail" @click.native="goContact">
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'bottomBar',
  data () {
    return {
    }
  },
  methods: {
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
