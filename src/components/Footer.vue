<template>
    <div class='footer-container'>
        <div class='cp'> ©COPYRIGHT THELONAGINOPODI 2019</div> <span>|</span> <a class='terms-link' href='/privacy'>TERMS OF USE</a>
        <cookie-law>
            <div class='cookie-container' slot-scope="props">
                <div class='text'>Για την καλύτερη εμπειρία σας στην ιστοσελίδα, χρησιμοποιούμε Cookies.</div>
                <div class='links'>
                    <a class='link' href="/cookies">Περισσότερες πληροφορίες</a>
                    <button class="accept" @click="props.accept">Συμφωνώ</button>
                </div>
            </div>
        </cookie-law>
    </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

export default {
    name: 'Footer',
    components: {
        CookieLaw
    }
}
</script>

<style lang='scss' scoped>

@import './../assets/styles/footer.scss';

</style>

