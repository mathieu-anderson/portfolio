<!-- <template lang="html">
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

<style lang="css">

</style> -->
<template lang="html">
  <md-bottom-bar>
    <md-bottom-bar-item md-iconset="ion-ios-home-outline" @click.native="goHome" />
    <md-bottom-bar-item md-iconset="ion-social-github" href="https://github.com/mathieu-anderson"/>
    <md-bottom-bar-item md-iconset="ion-social-linkedin-outline" href="https://www.linkedin.com/in/mathieuanderson/" />
    <md-bottom-bar-item md-iconset="ion-ios-paperplane-outline" href="mailto:mathieu.hj.anderson@gmail.com" />
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
