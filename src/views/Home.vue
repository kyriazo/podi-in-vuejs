<template>
  <div class="home">
    <Banner></Banner>
    <Gif></Gif>
    <Memes></Memes>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Gif from '../components/Gif.vue'
import Memes from '../components/Memes.vue'
import Footer from '../components/Footer.vue'
import Vue from 'vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta);


export default {
  name: 'home',
  components: {
    Banner,
    Gif,
    Memes,
    Footer,
  },
  mounted() {
    console.log(this.$route);
  },
  metaInfo() {    
      console.log('I just ran on',this.$route);
      return {
        title: this.$route.name,
        meta: [
          { property:"og:title", content: this.$route.name },
          { property:"og:image", content: this.$route.image },
          { property:"og:image:alt", content: this.$route.name },
          { property:"og:image:type", content:'image/jpg' },
          { property:"og:image:width", content: 260 },
          { property:"og:image:height", content: 260 },
          { property:"og:description", content: "Οι IDERistas είναι το κίνημα που στόχο έχει να στηρίξει το αναμφισβήτητο δικαίωμα μου να γίνω το άκρο που θέλω: Να γίνω πόδι!  Και σ' αυτό σε θέλω μαζί μου." },
          { property:'http-equiv', content: 'text/html'},
        ]
      }
  },
}
</script>
