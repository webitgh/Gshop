<template>
    <div class="footer_guide">
        <a class="guide_item" 
            @click="$router.push('/home')"
            :class="{active: '/home' === $route.path}">
            <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>外卖</span>
        </a>
        <a class="guide_item" 
            @click="$router.push('/search')"
            :class="{active:'/search' === $route.path}">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </a>
        <a class="guide_item" 
            @click="$router.push('/order')"
            :class="{active:'/order' === $route.path}">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </a>
        <a class="guide_item" 
            @click="$router.push('/profile')"
            :class="{active:'/profile' === $route.path}">
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </a>
    </div>
</template>

<script>
    export default {
        name:'FooterGuide',
        data(){
            return {
                
            }
        }
    }
</script>

<style scoped lang="less">
.footer_guide{
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 49px;
    display: flex;
    border-top: 1px solid #e4e4e4;
    .guide_item{
        display: flex;
        flex: 1;
        text-align: center;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        color: #999;
        span{
            font-size: 12px;
            .iconfont{
                font-size: 22px;
            }
        }
    }
    .active{
        color: var(--color-high-text);
    }
}

</style>