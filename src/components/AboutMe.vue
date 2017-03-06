<template>
  <transition appear name="fade">
    <div>
      <headerDefault class="header"></headerDefault>
      <br />
      <br />
      <br />
      <div class="container">
        <h1>about me</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <md-layout>
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="100" class="block1">
            <md-layout md-gutter>
              <md-layout md-flex="33">
                <h2>Enspiral Dev Academy</h2>
                <div class="image"></div></md-layout>
              <md-layout md-flex="66" class="projectText">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </md-layout>
            </md-layout>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="100" class="block1">
            <md-layout md-gutter>
              <md-layout md-flex="33">
                <h2>The tasteFight saga</h2>
                <div class="image"></div>
              </md-layout>
              <md-layout md-flex="66">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </md-layout>
            </md-layout>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="100" class="block1">
            <md-layout md-gutter>
              <md-layout md-flex="33">
                <h2>Korero Mai</h2>
                <div class="image"></div>
              </md-layout>
              <md-layout md-flex="66">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </md-layout>
            </md-layout>
          </md-layout>
        </md-layout>
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
<style scoped>
div {
  color: black;
}
.container {
  margin-left: 15%;
  margin-right: 15%;
}
.image {
  display: none;
}
.block1 {
  padding: 1em;
  color: black;
  /*background-color: #FF5722;*/
}
.block2 {
  padding: 1em;
  color: black;
  /*background-color: #FF7043;*/
}
.block3 {
  padding: 1em;
  color: black;
  /*background-color: #FF8A65;*/
}
.block4 {
  padding: 1em;
  color: black;
  /*background-color: #FFAB91;*/
}
.fade-enter-active {
  transition: opacity .5s
}
.fade-leave-active, .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
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
