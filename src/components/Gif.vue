<template>
    <div class='gif-container'>
        <div class='inner-container'>
            <img class='gif' src='./../assets/images/gif.png'>
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

<style scoped>

.gif-container {
    display: flex;
    justify-content: center;
    padding-bottom: 60px;
    position: relative;
}

.gif-container:before {
    background-image: url('./../assets/images/background-foot.png');
    position: absolute;
    display: block;
    content: "";
    top: 345px;
    right: 0;
    background-repeat: no-repeat;
    width: 535px;
    min-height: 100%;
}

.inner-container {
    display: flex;
    flex-direction: row;
    margin-top: 575px;
}

.gif {
    margin-right: 100px;
}

.gif-text {
    max-width: 550px;
    padding-right: 220px;
    box-sizing: border-box;
}

.gif-text h2 {
    font-size: 35px;
    font-weight: normal;
    text-align: left;
    margin-top: 245px;
    color: black;
}

.gif-text span {
    font-size: 20px;
    color: black;
    text-align: left;
}

.white-hand {
    display: block;
    margin: 140px auto 0 auto;
}
</style>
