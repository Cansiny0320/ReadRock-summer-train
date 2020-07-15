<template>
    <div id="app">
        <div class="content"></div>
        <div class="bg-container">
            <div class="bg top"></div>
            <div class="bg bottom"></div>
            <div class="bg paper"></div>
            <div class="yellow-mask"></div>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss" scoped>
@font-face {
    font-family: 'DFZongYi';
    font-display: swap;
    src: url('./assets/font/DFGBZY7.TTF') format('truetype');
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
}
#app {
    width: 100vw;
    height: 100vh;
    font-family: 'DFZongYi';
    overflow: hidden;
    .content {
        width: 100%;
        height: 90px;
    }
    .bg-container {
        width: 100%;
        height: calc(100vh - 90px);
        position: absolute;
        z-index: -1;
        .yellow-mask {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-image: url('./assets/images/bg/mask.png');
            background-position: center;
            z-index: 50;
            mix-blend-mode: overlay;
        }
        .bg {
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            position: absolute;
            background-size: 100%;
            background-repeat: no-repeat;
            &.paper {
                z-index: 10;
                background-image: url('./assets/images/bg/bg.png');
                background-position: 0 -10px;
            }
            &.top {
                background-image: url('./assets/images/bg/top.png');
                z-index: 8;
            }
            &.bottom {
                background-image: url('./assets/images/bg/bottom.png');
                z-index: 9;
            }
        }
    }
}
</style>
