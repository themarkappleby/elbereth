<template>
  <div class="map">
    <div class="map-inner">
      <Card v-for="card in state.map" v-bind:card="card" v-bind:key="card.id" v-bind:state="state" />
    </div>
  </div>
</template>

<script>
import initialState from './initialState'
import Card from './components/Card.vue'
import explore from './utils/explore'

window.map = {
  width: 5000,
  height: 5000
}

const state = initialState()
shuffle(state.deck)

export default {
  components: {
    Card
  },
  mounted: function () {
    const mapInner = document.querySelector('.map-inner')
    mapInner.style.width = window.map.width + 'px'
    mapInner.style.height = window.map.height + 'px'
    document.querySelector('.map').scrollTo(
      (window.map.width / 2) - (window.innerWidth / 2),
      (window.map.height / 2) - (window.innerHeight / 2)
    )
    explore(state)
  },
  data: function() {
    return { state };
  }
}

function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  .map {
    font-family: sans-serif;
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
