<template>
  <div>
    <div class="map">
      <div class="map-inner">
        <Card v-for="card in map" v-bind:card="card" v-bind:key="card.id" />
      </div>
    </div>
    <GUI />
  </div>
</template>

<script>
  import store from './store'
  import Card from './components/Card.vue'
  import GUI from './components/GUI.vue'

  window.map = {
    width: 5000,
    height: 5000
  }

  store.commit('shuffle')

  export default {
    components: {
      Card,
      GUI
    },
    mounted: function () {
      const mapInner = document.querySelector('.map-inner')
      mapInner.style.width = window.map.width + 'px'
      mapInner.style.height = window.map.height + 'px'
      document.querySelector('.map').scrollTo(
        (window.map.width / 2) - (window.innerWidth / 2),
        (window.map.height / 2) - (window.innerHeight / 2)
      )
      store.commit('explore')
    },
    data: function() {
      return { map: store.state.map };
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: sans-serif;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  .map {
    background: #eee;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
  .map-inner {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
</style>
