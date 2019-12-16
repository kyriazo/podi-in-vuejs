<template>
    <div class='modal-container'>
                <div class='hashtag'>#THELONAGINOPODI</div>
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
                                <label class='terms' for='terms'><input id='terms' type="checkbox" required name="terms">Αποδέχομαι τους <a href="/terms" target='newtab'>όρους</a></label>
                                <button class="share-button" type="submit">ΕΙΣΑΙ ΕΤΟΙΜΟΣ ΝΑ ΚΑΝΕΙΣ SHARE</button>
                            </form>
                            </template>
                        </mailchimp-subscribe>
                        <a href="/" class='back'><Πίσω στη λίστα</a>
                </div>
            </div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
    name: 'share',
    components: {
        MailchimpSubscribe
    },
    mounted() {
    },
    methods: {
        onError(error,event) {
            if(error.includes('s already subscribed to list')) {
                //Injects tracking script
                let id = Math.floor(Math.random() * 1000000) + 1;
                var script = document.createElement('script');
                script.src = "https://fv-pm.s3.amazonaws.com/pmtrackas.min.js";
                script.onload = function () {
                    FVPMSas.init(['IderThelonaginopodi', 'thankyou', '350', id])
                };
                document.getElementsByTagName('body')[0].appendChild(script);

                gtag('event', 'button', {'event_category': 'onclick','event_label': 'CompletedShare'});
                window.location.href = 'https://www.facebook.com/sharer/sharer.php?u=thelonaginopodi.gr/' + this.$route.params.image + '/&hashtag=%23thelonaginopodi';
            }else{
                console.log(error)
            }
        },
        onSuccess() {
            gtag('event', 'button', {'event_category': 'onclick','event_label': 'CompletedShare'});
            window.location.href = 'https://www.facebook.com/sharer/sharer.php?u=thelonaginopodi.gr/' + this.$route.params.image + '/&hashtag=%23thelonaginopodi';
        },
    }
}
</script>

<style lang="scss" scoped>

@import './../assets/styles/meme.scss';

@import './../assets/styles/share.scss';

</style>