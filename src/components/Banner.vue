<template>
    <div class='banner-container'>
        <div class='banner-hashtag'>#THELONAGINOPODI</div>
        <div class='inner-container'>
            <img class='hand' src='./../assets/images/hand.png'>
            <h1>Γίνε κι εσύ <span>IDERistas!</span></h1>
            <div class='main-text'>Οι IDERistas είναι το κίνημα που στόχο έχει να στηρίξει το αναμφισβήτητο δικαίωμα της επιλογής, όσο ακραία κι αν είναι αυτή. Να στηρίξει το δικαίωμα μου να γίνω το άκρο που θέλω: <span>Να γίνω πόδι! Και σ' αυτό σε θέλω μαζί μου.</span> Σου ζητώ λοιπόν να βάλεις κι εσύ ένα χέρι για να γίνω πόδι κάνοντας share τα συνθήματα του αγώνα μου.</div>
            <div class='video-link'><a class='scroll-button' href='#video' v-smooth-scroll="{ duration: 1000, offset: -140}">ΞΕΚΙΝΑ ΤΩΡΑ ΤΟΝ ΑΓΩΝΑ!</a></div>
            <div class='video-header'>Μία ιστορία <span>άκρως αληθινή...</span></div>
            <iframe id='video' src="https://player.vimeo.com/video/375607781" width="1200" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <a href="https://www.ider-eshop.gr/"><img class='logo' src='./../assets/images/ider_logo.png'/></a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

export default {
    name: 'Banner',
}
</script>

<style lang='scss' scoped>
@import './../assets/styles/banner.scss';
</style>
