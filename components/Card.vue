<template>
  <div class="card" :style="style" v-on:click="click">
    {{ card.name }}
    <div class="strength" v-if="card.strength">
      {{card.strength}}
    </div>
  </div>
</template>

<script>
import explore from '../utils/explore'

export default {
  props: [ 'card', 'state' ],
  data: function () {
    return {
      justAdded: true
    }
  },
  methods: {
    click: function () {
      this.card.safe = true
      this.card.name = ''
      this.card.strength = null
      explore(this.state)
    }
  },
  mounted: function () {
    window.setTimeout(() => {
      this.justAdded = false
    }, 0)
  },
  computed: {
    style() {
      const pos = posToPix(this.card.x, this.card.y)
      const styles = {
        background: this.card.safe ? '#35AE2F' : '#AE2F2E',
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

function posToPix (x, y) {
  const centerX = window.map.width / 2
  const centerY = window.map.height / 2
  const cardWidth = 70
  const cardHeight = 94
  const gap = 10
  return {
    x: centerX + (x * (cardWidth + gap)),
    y: centerY + (y * (cardHeight + gap))
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  border-radius: 10px;
  background: white;
  font-size: 13px;
  width: 70px;
  height: 94px;
  margin-left: -35px;
  margin-top: -47px;
  box-shadow: 0 0 10px rgba(black,0.1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px) rotate(3deg) scale(1.05);
    box-shadow: 0 10px 10px rgba(black,0.2);
    z-index: 1;
  }

  .strength {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
