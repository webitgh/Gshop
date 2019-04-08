<template>
    <div class="search">
        <input type="text" placeholder="请输入商家或美食名称">
        <a href="javascript:;">提交</a>
    </div>
</template>

<script>
    export default {
        name:'InputSearch'
    }
</script>

<style scoped lang="less">
.search{
    width: 100%;
    height: 59px;
    background: #fff;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    input{
        width: 284px;
        height: 35px;
        margin: 0 7px;
        font-size: 14px;
        color: #999;
        font-weight: 700;
        border: none;
        padding-left: 6px;
        outline: none;
        background-color: #f2f2f2;
    }
    a{
        display: inline-block;
        width: 65px;
        height: 35px;
        border-radius: 5px;
        background: var(--color-tint);
        text-align: center;
        line-height: 35px;
        color: #fff;
        font-weight: 700;
    }
}
</style>