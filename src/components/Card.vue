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
    <div class="card-back" v-bind:style="backImage">
      <span v-if="card.inv">
        {{card.name}}
      </span>
    </div>
  </div>
</template>

<script>
  import posToPix from '../utils/posToPix'
  import store from '../store'
  import Entrance from '../assets/Entrance.png'
  import Descend from '../assets/Descend.png'
  import Shop from '../assets/Shop.png'
  import Wall from '../assets/Wall.png'
  import Rat from '../assets/Rat.png'
  import Spider from '../assets/Spider.png'
  import Snake from '../assets/Snake.png'
  import Dragon from '../assets/Dragon.png'
  import Sword from '../assets/Sword.png'
  import Staff from '../assets/Staff.png'
  import Bow from '../assets/Bow.png'
  import Armor from '../assets/Armor.png'
  import Gauntlets from '../assets/Gauntlets.png'
  import Helm from '../assets/Helm.png'
  import Coin from '../assets/Coin.png'
  import Open from '../assets/Open.png'
  import InvSword from '../assets/InvSword.png'
  import InvStaff from '../assets/InvStaff.png'
  import InvBow from '../assets/InvBow.png'
  import InvArmor from '../assets/InvArmor.png'
  import InvGauntlets from '../assets/InvGauntlets.png'
  import InvHelm from '../assets/InvHelm.png'
  import InvCoin from '../assets/InvCoin.png'
  const images = {
    Entrance, Descend, Shop, Wall, Rat, Spider, Snake, Dragon, Sword, Staff, Bow, Armor, Gauntlets, Helm, Coin, Open, InvSword, InvStaff, InvBow, InvArmor, InvGauntlets, InvHelm, InvCoin
  }

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
        if (this.card.inv) return
        return {
          backgroundImage: `url(${Open})`
        }
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
      box-shadow: 0 0 5px rgba(black,0.2);
      transition: all 0.2s ease-in-out;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 13px;
      text-align: center;
      border-width: 1px;
      border-style: solid;
      background-size: cover;
    }
    .card-front {
      cursor: pointer;
      color: black;
      background-color: #AE2F2E;
      border-color: darken(#AE2F2E, 10);
    }
    &.boss .card-front {
      background-color: darken(#AE2F2E, 10);
    }
    .card-back {
      background-color: #35AE2F;
      border-color: darken(#35AE2F, 10);
      transform: rotateY(180deg) translateZ(0.1px);
    }
    &.safe .card-front {
      background-color: #35AE2F;
      border-color: darken(#35AE2F, 10);
    }
    &.descend .card-front {
      background-color: darken(#35AE2F, 10);
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
        background-color: white;
        border-color: black;
        color: black;
      }
      .card-back {
        font-size: 16px;
        background-color: white;
        border-color: black;
        color: #aaa;
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
      color: black;
      text-shadow:
        1px 1px 0 white,
        -1px 1px 0 white,
        1px -1px 0 white,
        -1px -1px 0 white
        ;
    }
  }
</style>
