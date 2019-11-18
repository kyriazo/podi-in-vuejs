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

<style lang='scss'>

@import './assets/styles/style.scss';

#app {
  font-family: 'Mont';
}

body {
  margin: 0;
}

input,button {
  outline: none;
}

</style>
