<template>
    <div class='gif-container'>
        <div class='inner-container'>
            <video class='gif' autoplay loop muted playsinline>
                <source src="../assets/videos/IderHand.webm" type="video/webm">
                <source src="../assets/videos/IderHand.mp4" type="video/mp4">
            </video>
            <div class='gif-text'>
                <h2>Ο αγώνας τώρα δικαιώνεται!</h2>
                <span>Διάλεξε το σύνθημα που σε εκφράζει και μοιράσου το με τους φίλους σου.</span>
                <img class='white-hand' src='./../assets/images/hand_black.png'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gif',
}
</script>

<style lang='scss' scoped>
@import './../assets/styles/gif.scss';
</style>
