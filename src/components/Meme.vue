<template>
    <div class='meme'>
        <div class='meme-image'>
            <expandable-image :src="require('./../assets/images/meme.png')" v-bind:close-on-background-click='true' ></expandable-image>
        </div>
        <div class='meme-title'>{{title}}</div>
        <div class='share'><span class='share-icon'></span><button @click="show">SHARE NOW!</button></div>
        <modal class= 'modal' name='share-modal' width='100%' height='auto' :adaptive=true  :scrollable=true >
            <div slot="top-right">
                <button class='close' @click="$modal.hide('share-modal')">
                    ✕
                </button>
            </div>
            <div class='modal-container'>
                <div class="inner-container">
                    <div class='text'>
                        <div class='main-text'>Είναι στο χέρι σου... ε, στο πόδι σου ήθελα να πω!</div>
                        <div class='sub-text'>Δώσε μου το email σου για να μπορείς να κάνεις share το σύνθημά σου.</div>
                    </div>
                    <input type='text' placeholder='EMAIL'>
                    <span class='terms'>Αποδέχομαι τους όρους</span>
                    <button class='share-button'>ΕΙΣΑΙ ΕΤΟΙΜΟΣ ΝΑ ΚΑΝΕΙΣ SHARE</button>
                </div>
            </div>
        </modal>
        <!-- <Modal v-model="modalOpen"></Modal> -->
    </div>
</template>

<script>
import Vue from 'vue'
import VueExpandableImage from "vue-expandable-image";
Vue.use(VueExpandableImage);
// import Modal from './Modal';
import vmodal from 'vue-js-modal'
Vue.use(vmodal)

export default {
    name: 'Meme',
    props: [
        'title',
    ],
    methods: {
        // openModal () {
        //     this.modalOpen = !this.modalOpen;
        // },
        show() {
            this.$modal.show('share-modal');
        },

        hide () {
            this.$modal.hide('share-modal');
        }
    },
    // components: {
    //     Modal
    // },
    // data() {
    //     return {
    //         modalOpen: false
    //     }
    // }

}
</script>

<style lang="scss" >
@import './../assets/styles/meme.scss';

</style>
