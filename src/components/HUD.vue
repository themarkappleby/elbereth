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
    <div class="cards" v-bind:class="{force: forceHUD}">
      <div class="group left">
        <Card v-bind:card="inv.sword" v-on:click="click" v-if="!inv.sword.discarded" />
        <Card v-bind:card="inv.staff" v-on:click="click" v-if="!inv.staff.discarded" />
        <Card v-bind:card="inv.bow" v-on:click="click" v-if="!inv.bow.discarded" />
      </div>
      <div class="group middle">
        <Card v-bind:card="inv.armor" v-on:click="click" v-if="!inv.armor.discarded" />
        <Card v-bind:card="inv.helm" v-on:click="click" v-if="!inv.helm.discarded" />
        <Card v-bind:card="inv.gauntlets" v-on:click="click" v-if="!inv.gauntlets.discarded" />
      </div>
      <div class="group right">
        <Card v-bind:card="inv.coin" v-on:click="click" />
        <Card v-bind:card="inv.key" v-on:click="click" />
      </div>
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
    bottom: -60px;
    left: 20px;
    width: calc(100vw - 40px);
    transition: all 0.2s ease-in-out;
    display: flex;
    @media (max-width: 600px) {
      bottom: -5px;
    }
    &:before {
      content: '';
      transition: all 0.2s ease-in-out;
      display: block;
      position: absolute;
      bottom: 0;
      left: -20px;
      width: 100vw;
      height: 200px;
      opacity: 0.2;
      pointer-events: none;
      background: linear-gradient(rgba(#AE2F2E, 0), rgba(#AE2F2E, 0.7));
      filter: grayscale(100%);
    }
    &.force {
      bottom: -10px;
      &:before {
        height: 100vh;
        opacity: 1;
        filter: grayscale(0);
      }
    }
  }
  .group {
    width: 33.33%;
    display: flex;
    flex-direction: row;
    z-index: 25;
    position: relative;
    justify-content: center;
    &.left {
      width: 40%;
    }
    &.middle {
      width: 40%;
    }
    &.right {
      width: 20%;
      right: 0;
    }
  }
</style>
