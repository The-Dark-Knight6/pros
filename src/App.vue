<template>
  <div id="app">
    <navs></navs>
    <router-view/>
    <foots></foots>
  </div>
</template>

<script>
import navs from './components/navs'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components :{
    navs,
  },
  methods : {

  }
}
</script>

<style>
body,html{
  margin: 0%;
  padding: 0%;
  background: #f8faFa;
}
</style>
