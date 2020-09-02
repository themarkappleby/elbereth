<template>
  <div
    class="card"
    v-bind:class="{
      flipped,
      safe,
      inv,
      engaged,
      boss,
      descend
    }"
    :style="style"
    v-on:click="$emit('click', $event, card)"
  >
    <div class="card-front">
      {{ card.name }}
      <div class="strength" v-if="card.strength">
        {{card.strength}}
      </div>
    </div>
    <div class="card-back">
      <span v-if="card.inv">
        {{card.name}}
      </span>
    </div>
  </div>
</template>

<script>
  import posToPix from '../utils/posToPix'
  import store from '../store'

  export default {
    props: [ 'card' ],
    computed: {
      flipped() {
        return this.card.flipped
      },
      safe() {
        return this.card.safe
      },
      inv() {
        return this.card.inv
      },
      boss() {
        return this.card.type === 'boss'
      },
      descend() {
        return this.card.id === 'descend'
      },
      engaged() {
        if (!store.state.engaged) return false
        return this.card.id === store.state.engaged.id
      },
      style() {
        if (this.card.x !== undefined && this.card.y !== undefined) {
          const pos = posToPix(this.card.x, this.card.y)
          const styles = {
            left: `${pos.x}px`,
            top: `${pos.y}px`
          }
          return styles
        }
        return {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 70px;
    height: 94px;
    margin-left: -35px;
    margin-top: -47px;
    position: absolute;
    top: 0;
    left: 0;
    &:hover {
      .card-front {
        box-shadow: 0 10px 10px rgba(black,0.2);
        transform: translateY(-5px) rotate(3deg) scale(1.05);
      }
      z-index: 1;
    }
    &.inv.flipped:hover {
      .card-back {
        box-shadow: 0 10px 10px rgba(black,0.2);
        transform: translateY(-5px) rotateY(0) rotateZ(3deg) scale(1.05);
      }
      z-index: 1;
    }
    .card-front, .card-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(black,0.1);
      transition: all 0.2s ease-in-out;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 13px;
      text-align: center;
      border-width: 5px;
      border-style: solid;
    }
    .card-front {
      cursor: pointer;
      color: white;
      background: #AE2F2E;
      border-color: darken(#AE2F2E, 10);
    }
    &.boss .card-front {
      background: darken(#AE2F2E, 10);
    }
    .card-back {
      background: #35AE2F;
      border-color: darken(#35AE2F, 10);
      transform: rotateY(180deg) translateZ(0.1px);
    }
    &.safe .card-front {
      background: #35AE2F;
      border-color: darken(#35AE2F, 10);
    }
    &.descend .card-front {
      background: darken(#35AE2F, 10);
    }
    &.flipped {
      .card-front {
        transform: rotateY(-180deg);
      }
      .card-back {
        transform: rotateY(0deg);
      }
    }
    &.inv {
      width: 120px;
      height: 160px;
      border-radius: 14px;
      top: auto;
      margin: 0;
      position: relative;
      .card-front {
        font-size: 16px;
        background: white;
        border-color: black;
        color: black;
      }
      .card-back {
        font-size: 16px;
        background: #c8c8c8;
        border-color: #c8c8c8;
        color: white;
        cursor: pointer;
      }
    }
    &.engaged {
      z-index: 22;
      .card-front {
        transform: translateY(-5px) rotate(3deg) scale(2);
      }
    }
    .strength {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
</style>
