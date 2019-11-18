<template>
  <div id="app">
    <Banner></Banner>
    <Gif></Gif>
    <Memes></Memes>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Gif from './components/Gif.vue'
import Memes from './components/Memes.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Banner,
    Gif,
    Memes,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}
</style>
