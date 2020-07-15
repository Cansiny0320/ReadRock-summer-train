<template>
    <div class="card">
        <div class="yellow-mask"></div>
        <div class="header">
            <div class="title">集卡片，兑奖励</div>
            <div class="line"></div>
            <div class="intro">
                每四张不同卡片可参与一次抽奖，您可参与抽奖:
                <span class="times">5</span>
                次
            </div>
        </div>
        <div class="cards">
            <div class="item">
                <img src="../assets/images/card/aiguo.png" />
            </div>
            <div class="item">
                <img src="../assets/images/card/jinbu.png" />
            </div>
            <div class="item">
                <img src="../assets/images/card/minzhu.png" />
            </div>
            <div class="item">
                <img src="../assets/images/card/kexve.png" />
            </div>
        </div>
        <div class="btn-container">
            <div class="btn">
                立即抽奖 [5]
            </div>
            <div class="tip">5月4日开启抽奖</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    padding: 90px 120px 0 108px;
    color: #6d0001;
    position: relative;
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
    .header {
        display: flex;
        flex-direction: column;
        .title {
            font-size: 50px;
            padding-left: 7px;
        }
        .line {
            width: 100%;
            height: 24px;
            background-image: url('../assets/images/card/line.png');
            background-size: 104%;
            background-position: center top;
            background-repeat: no-repeat;
            margin-top: 15px;
        }
        .intro {
            font-size: 21px;
            .times {
                font-size: 36px;
                color: #587e72;
            }
        }
    }
    .cards {
        width: 100%;
        height: 610px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        margin: 60px 0 48px;
        position: relative;
        z-index: 100;
        .item {
            width: 204px;
            height: 268px;
            position: relative;
            z-index: 100;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .btn-container {
        padding: 0 90px;
        .btn {
            white-space: nowrap;
            padding: 30px 70px;
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
}
</style>