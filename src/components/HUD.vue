<template>
  <div class="HUD">
    <Die v-bind:value="die" />
    <div class="remaining">
      <div class="remaining-floor">
        Floor {{floor}} of {{floors}}
      </div>
      <div class="remaining-cards">
        Cards {{seenCards}} of {{totalCards}}
      </div>
    </div>
    <div class="overlay" v-bind:class="{force: forceHUD}"></div>
    <div class="cards" v-bind:class="{force: forceHUD}">
      <Card v-bind:card="inv.sword" v-on:click="click" />
      <Card v-bind:card="inv.staff" v-on:click="click" />
      <Card v-bind:card="inv.bow" v-on:click="click" />
      <Card v-bind:card="inv.armor" v-on:click="click" />
      <Card v-bind:card="inv.helm" v-on:click="click" />
      <Card v-bind:card="inv.gauntlets" v-on:click="click" />
      <Card v-bind:card="inv.coin" v-on:click="click" />
      <Card v-bind:card="inv.key" v-on:click="click" />
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import Card from './Card.vue'
  import Die from './Die.vue'

  export default {
    components: { Card, Die },
    methods: {
      click(evt, card) {
        if (store.state.shopping) {
          if (card.flipped && card.name !== 'Key') {
            store.commit({ type: 'flip', card })
            store.commit('stopShopping')
            store.commit('releaseHUD')
          }
        } else if (store.state.forceHUD) {
          if (card.flipped) {
            if (card.name !== 'Coin' && card.name !== 'Key') {
              store.commit({type: 'discard', card})
              store.commit('releaseHUD')
              store.commit('engage', {card: null})
              store.commit({
                type: 'setStrength',
                requiredStrength: 0
              })
            }
          } else {
            store.commit({ type: 'flip', card })
            if (card.type === 'armor') {
              store.commit('releaseHUD')
              store.commit('engage', {card: null})
              store.commit({
                type: 'setStrength',
                requiredStrength: 0
              })
            } else if (card.type === 'weapon') {
              store.commit('increaseDie')
              if (store.state.die >= store.state.requiredStrength) {
                store.commit({
                  type: 'setStrength',
                  requiredStrength: 0
                })
                store.commit({
                  type: 'flip',
                  card: store.state.engaged
                })
                store.commit('releaseHUD')
                store.commit('explore')
                if (store.state.engaged.type === 'boss') {
                  store.commit('flip', { card: store.state.inv.key })
                  if (store.state.floor === 7) {
                    window.setTimeout(() => {
                      alert('Congratulations! You Won!')
                      window.location.reload()
                    }, 500)
                  }
                }
                store.commit('engage', {card: null})
              }
            }
          }
        }
      }
    },
    data: () => {
      return {
        floors: ((store.state.deck.length + store.state.map.length - 3) / 7) + 1
      }
    },
    computed: {
      inv () {
        return store.state.inv
      },
      floor () {
        return store.state.floor
      },
      seenCards () {
        return store.state.map.length
      },
      totalCards () {
        return store.state.deck.length + store.state.map.length
      },
      forceHUD () {
        return store.state.forceHUD
      },
      damage () {
        return store.state.damage
      },
      die () {
        return store.state.die
      }
    }
  }
</script>

<style lang="scss" scoped>
  .remaining {
    position: absolute;
    font-weight: bold;
    font-size: 20px;
    text-align: left;
    top: 16px;
    left: 16px;
    color: white;
    &-floor {
      margin-bottom: 3px;
    }
    &-cards {
      font-size: 16px;
    }
  }
  .cards {
    position: absolute;
    bottom: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw - 200px);
    max-width: 1400px;
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 25;
    @media (max-width: 600px) {
      bottom: 0;
      width: 100%;
    }
    &.force {
      bottom: 10px;
    }
  }
  .overlay {
    transition: all 0.2s ease-in-out;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 200px;
    opacity: 0.2;
    pointer-events: none;
    background: linear-gradient(rgba(#AE2F2E, 0), rgba(#AE2F2E, 0.7));
    filter: grayscale(100%);
    &.force {
      height: 100vh;
      opacity: 1;
      filter: grayscale(0);
    }
  }
</style>
