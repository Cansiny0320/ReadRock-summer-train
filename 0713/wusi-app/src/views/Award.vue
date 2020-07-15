<template>
    <div class="award">
        <div class="yellow-mask"></div>

        <div class="header"></div>
        <div class="text">
            <div class="title">{{ title }}</div>
            <div class="type">
                <span
                    v-for="(item, index) of typeStr"
                    :key="index"
                    class="item"
                    >{{ item }}</span
                >
            </div>
        </div>
        <div class="btn-container continue">
            <div class="btn">
                继 续 抽 奖
            </div>
        </div>
        <div class="btn-container explore">
            <div class="btn">
                探 索 故 事
            </div>
        </div>
        <div class="tip">
            请关注红岩网校工作站相关信息 在领奖时间段携学生证兑换奖励
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '恭喜你！获得',
            typeStr: '二等奖',
        }
    }
}
</script>

<style lang="scss" scoped>
.award {
    width: 100%;
    height: 100vh;
    padding: 80px 63px 0 36px;
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
        width: 100%;
        height: 150px;
        background-image: url('../assets/images/award/header.png');
        background-size: 100% 100%;
        margin-bottom: 80px;
    }
    .text {
        text-align: center;
        .title {
            font-size: 46px;
            color: #933523;
        }
        .type {
            font-size: 120px;
            color: #b14b33;
            margin: 60px 0 100px;
            .item {
                padding: 20px;
                background-image: url('../assets/images/award/box.png');
                background-size: 100%;
            }
        }
    }
    .btn-container {
        margin: 0 90px;
        .btn {
            white-space: nowrap;
            padding: 50px 70px;
            font-size: 36px;
            color: #fff6e7;
            text-align: center;
            background-image: url('../assets/images/card/btn.png');
            background-size: 100%;
            background-position: center top;
            background-repeat: no-repeat;
        }
    }
    .continue {
        margin-bottom: 50px;
    }
    .explore {
        margin-bottom: 40px;
    }
    .tip {
        font-size: 24px;
        color: #933523;
        margin: 0 150px;
        line-height: 150%;
    }
}
</style>