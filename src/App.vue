<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  created(){
    
  }
}
</script>

<style>
@import '../static/css/base.css';
body,html{
  width: 100%;
  height: 100%;
}
#app{
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
