<template>
    <div class='meme'>
        <div class='meme-image'>
            <expandable-image :src="require('./../assets/images/meme.png')" v-bind:close-on-background-click='true' ></expandable-image>
        </div>
        <div class='meme-title'>{{title}}</div>
        <div class='share'><span class='share-icon'></span><button @click="show">SHARE NOW!</button></div>
        <modal class= 'modal' name='share-modal' width='100%' height='auto'  :scrollable=true >
            <div slot="top-right">
                <button class='close' @click="hide">
                    ✕
                </button>
            </div>
            <div class='modal-container'>
                <div class="inner-container">
                    <div class='text'>
                        <div class='main-text'>Είναι στο χέρι σου... ε, στο πόδι σου ήθελα να πω!</div>
                        <div class='sub-text'>Δώσε μου το email σου για να μπορείς να κάνεις share το σύνθημά σου.</div>
                    </div>
                        <!-- Begin Mailchimp Signup Form -->
                            <div id="mc_embed_signup">
                            <form action="https://e-sepia.us5.list-manage.com/subscribe/post?u=4137c3bb43188dbda96b67132&amp;id=1b660cfa21" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
                                <div id="mc_embed_signup_scroll">
                                
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                            </label>
                                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                            </div>
                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response" style="display:none"></div>
                                    <div class="response" id="mce-success-response" style="display:none"></div>
                                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4137c3bb43188dbda96b67132_1b660cfa21" tabindex="-1" value=""></div>
                                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                                </div>
                            </form>
                            </div>

                        <!--End mc_embed_signup-->
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
