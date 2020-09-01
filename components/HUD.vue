<template>
  <div class="HUD">
    <div class="die">{{ die }}</div>
    <div class="strength" v-if="strength">
      Strength {{strength}}
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
  export default {
    components: { Card },
    methods: {
      click(evt, card) {
        if (card.flipped) {
          store.commit({type: 'discard', card})
          store.commit('releaseHUD')
          store.commit({
            type: 'setStrength',
            requiredStrength: 0
          })
        } else {
          store.commit({ type: 'flip', card })
          if (card.type === 'armor') {
            store.commit('releaseHUD')
            store.commit({
              type: 'setStrength',
              requiredStrength: 0
            })
          } else if (card.type === 'weapon') {
            store.commit('increaseDie')
            if (store.state.die >= store.state.requiredStrength) {
              store.commit('releaseHUD')
              store.commit({
                type: 'setStrength',
                requiredStrength: 0
              })
            }
          }
        }
      }
    },
    computed: {
      inv () {
        return store.state.inv
      },
      strength () {
        return store.state.requiredStrength
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
  .die {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 20px 27px;
    background: white;
    border-radius: 12px;
    font-weight: bold;
    font-size: 30px;
  }
  .strength {
    position: absolute;
    top: 36px;
    right: 110px;
    font-weight: bold;
    font-size: 30px;
    text-align: right;
    color: #AE2F2E;
  }
  .cards {
    position: absolute;
    bottom: -60px;
    left: 20px;
    width: calc(100vw - 40px);
    z-index: 20;
    transition: all 0.2s ease-in-out;
    display: flex;
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
        pointer-events: all;
        height: 100vh;
        opacity: 0.9;
        filter: grayscale(0);
      }
    }
  }
  .group {
    width: 33.33%;
    display: flex;
    flex-direction: row;
    &.middle {
      justify-content: center;
    }
    &.right {
      right: 0;
      justify-content: flex-end;
    }
  }
</style>
