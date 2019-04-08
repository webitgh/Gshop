<template>
    <div class="profile-number">
        <a href="javascript:" class="profile-link">
            <div class="profile_image">
            <i class="iconfont icon-person"></i>
            </div>
            <div class="user-info">
            <p class="user-info-top">登录/注册</p>
            <p>
                <span class="user-icon">
                <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
                <span class="icon-mobile-number">暂无绑定手机号</span>
            </p>
            </div>
            <span class="arrow">
            <i class="iconfont icon-jiantou1"></i>
            </span>
        </a>
    </div>
</template>

<script>
    export default {
        name:'Login'
    }
</script>

<style scoped lang="less">
.profile-number {
    .profile-link {
        *zoom: 1;
        position: relative;
        display: block;
        background: rgb(135,135,135);
        padding: 20px 10px;
        .profile_image {
            float: left;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            vertical-align: top;
            .icon-person {
                background: #e4e4e4;
                font-size: 62px;
            }
        }
        .user-info {
            float: left;
            margin-top: 8px;
            margin-left: 15px;
        }
        .user-info p {
            font-weight: 700;
            font-size: 18px;
            color: #fff;
            position: relative;
            .user-icon {
                display: inline-block;
                margin-left: -15px;
                margin-right: 10px;
                width: 20px;
                height: 20px;
                .icon-mobile {
                    font-size: 30px;
                    vertical-align: text-top;
                }
            }
            .icon-mobile-number {
                font-size: 14px;
                color: #fff;
                position: absolute;
                top: 8px;
                display: inline-block;
                width: 100px;
            }
        }
        .user-info p.user-info-top {
            padding-bottom: 8px;
        }
    }
    .profile-link::after {
        content: '';
        display: block;
        clear: both;
    }
    .profile-link .arrow {
        width: 12px;
        height: 12px;
        position: absolute;
        right: 15px;
        top: 40%;
        .icon-jiantou1 {
            color: #fff;
            font-size: 5px;
        }
    }
}
</style>