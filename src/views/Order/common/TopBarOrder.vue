<template>
    <top-bar class="top-bar">
        <div slot="center" class="center">订单列表</div>
    </top-bar>
</template>

<script>
import TopBar from 'components/TopBar/TopBar'
    export default {
        name:'TopBarOrder',
        components:{
            TopBar
        }
    }
</script>

<style scoped>
.top-bar{
    background: var(--color-tint);
}
.center{
    font-size: 22px;
    color: #fff;
}
</style>