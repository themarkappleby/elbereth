<template>
  <div class="map">
    <div class="map-inner">
      <Card v-for="card in map" v-bind:card="card" v-bind:key="card.id" />
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import Card from './Card.vue'

  window.map = { width: 5000, height: 5000 }

  export default {
    components: { Card },
    mounted: function () {
      const mapInner = document.querySelector('.map-inner')
      mapInner.style.width = window.map.width + 'px'
      mapInner.style.height = window.map.height + 'px'
      document.querySelector('.map').scrollTo(
        (window.map.width / 2) - (window.innerWidth / 2),
        (window.map.height / 2) - (window.innerHeight / 2)
      )
    },
    computed: {
      map () {
        return store.state.map;
      }
    }
  }
</script>

<style lang="scss" scoped>
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
