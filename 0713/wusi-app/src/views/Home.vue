<template>
    <div class="home">
        <div class="header">
            <div class="header__line"></div>
            <div class="wrapper">
                <div class="left">
                    <div class="content">
                        <div class="title">传青年故事</div>
                        <div class="title">弘五四精神</div>
                    </div>
                </div>
                <div class="right">
                    <div class="name">
                        <div class="content">
                            <div class="text">红岩</div>
                            <div class="text">早报</div>
                        </div>
                    </div>

                    <div class="time">
                        <div class="content">1919-2020</div>
                    </div>
                </div>
            </div>
            <div class="header__line"></div>
        </div>
        <div class="line"></div>
        <div class="main">
            <div class="top">
                <div class="first container">
                    <div class="content">
                        <div class="title">第一期</div>
                        <div class="progress">0/4</div>
                    </div>
                </div>
                <div class="second container">
                    <div class="content">
                        <div class="title">第二期</div>
                        <div class="progress">0/4</div>
                        <div class="bg"></div>
                    </div>

                    <div class="lock">
                        <img src="../assets/images/home/lock.png" />
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="third container">
                    <div class="content">
                        <div class="title">第三期</div>
                        <div class="progress">0/4</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../assets/images/home/card.png" />
            <div class="count">4</div>
        </div>
    </div>
</template>
<script>

export default {


}
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    transform: rotate(-1deg);
    transform-origin: center;
    color: #fff;
    padding: 45px 40px 0;
    position: relative;

    .header {
        &__line {
            margin: 0 2px;
            width: 100%;
            height: 13px;
            background-color: #c16c5e;
            opacity: 0.8;
            background-image: url('../assets/images/home/star.png');
            background-repeat: repeat-x;
            background-position: center;
        }
        .wrapper {
            height: 235px;
            display: flex;
            padding: 10px 5px;
            .left,
            .right {
                height: 100%;
                .content {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(140, 19, 23, 0.8);
                    padding: 25px 45px;
                    .title {
                        font-size: 69px;
                    }
                }
            }
            .left {
                flex: 0 0 475px;
                margin-right: 10px;
                border: 2px solid rgba(140, 19, 23, 0.8);
                padding: 5px;
            }
            .right {
                flex: 0 0 150px;
                .name,
                .time {
                    padding: 5px;
                    border: 2px solid rgba(140, 19, 23, 0.8);
                }
                .name {
                    height: 135px;
                    font-size: 37px;
                    .content {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        white-space: nowrap;
                    }
                }
                .time {
                    margin-top: 5px;
                    height: calc(100% - 140px);
                    font-size: 25px;
                    .content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
    .line {
        background-image: url('../assets/images/home/line.png');
        height: 58px;
        width: 100%;
        background-size: 110%;
        background-repeat: no-repeat;
        background-position: top;
        transform: rotate(1deg);
        margin: 12px 0;
    }
    .main {
        height: 680px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        .top {
            display: flex;
            justify-content: space-between;
            height: 458px;
            .first {
                flex: 0 0 275px;
                .content {
                    background-image: url('../assets/images/home/first.png');
                }
            }
            .second {
                flex: 0 0 373px;
                position: relative;
                .content {
                    z-index: 10;
                    .bg {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        filter: blur(5px);
                        background-image: url('../assets/images/home/second.png');
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                        z-index: -1;
                    }
                }
                .lock {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-53px, -72px);
                    z-index: 10;
                    img {
                        width: 50%;
                        height: 50%;
                    }
                }
            }
        }
        .bottom {
            width: 100%;
            height: 214px;
            .third {
                height: 100%;
                .content {
                    background-image: url('../assets/images/home/third.png');
                    padding: 14px 17px;
                }
            }
        }
        .container {
            border: 2px solid #ca3a13;
            width: 100%;
            height: 100%;
            padding: 6px;
            font-size: 33px;
            .content {
                transform: rotate(1deg);
                height: 100%;
                width: 100%;
                padding: 12px 15px;
                display: flex;
                justify-content: space-between;
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
        }
    }
    .card {
        position: fixed;
        width: 180px;
        height: 220px;
        right: 0;
        top: 900px;
        z-index: 999;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        .count {
            position: absolute;
            right: 44px;
            top: 5px;
            font-size: 48px;
            color: #ebd3b0;
        }
    }
}
</style>
