<template>
    <div class='banner-container'>
        <div class='inner-container'>
            <!-- <div class='logo'></div> -->
            <img class='banner' src='./../assets/images/front-logo.png'>
            <h1>Γίνε κι εσύ <span>IDERistas!</span></h1>
            <div class='main-text'>Οι IDERistas είναι το κίνημα που στόχο έχει να στηρίξει το αναμφισβλητητο δικαίωμα της επιλογής, όσο ακραία κι αν είναι αυτή. Να στηρίξει το δικαίωμα μου να γίνω το άκρο που θέλω: <span>Να γίνω πόδι! Και σ' αυτό σε θέλω μαζί μου.</span>Σου ζητώ λοιπόν να βάλεις κι εσύ ένα χέρι για να γίνω πόδι κάνοντας share τα συνθήματα του αγώνα μου.</div>
            <button>ΞΕΚΙΝΑ ΤΩΡΑ ΤΟΝ ΑΓΩΝΑ!</button>
            <img class='hand' src='./../assets/images/hand.png'>
            <div class='video-header'>Μία ιστορία <span>άκρως αληθινή...</span></div>
            <img class='video' src='./../assets/images/video.png'>
            <img class='logo' src='./../assets/images/ider_logo.png'>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>
30 60 380
<style scoped>

.banner-container {
    background-color: purple;
    width:100%;
    height: 2100px;
    display: flex;
    position: relative;
    justify-content: center;
    background-image: radial-gradient(#910041,black 60%);
    text-align: center;
}

.inner-container {
    max-width: 760px;
    color: white;
}

.banner {
    margin-top: 130px;
}

.hand {
    margin: 0 auto 120px;
    display: block;
}

.video-header {
    margin-bottom: 55px;
    font-size: 30px;
}

.video-header span {
    font-weight: bold;
}

.video {
    position: absolute;
    bottom: 0;
    transform:translateY(50%);
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
}

.logo {
    position: absolute;
    bottom: 20px;
    right: 20px;

}

h1 {
    font-size: 45px;
    font-weight: normal;
}

.main-text {
    font-size: 18px;
    margin-bottom: 50px;
    line-height: 2;
}

.main-text span {
    font-weight: bold;
}

button {
    background-color: #d3002b;
    border: none;
    max-width: 380px;
    padding: 30px 60px;
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    border-radius: 30px;
    margin-bottom: 130px;
}

button span {
    font-weight: bold;
}

</style>
