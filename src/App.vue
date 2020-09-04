<template>
  <div>
    <Map />
    <HUD />
  </div>
</template>

<script>
  import store from './store'
  import Map from './components/Map.vue'
  import HUD from './components/HUD.vue'

  import FastClick from 'fastclick'
  FastClick.attach(document.body)

  store.commit('shuffle')
  store.commit('explore')

  export default {
    components: { Map, HUD }
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
</style>
