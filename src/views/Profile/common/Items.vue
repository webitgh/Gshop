<template>
    <div>
        <div class="item" v-for="(item,index) in list"
            :key="index">
            <div class="item-left">
                <span>
                    <i class="iconfont"
                    :class="item.myicon"></i>
                </span>
                <span>{{item.title}}</span>
            </div>
            <div class="item-right">
                <span>
                    <i class="iconfont icon-jiantou1"></i>
                </span>
            </div>
        </div>
        <div class="item fuwu">
            <div class="item-left">
                <span>
                    <i class="iconfont icon-fuwu"></i>
                </span>
                <span>服务中心</span>
            </div>
            <div class="item-right">
                <span>
                    <i class="iconfont icon-jiantou1"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Items',
        components:{

        },
        data(){
            return {
                list:[
                    {myicon:'icon-order-s',title:'我的订单'},
                    {myicon:'icon-jifen',title:'我的订单'},
                    {myicon:'icon-vip',title:'我的订单'},
                ]
            }
        }
    }
</script>

<style scoped lang="less">
.item{
    width: 100%;
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    border-bottom: 1px solid rgba(100,100,100,.2);
    .item-left{
        float: left;
        margin-left: 14px;
        span:nth-child(1){
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 4px;
            i{
                font-size: 30px;
                vertical-align: middle;
                color: #f00;
            }
        }
    }
    .item-right{
        float: right;
        margin-right: 14px;
        span{
            display: inline-block;
            width: 12px;
            height: 12px;
            i{
            font-size: 12px;
            }
        }
    }
}
.fuwu{
    margin-top: 14px;
}
</style>