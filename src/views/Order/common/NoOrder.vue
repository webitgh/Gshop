<template>
    <div class="no-order">
        <div>
            <img src="../images/person.png" alt="">
            <p>登录后查看外卖订单</p>
            <a href="javascript:;">立即登录</a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'NoOrder'
    }
</script>

<style scoped lang="less">
.no-order{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    >div{
        width: 60%;
        margin-top: 120px;
        text-align: center;
        p{
            font-size: 18px;
            margin-bottom: 10px;
        }
        a{
            display: inline-block;
            padding: 10px 20px;
            background: var(--color-high-text);
            border-radius: 5px;
            color: #fff;
            font-size: 12px;
        }
    }
    img{
        width: 100%;
        height: 30%;
        display: block;
    }
}
</style>