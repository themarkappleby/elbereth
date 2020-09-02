<template>
  <div
    class="card"
    v-bind:class="{ flipped, safe, inv, engaged, boss, descend }"
    v-bind:style="pos"
    v-on:click="$emit('click', $event, card)"
  >
    <div class="card-front" v-bind:style="frontImage">
      <div class="strength" v-if="card.strength">
        {{card.strength}}
      </div>
    </div>
    <div class="card-back" v-bind:style="backImage"></div>
  </div>
</template>

<script>
  import posToPix from '../utils/posToPix'
  import images from '../utils/images'
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
      pos() {
        if (this.card.x !== undefined && this.card.y !== undefined) {
          const px = posToPix(this.card.x, this.card.y)
          return {
            left: `${px.x}px`,
            top: `${px.y}px`
          }
        }
        return {}
      },
      frontImage() {
        if (this.card.inv) {
          return {
            backgroundImage: `url(${images['Inv' + this.card.name]})`
          }
        }
        return {
          backgroundImage: `url(${images[this.card.name]})`
        }
      },
      backImage() {
        if (this.card.inv) {
          return {
            backgroundImage: `url(${images['InvNo' + this.card.name]})`
          }
        }
        return {
          backgroundImage: `url(${images.Open})`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 85px;
    height: 118px;
    margin-left: -35px;
    margin-top: -47px;
    position: absolute;
    top: 0;
    left: 0;
    &:hover {
      .card-front {
        box-shadow: 0 10px 10px rgba(black,0.5);
        transform: translateY(-10px) rotate(4deg) scale(1.05);
      }
      z-index: 1;
    }
    &.inv:hover {
      z-index: 1;
      .card-front {
        box-shadow: 0 10px 10px rgba(black,0.5);
        transform: translateY(-50px) rotate(4deg) scale(1.05);
      }
    }
    &.inv.flipped:hover {
      z-index: 99999;
      .card-front {
        transform: none;
      }
      .card-back {
        box-shadow: 0 10px 10px rgba(black,0.2);
        transform: translateY(-5px) rotateY(0) rotateZ(3deg) scale(1.05);
      }
    }
    .card-front, .card-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 10px;
      box-shadow: 0 0 5px rgba(black,0.2);
      transition: all 0.2s ease-in-out;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 13px;
      text-align: center;
      border: 1px solid #848484;
      background-size: cover;
      background-color: white;
    }
    .card-front {
      cursor: pointer;
      color: black;
    }
    .card-back {
      transform: rotateY(180deg) translateZ(0.1px);
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
      height: 175px;
      border-radius: 14px;
      top: auto;
      margin: 0;
      position: relative;
      .card-front {
        font-size: 16px;
        background-color: white;
        color: black;
      }
      .card-back {
        font-size: 16px;
        background-color: white;
        color: #aaa;
        cursor: pointer;
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          border-radius: 9px;
          opacity: 0.4;
        }
      }
    }
    &.engaged {
      z-index: 22;
      .card-front {
        transform: translateY(-5px) rotate(3deg) scale(2);
      }
    }
    .strength {
      font-size: 22px;
      position: absolute;
      top: 10px;
      right: 12px;
      color: #B82F30;
      text-shadow:
        1px 1px 0 white,
        -1px 1px 0 white,
        1px -1px 0 white,
        -1px -1px 0 white
        ;
    }
  }
</style>
