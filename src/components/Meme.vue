<template>
    <div class='meme'>
        <div class='meme-image'>
            <expandable-image :src="require('./../assets/images/meme.png')" v-bind:close-on-background-click='true' ></expandable-image>
            <a class='expand' href='/'><img src='./../assets/images/expand.png'></a>
        </div>
        <div class='meme-title'>{{title}}</div>
        <button class='share' @click="show">SHARE NOW!</button>
        <modal name='test-modal'>It works!</modal>
    </div>
</template>

<script>
import Vue from 'vue'
import VueExpandableImage from "vue-expandable-image";
Vue.use(VueExpandableImage);
import vmodal from 'vue-js-modal'
Vue.use(vmodal)

export default {
    name: 'Meme',
    props: [
        'title',
    ],
    methods: {
        show () {
            this.$modal.show('test-modal');
        },
        hide () {
            this.$modal.hide('test-modal');
        }
    }
}
</script>

<style scoped>
.meme {
    width: 48.8%;
    margin-bottom: 65px;
}

.meme-image {
    position: relative;
    max-width: 645px;
}

.expand {
    position: absolute;
    bottom: 25px;
    right: 20px;
    z-index: 1;
}

.meme-title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding: 45px 0 40px 0;
}

.share {
    color: #d83f50;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 30px 0;
    cursor: pointer;

}

.share:hover {
    background-color: #3b5998;
    color: white;
}
</style>
