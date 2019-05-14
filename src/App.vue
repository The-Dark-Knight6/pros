<template>
  <div id="app">
    <navs></navs>
    <router-view id="views"/>
    <foots></foots>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    }
  },
}
</script>

<style>
body,html{
  margin: 0%;
  padding: 0%;
  background: #f8faFa;
}
#views{
  margin: .2rem 1.2rem;
}
@media only screen and (min-width: 1200px){
  #views{
    margin: 0% 30%;
    transition: .6s;
  }
}
</style>
