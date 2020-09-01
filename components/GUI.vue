<template>
  <div>
    <div class="die">{{ die }}</div>
    <div class="strength" v-if="strength">
      Need {{strength}}
    </div>
    <div class="cards" v-bind:class="{force: forceGUI}">
      <div class="group left">
        <div class="card">
          Sword
        </div>
      </div>
      <div class="group middle">
        <div class="card">
          Coin
        </div>
      </div>
      <div class="group right">
        <div class="card">
          Armor
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  export default {
    computed: {
      strength () {
        return store.state.requiredStrength
      },
      forceGUI () {
        return store.state.forceGUI
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
      background: linear-gradient(rgba(black, 0), rgba(black, 0.7));
    }
    &.force {
      bottom: -10px;
      &:before {
        pointer-events: all;
        height: 100vh;
        opacity: 0.9;
      }
    }
  }
  .group {
    position: absolute;
    bottom: 0;
    &.left {
      left: 0;
    }
    &.middle {
      left: calc(50% - 100px);
      transform: translateX(-50%);
    }
    &.right {
      right: 0;
      & .card {
        left: auto;
        right: 0;
      }
    }
  }
  .card {
    padding: 20px;
    border-radius: 14px;
    background: white;
    font-size: 16px;
    width: 120px;
    height: 160px;
    box-shadow: 0 0 10px rgba(black,0.1);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-25px) rotate(3deg) scale(1.05);
      box-shadow: 0 10px 10px rgba(black,0.2);
      z-index: 1;
    }
  }
</style>
