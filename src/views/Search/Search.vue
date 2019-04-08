<template>
    <div class="search">
        <top-bar-search></top-bar-search>
        <input-search></input-search>
        <footer-guide></footer-guide>
    </div>
</template>

<script>
import TopBarSearch from './common/TopBarSearch'
import InputSearch from './common/InputSearch'
import FooterGuide from 'components/FooterGuide/FooterGuide'
    export default {
        name:'Search',
        components:{
            TopBarSearch,
            InputSearch,
            FooterGuide
        }
    }
</script>

<style scoped>
.search{
    /* background: #ccc; */
}
</style>