<template>
    <div class='meme'>
        <div class='meme-image'>
            <expandable-image :src="require('../assets/images/memes/' + image + '.png')" v-bind:close-on-background-click='true' ></expandable-image>
        </div>
        <div class='meme-title'>{{title}}</div>
        <div class='share'><span class='share-icon'></span><button @click="show">SHARE NOW!</button></div>
        <modal class= 'modal' name='share-modal' width='100%' height='auto' :scrollable=true>
            <div class='modal-container'>
                <div class='close-container' slot="top-right">
                <button class='close' @click="hide">
                    ✕
                </button>
            </div>
                <div class="inner-container">
                    <div class='text'>
                        <div class='main-text'>Είναι στο χέρι σου... ε, στο πόδι σου ήθελα να πω!</div>
                        <div class='sub-text'>Δώσε μου το email σου για να μπορείς να κάνεις share το σύνθημά σου.</div>
                    </div>
                        <mailchimp-subscribe
                            url="https://e-sepia.us5.list-manage.com/subscribe/post-json"
                            user-id="4137c3bb43188dbda96b67132"
                            list-id="1b660cfa21"
                            @error="onError"
                            @success="onSuccess"
                        >
                            <template v-slot="{ subscribe, setEmail, error, success, loading }">
                            <form class='share-form' @submit.prevent="subscribe">
                                <input class='email' type="email" required placeholder='EMAIL' @input="setEmail($event.target.value)" />
                                <label class='terms' for='terms'><input id='terms' type="checkbox" required name="terms">Αποδέχομαι τους <a href="/terms">όρους</a></label>
                                <button class="share-button" type="submit">ΕΙΣΑΙ ΕΤΟΙΜΟΣ ΝΑ ΚΑΝΕΙΣ SHARE</button>
                            </form>
                            </template>
                        </mailchimp-subscribe>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Vue from 'vue'
import VueExpandableImage from "vue-expandable-image";
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
Vue.use(VueExpandableImage);
import vmodal from 'vue-js-modal'
Vue.use(vmodal)

export default {
    name: 'Meme',
    components: {
        MailchimpSubscribe,
    },
    props: [
        'title',
        'image',
    ],
    methods: {
        show() {
            this.$modal.show('share-modal');
        },

        hide () {
            this.$modal.hide('share-modal');
        },
        onError(error) {
            if(error.includes('s already subscribed to list')) {
                window.location.href = 'https://www.facebook.com/sharer/sharer.php?u=demothelonaginopodi.e-sepia.com/' + this.$props.image + '/&hashtag=%23thelonaginopodi';
            }else{
            }
        },
        onSuccess() {
            window.location.href = 'https://www.facebook.com/sharer/sharer.php?u=demothelonaginopodi.e-sepia.com/' + this.$props.image + '/&hashtag=%23thelonaginopodi';
        },
    },
}
</script>

<style lang="scss" >
@import './../assets/styles/meme.scss';

</style>
