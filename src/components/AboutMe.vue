<template>
  <transition appear name="fade">
    <div class="container">
      <headerDefault class="box headerBox"></headerDefault>
      <br />
      <br />
      <br />
      <div class="box aboutBox">
        <h1>about me</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
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
<style scoped>
.image {
  display: none;
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
