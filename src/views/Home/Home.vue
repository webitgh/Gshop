<template>
    <div>
        <top-bar-main class="topbar"></top-bar-main>
        <nav-swiper class="nav-swiper"></nav-swiper>
        <home-item></home-item>
        <footer-guide></footer-guide>
    </div>
</template>

<script>
import TopBarMain from 'views/Home/common/TopBarMain'
import NavSwiper from 'components/NavSwiper/NavSwiper'
import HomeItem from 'components/HomeItem/HomeItem'
import FooterGuide from 'components/FooterGuide/FooterGuide'

    export default {
        name:'Home',
        components:{
            TopBarMain,
            NavSwiper,
            HomeItem,
            FooterGuide
        }
    }
</script>

<style scoped>
.topbar{
    position: fixed;
    top: 0;
    z-index: 100;
}
.nav-swiper{
    margin-top: 44px;
}
</style>