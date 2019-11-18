<template>
    <div class='memes-container'>
        <Meme title='LEGalize it!'></Meme>
        <Meme title='Ελευθερία στα άκρα!'></Meme>
        <Meme title='ΠΟΔΕΜΟΣ!'></Meme>
        <Meme title='Καμία ανοχή. Τα γάντια φυλακή'></Meme>
        <Meme title='Πάνω τα πόδια. Κάτω τα χέρια.'></Meme>
        <Meme title='Πόδι μπορείς, μπορείς να προκριθείς!'></Meme>
        <Meme title='I Pasaran!'></Meme>
        <Meme title='Η αγάπη δέν έχει άκρο.'></Meme>
    </div>
</template>

<script>
import Meme from './Meme.vue'

export default {
    name: 'Memes',
    components: {
        Meme
    }
}
</script>

<style scoped>
.memes-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 65px auto 0 auto;
    max-width: 1320px;
}
</style>
