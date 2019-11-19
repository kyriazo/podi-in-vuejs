<template>
  <div class="home">
    <Banner></Banner>
    <Gif></Gif>
    <Memes></Memes>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner.vue'
import Gif from '../components/Gif.vue'
import Memes from '../components/Memes.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Gif,
    Memes,
    Footer,
  }
}
</script>
