<template>
  <div class="gui">
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
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .gui {
    position: absolute;
    bottom: -40px;
    left: 20px;
    width: calc(100vw - 40px);
    z-index: 20;
    &:before {
      content: '';
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
    font-family: sans-serif;
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
