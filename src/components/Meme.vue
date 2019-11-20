<template>
    <div class='meme'>
        <div class='meme-image'>
            <expandable-image :src="require('../assets/images/memes/' + image + '.png')" v-bind:close-on-background-click='true' ></expandable-image>
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
                        <mailchimp-subscribe
                            url="https://e-sepia.us5.list-manage.com/subscribe/post"
                            user-id="4137c3bb43188dbda96b67132"
                            list-id="1b660cfa21"
                            @error="onError"
                            @success="onSuccess"
                        >
                            <template v-slot="{ subscribe, setEmail, error, success, loading }">
                            <form @submit.prevent="subscribe">
                                <input type="email" @input="setEmail($event.target.value)" />
                                <button type="submit">Submit</button>
                                <div v-if="error">{{ error }}</div>
                                <div v-if="success">Yay!</div>
                                <div v-if="loading">Loading…</div>
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
        onError() {
            alert('There is an error');
        },
        onSuccess() {
            alert('Succesful');
        },
    },
}
</script>

<style lang="scss" >
@import './../assets/styles/meme.scss';

</style>
