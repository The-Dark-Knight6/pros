<template>
  <div id="app">
    <navs id="fly"></navs>
    <keep-alive>
      <router-view id="views"/>
    </keep-alive>
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
  transition: .6s;
}
ul{
  list-style: none;
  padding: 0%;
}
*{
  font-size: 14px;
}
#views{
  margin: .2rem 1.2rem;
}
@media only screen and (min-device-width:480px){
  #views{
    margin: .2rem 30%;
    transition: .6s;
  }
}
</style>

