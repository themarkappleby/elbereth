<template>
  <div class="map">
    <div class="map-inner" v-bind:style="wood">
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
  import woodImage from '../assets/wood.jpg'

  window.map = { width: 5000, height: 5000 }

  window.recenter = () => {
    const mapInner = document.querySelector('.map-inner')
    mapInner.style.width = window.map.width + 'px'
    mapInner.style.height = window.map.height + 'px'
    document.querySelector('.map').scrollTo(
      (window.map.width / 2) - (window.innerWidth / 2),
      (window.map.height / 2) - (window.innerHeight / 2) + 50
    )
  }

  export default {
    components: { Card },
    mounted: function () {
      window.recenter()
    },
    data: () => {
      return {
        floors: ((store.state.deck.length + store.state.map.length - 3) / store.state.discardPerFloor) + 1
      }
    },
    computed: {
      map () {
        return store.state.map;
      },
      wood () {
        return {
          backgroundImage: `url(${woodImage})`
        }
      }
    },
    methods: {
      click(evt, card) {
        if (card.flipped) return false
        if (store.state.forceHUD) return false
        if (store.state.engaged && store.state.engaged.id === card.id) {
          return false
        }
        const strength = card.strength
        if (strength) {
          store.commit('roll')
          if (store.state.die >= strength) {
            store.commit({ type: 'flip', card })
            store.commit('explore')
            if (card.type === 'boss') {
              store.commit('flip', { card: store.state.inv.key })
              if (store.state.floor === this.floors) {
                window.setTimeout(() => {
                  alert('Congratulations! You Won!')
                  window.location.reload()
                }, 500)
              }
            }
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
            if (allDiscared(store.state.inv)) {
              window.setTimeout(() => {
                alert('You Lose. Try Again.')
                window.location.reload()
              }, 500)
            }
          }
        } else if (card.type === 'item') {
          const invCard = store.state.inv[card.name.toLowerCase()]
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
          if (store.state.inv[id].flipped) {
            store.commit({
              type: 'discard',
              card: store.state.inv[id]
            })
          } else if (store.state.inv[id].type !== 'damage') {
            store.commit({
              type: 'flip',
              card: store.state.inv[id]
            })
          }
        } else if (card.name === 'Shop') {
          if (!store.state.inv.coin.flipped) {
            store.commit({
              type: 'flip',
              card: store.state.inv.coin
            })
            store.commit('forceHUD')
            store.commit('startShopping')
          }
        } else if (card.id === 'descend' && !store.state.inv.key.flipped) {
          store.dispatch('descend')
        }
      }
    }
  }

  function allDiscared (inv) {
    let discarded = true
    Object.keys(inv).forEach(key => {
      if (inv[key].type !== 'damage' && key !== 'coin' && key !== 'key') {
        discarded = false
      }
    })
    return discarded
  }
</script>

<style lang="scss" scoped>
  .map {
    background: #eee;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 100vw;
      height: 100vh;
      position: fixed;
      box-shadow: inset 0 0 700px rgba(black, 0.8);
      top: 0;
      left: 0;
      pointer-events: none;
    }
  }
  .map-inner {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
</style>
