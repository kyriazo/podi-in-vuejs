<template>
    <div class='footer-container'>© COPYRIGHT THELONAGINOPODI 2019 | <a class='terms-link' href='/terms'>TERMS OF USE</a></div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>

.footer-container{
    background-color: #141414;
    color: white;
    text-align: center;
    padding: 15px 0;
}

.terms-link {
    color: white;
    text-decoration: none;
}

.terms-link:hover {
    text-decoration: underline;
}
</style>
