<template>
  <transition appear name="fade">
    <div>
      <bottomBar class="header"></bottomBar>
      <br />
      <br />
      <br />
      <h1>about me</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <md-layout>
        <md-layout md-flex-xsmall="100" md-flex-small="100" class="block1">
          <h2>academics</h2>
          <div class="image"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </md-layout>

        <md-layout md-flex-xsmall="100" md-flex-small="100" class="block2">
          <h2>not coding work</h2>
          <div class="image"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </md-layout>

        <md-layout md-flex-xsmall="100" md-flex-small="100" class="block3">
          <h2>coding work</h2>
          <div class="image"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </md-layout>

        <md-layout md-flex-xsmall="100" md-flex-small="100" class="block4">
          <h2>personal projects</h2>
          <div class="image"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </md-layout>
      </md-layout>
    </div>
  </transition>
</template>

<script>
import bottomBar from './bottomBar.vue'

export default {
  name: 'AboutMe',
  components: {
    bottomBar
  },
  data () {
    return {
    }
  },
  created: function () {
    this.$material.setCurrentTheme('cv')
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  display: none;
}
.block1 {
  padding: 1em;
  color: black;
  background-color: #E0F2F1;
}
.block2 {
  padding: 1em;
  color: black;
  background-color: #B2DFDB;
}
.block3 {
  padding: 1em;
  color: black;
  background-color: #80CBC4;
}
.block4 {
  padding: 1em;
  color: black;
  background-color: #4DB6AC;
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
    padding-bottom:75%;
    background-size:100%;
  }
}
</style>
