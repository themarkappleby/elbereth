<template>
  <div class="card" v-bind:class="{ flipped: flipped, safe: safe }" :style="style" v-on:click="click">
    <div class="card-front">
      {{ card.name }}
      <div class="strength" v-if="card.strength">
        {{card.strength}}
      </div>
    </div>
    <div class="card-back"></div>
  </div>
</template>

<script>
  import store from '../store'
  import posToPix from '../utils/posToPix'

  export default {
    props: [ 'card' ],
    data: function () {
      return {
        justAdded: true
      }
    },
    methods: {
      click: function () {
        if (this.card.flipped) return false
        const strength = this.card.strength
        if (strength) {
          store.commit('roll')
          if (store.state.die >= strength) {
            store.commit({
              type: 'flip',
              card: this.card
            })
            store.commit('explore')
          }
        }
      }
    },
    mounted: function () {
      window.setTimeout(() => {
        this.justAdded = false
      }, 0)
    },
    computed: {
      flipped() {
        return this.card.flipped
      },
      safe() {
        return this.card.safe
      },
      style() {
        const pos = posToPix(this.card.x, this.card.y)
        const styles = {
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }
        if (this.justAdded) {
          styles.transform = 'scale(1.2) rotate(-5deg)'
          styles.opacity = 0
        }
        return styles
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
    }
    .card-front {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      font-weight: bold;
      font-size: 13px;
      text-align: center;
      background: #AE2F2E;
    }
    .card-back {
      background: #35AE2F;
      transform: rotateY(180deg) translateZ(0.1px);
    }
    &.safe .card-front {
      background: #35AE2F;
    }
    &.flipped {
      .card-front {
        transform: rotateY(-180deg);
      }
      .card-back {
        transform: rotateY(0deg);
      }
    }

    .strength {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
</style>
