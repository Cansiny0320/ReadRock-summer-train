<template>
    <div class="get-card">
        <div class="yellow-mask"></div>
        <div class="title">狼牙山五壮士</div>
        <div class="img">
            <img src="../assets/images/getCard/img.png" />
            <div class="time">1941年9月25日</div>
        </div>
        <div class="desc">
            不到25岁的他们，将青春撒于狼牙山，献于祖国。的的他们视死如归，在最后时刻任然坚守，用石块还击，他们宁死不屈，毁掉枪支，义无反顾，纵身跳下数十丈深的悬崖25岁的他们，将青春撒于狼牙山，献于祖国。们视死如归，在最后时刻任然坚守，用石块还击，他们宁死不屈，毁掉枪支
        </div>
        <div class="btn-container" @click="active = true">
            <div class="btn">
                立即抽奖 [5]
            </div>
        </div>
        <div class="card-mask" v-show="active === true">
            <div class="card">
                <img src="../assets/images/card/aiguo.png" />
            </div>
            <div class="btn" @click="active = false">
                收下卡片继续探索
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            active: false,
        }
    },
}

</script>

<style lang="scss" scoped>
.get-card {
    padding: 88px 130px 0;
    position: relative;
    color: #6d0001;
    height: 100vh;
    .yellow-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-image: url('../assets/images/bg/mask.png');
        background-position: center;
        z-index: 50;
        mix-blend-mode: overlay;
    }
    .title {
        padding: 30px 0 40px 5px;
        margin-bottom: 16px;
        width: 500px;
        font-size: 64px;
        background-image: url('../assets/images/getCard/line.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .img {
        position: relative;
        &::before,
        &::after {
            content: '';
            width: 55px;
            background-size: contain;
            height: 55px;
            position: absolute;
            background-image: url('../assets/images/getCard/arrow.png');
            top: 105px;
        }
        &::before {
            left: -95px;
        }
        &::after {
            right: -95px;
            transform: rotate(180deg);
        }
        img {
            width: 500px;
        }
        .time {
            font-size: 22px;
            text-align: right;
            margin-top: 12px;
        }
    }
    .desc {
        text-align: justify;
        width: 500px;
        margin-top: 45px;
        font-size: 22px;
        line-height: 35px;
        margin-bottom: 85px;
    }
    .btn-container {
        padding: 0 90px;
        position: relative;
        z-index: 50;
        .btn {
            white-space: nowrap;
            padding: 25px 70px;
            font-size: 36px;
            color: #fff6e7;
            text-align: center;
            background-image: url('../assets/images/card/btn.png');
            background-size: 100%;
            background-position: top;
            background-repeat: no-repeat;
        }
        .tip {
            font-size: 24px;
            padding: 20px 96px;
            white-space: nowrap;
        }
    }
    .card-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: center;
        .card {
            margin-top: 230px;
            img {
                width: 310px;
                height: 410px;
            }
        }
        .btn {
            margin-top: 220px;
            padding: 42px 70px;
            font-size: 36px;
            color: #fff6e7;
            background-image: url('../assets/images/card/btn.png');
            background-size: 100%;
            background-repeat: no-repeat;
        }
    }
}
</style>