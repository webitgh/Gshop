<template>
    <div class="num-nav">
        <div class="price">
            <p>
                <span>0.00</span>
                <span>元</span>
            </p>
            <p>我的余额</p>
        </div>
        <div class="discount">
            <p>
                <span>0</span>
                <span>个</span>
            </p>
            <p>我的优惠</p>
        </div>
        <div class="credit">
            <p>
                <span>0</span>
                <span>分</span>
            </p>
            <p>我的积分</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'NumNav'
    }
</script>

<style scoped lang="less">
.num-nav{
    width: 100%;
    height: 80px;
    display: flex;
    background: #fff;
    >div{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p:nth-child(1)>span:nth-child(1){
            font-size: 30px;
            font-weight: 700;
        }
        p:nth-child(2){
            font-size: 14px;
        }
    }
    .price>p:nth-child(1)>span:nth-child(1){
        color: #f90;
    }
    .discount>p:nth-child(1)>span:nth-child(1){
        color: #ff5f3e;
    }
    .credit>p:nth-child(1)>span:nth-child(1){
        color: #6ac20b;
    }
    .discount{
        border-left: 1px solid rgba(100,100,100,.2);
        border-right: 1px solid rgba(100,100,100,.2);
    }
}
</style>