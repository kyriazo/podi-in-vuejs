<template>
    <div class='memes-container'>
        <Meme title='LEGalize it!' image='1'></Meme>
        <Meme title='Ελευθερία στα άκρα!' image='2'></Meme>
        <Meme title='ΠΟΔΕΜΟΣ!' image='3'></Meme>
        <Meme title='Καμία ανοχή. Τα γάντια φυλακή' image='4'></Meme>
        <Meme title='Πάνω τα πόδια. Κάτω τα χέρια.' image='5'></Meme>
        <Meme title='Πόδι μπορείς, μπορείς να προκριθείς!' image='6'></Meme>
        <Meme title='I Pasaran!' image='7'></Meme>
        <Meme title='Η αγάπη δέν έχει άκρο.' image='8'></Meme>
        <Meme title='Λευτεριά στα πόδια μας ΤΩΡΑ!' image='9'></Meme>
        <Meme title='Liberte fraternite LEGalite' image='10'></Meme>
        <Meme title='Αλληλεγγύη στα κάτω άκρα!' image='11'></Meme>
        <div class='logo-bottom'><span>Powered by:</span><img class='logo'  src='./../assets/images/ider_logo.png'></div>
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

<style lang='scss' scoped>
@import './../assets/styles/memes.scss';
</style>
