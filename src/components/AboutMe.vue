<template lang="html">
  <transition appear name="fade">
    <div class="container">
      <headerDefault />
      <br />
      <br />
      <br />
      <div class="box aboutBox">
        <h1>about me</h1>
        <div class="socialBox">
          <div class=".ion-android-calendar:before">
            test
          </div>
          <a href="static/CV_Mathieu_ANDERSON.pdf"><md-icon class="md-size-2x pointer grow" md-iconset="ion-ios-paper-outline" /></a>
          <md-icon class="md-size-2x pointer grow" md-iconset="ion-social-github" href="https://github.com/mathieu-anderson" />
          <md-icon class="md-size-2x pointer grow" md-iconset="ion-social-linkedin-outline" href="https://www.linkedin.com/in/mathieuanderson/" />
          <md-icon class="md-size-2x pointer grow" md-iconset="ion-ios-email-outline" href="mailto:mathieu.hj.anderson@gmail.com"/>
        </div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
        </p>
      </div>
      <div class="box box1 projectBox">
        <div class="titleBox">
          <h2>Enspiral Dev Academy</h2>
          <div class="image"></div>
        </div>
        <div class="textBox">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
      </div>
      <div class="box box2 projectBox">
        <div class="titleBox">
          <h2>The tasteFight saga</h2>
          <div class="image"></div>
        </div>
        <div class="textBox">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
      </div>
      <div class="box box3 projectBox">
        <div class="titleBox">
          <h2>Korero Mai</h2>
          <div class="image"></div>
        </div>
        <div class="textBox">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import headerDefault from './headerDefault.vue'

export default {
  name: 'AboutMe',
  components: {
    headerDefault
  },
  data () {
    return {
    }
  },
  // created: function () {
  //   this.$material.setCurrentTheme('cv')
  // },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');

.pointer:hover {
  cursor: pointer;
}
.image {
  display: none;
}
.fade-enter-active {
  transition: opacity .5s
}
.fade-leave-active, .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
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
@media all and (min-width: 960px){
  .image {
    display:block;
    background:url(http://unsplash.it/200/200) top left no-repeat;
    width:100%;
    padding-bottom: 65%;
  }
}
</style>
