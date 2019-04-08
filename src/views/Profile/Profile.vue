<template>
    <div>
        <top-bar-profile></top-bar-profile>
        <router-link to="/register">
            <login></login>
        </router-link>
        <num-nav class="num-nav"></num-nav>
        <items></items>
        <footer-guide></footer-guide>
    </div>
</template>

<script>
import TopBarProfile from './common/TopBarProfile'
import Login from './common/Login'
import NumNav from './common/NumNav'
import Items from './common/Items'
import FooterGuide from 'components/FooterGuide/FooterGuide'

    export default {
        name:'Profile',
        components:{
            TopBarProfile,
            Login,
            NumNav,
            Items,
            FooterGuide
        },
        props:{
            
        },
        data(){
            return {
                
            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>
.num-nav{
    margin-bottom: 10px;
}
</style>