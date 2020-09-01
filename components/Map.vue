<template>
  <div class="map">
    <div class="map-inner">
      <Card
        v-for="card in map"
        v-bind:card="card"
        v-bind:key="card.id"
        v-on:click="click"
      />
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
    },
    methods: {
      click(evt, card) {
        if (card.flipped) return false
        const strength = card.strength
        if (strength) {
          store.commit('roll')
          if (store.state.die >= strength) {
            store.commit({ type: 'flip', card })
            store.commit('explore')
          } else {
            store.commit({
              type: 'setStrength',
              strength
            })
            store.commit('forceHUD')
            store.commit({
              type: 'engage',
              card
            })
          }
        } else if (card.type === 'item') {
          const invCard = store.state.inv[card.id]
          if (invCard && invCard.flipped) {
            store.commit({ type: 'flip', card })
            store.commit({
              type: 'flip',
              card: invCard
            })
          }
        } else if (card.name === 'Wall') {
          store.commit({ type: 'flip', card })
          store.commit('explore')
          const roll = Math.floor(Math.random() * 6) + 1
          const lookupTable = ['sword', 'staff', 'bow', 'armor', 'helm', 'gauntlets']
          const id = lookupTable[roll - 1]
          if (!store.state.inv[id].flipped) {
            store.commit({
              type: 'flip',
              card: store.state.inv[id]
            })
          }
        }
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
