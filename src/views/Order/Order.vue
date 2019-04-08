<template>
    <div>
        <top-bar-order></top-bar-order>
        <no-order></no-order>
        <footer-guide></footer-guide>
    </div>
</template>

<script>
import TopBarOrder from './common/TopBarOrder'
import NoOrder from './common/NoOrder'
import FooterGuide from 'components/FooterGuide/FooterGuide'
    export default {
        name:'Order',
        components:{
            TopBarOrder,
            NoOrder,
            FooterGuide
        }
    }
</script>

<style scoped>

</style>