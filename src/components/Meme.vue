<template>
    <div class='meme'>
        <div class='meme-image'>
            <expandable-image :src="require('../assets/images/memes/' + image + '.jpg')" v-bind:close-on-background-click='true' ></expandable-image>
        </div>
        <div class='meme-title'>{{title}}</div>
        <div class='share' @click="tagClick"><span class='share-icon'></span><a class="router-link" :href="'https://www.facebook.com/sharer/sharer.php?u=thelonaginopodi.gr/' + image + '/&hashtag=%23'+ hashtag">SHARE NOW!</a></div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueExpandableImage from "vue-expandable-image";
Vue.use(VueExpandableImage);

export default {
    name: 'Meme',
    props: [
        'title',
        'image',
        'hashtag'
    ],
    methods: {
        tagClick(){
            gtag('event', 'button', {'event_category': 'onclick','event_label': 'Sharenow'});
        },
    }
}
</script>

<style lang="scss" >
@import './../assets/styles/meme.scss';

</style>

