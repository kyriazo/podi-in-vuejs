<template>
    <div class='meme'>
        <div class='meme-image'>
            <expandable-image :src="require('../assets/images/memes/' + image + '.png')" v-bind:close-on-background-click='true' ></expandable-image>
        </div>
        <div class='meme-title'>{{title}}</div>
        <div class='share'><span class='share-icon'></span><router-link class='router-link' :to= "{ name: 'Share', params: { image: this.image }}" >SHARE NOW!</router-link></div>
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
    ],
}
</script>

<style lang="scss" >
@import './../assets/styles/meme.scss';

</style>
