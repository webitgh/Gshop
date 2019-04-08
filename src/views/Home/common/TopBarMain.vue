<template>
    <top-bar class="top-bar">
        <div slot="left" class="left">
            <span>
                <i class="iconfont icon-sousuo"></i>
            </span>
        </div>
        <div slot="center" class="center">
            <span class="ellipsis">广州小蛮腰700米的高空上面</span>
        </div>
        <div slot="right" class="right">
            <a href="javascript:;">登录</a>
            <span>|</span>
            <a href="javascript:;">注册</a>
        </div>
    </top-bar>
</template>

<script>
import TopBar from 'components/TopBar/TopBar'

    export default {
        name:'TopBarMain',
        components:{
            TopBar
        }
    }
</script>

<style scoped lang="less">
.top-bar{
    color: #fff;
    background: var(--color-tint);
}
.left{
    span{
        .iconfont{
            font-size: 22px;
        }
    }
}
.center{
    span{
        font-size: 16px;
    }
}
.ellipsis{
    display: inline-block;
    width: 160px;
}
.right{
    width: 100px;
    font-size: 14px;
    span{
        margin: 0 10px;
    }
    a{
        color: #fff;
    }
}
</style>