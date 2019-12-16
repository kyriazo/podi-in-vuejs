<template>
    <div class='memes-container'>
        <Meme title='LEGalize it!' image='1' hashtag='LEGalize_it'></Meme>
        <Meme title='Ελευθερία στα άκρα!' image='2' hashtag='Eleutheria_sta_akra'></Meme>
        <Meme title='ΠΟΔΕΜΟΣ!' image='3' hashtag='PODEMOS'></Meme>
        <Meme title='Καμία ανοχή. Τα γάντια φυλακή!' image='4' hashtag='Kamia_anohi_Ta_gantia_fulaki'></Meme>
        <Meme title='Πάνω τα πόδια. Κάτω τα χέρια!' image='5' hashtag='Pano_ta_podia_Kato_ta_heria'></Meme>
        <Meme title='Πόδι μπορείς, μπορείς να προκριθείς!' image='6' hashtag='Podi_mporeis_na_prokritheis'></Meme>
        <Meme title='¡No Pasaran!' image='7' hashtag='No_Pasaran'></Meme>
        <Meme title='Η αγάπη δεν έχει άκρο!' image='8' hashtag='I_agapi_den_ehei_akro'></Meme>
        <Meme title='Λευτεριά στα πόδια μας ΤΩΡΑ!' image='9' hashtag='Leuteria_sta_podia_mas_TORA'></Meme>
        <Meme title='liberté – fraternité - LEGalité!' image='10' hashtag='liberté_fraternité_LEGalité'></Meme>
        <Meme title='Αλληλεγγύη στα κάτω άκρα!' image='11' hashtag='Allileggui_sta_kato_akra'></Meme>
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
