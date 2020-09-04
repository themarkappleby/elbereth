<template>
  <div class="die" v-bind:class="dieClass" v-if="value">
    <span class="pip"></span>
    <span class="pip"></span>
    <span class="pip"></span>
    <span class="pip"></span>
    <span class="pip"></span>
    <span class="pip"></span>
  </div>
</template>

<script>
  export default {
    props: [ 'value', 'size' ],
    computed: {
      dieClass () {
        const classObj = {}
        classObj[`die-${this.value}`] = true
        if (this.size) {
          classObj[`die-${this.size}`] = true
        }
        return classObj
      }
    }
  }
</script>

<style lang="scss" scoped>
  .die {
    position: absolute;
    top: 16px;
    right: 16px;
    box-shadow: 0 0 20px rgba(black, 0.4);
    padding: 20px 27px;
    background: white;
    border-radius: 12px;
    font-weight: bold;
    font-size: 30px;
    width: 70px;
    height: 70px;
    &-small {
      top: -14px;
      right: -14px;
      transform: scale(0.25);
      .pip {
        background: #B82F30;
      }
    }
  }
  .pip {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-left: -7px;
    margin-top: -7px;
    border-radius: 50%;
    background: black;
    &:nth-child(1) {
      top: 25%;
      left: 25%;
    }
    &:nth-child(2) {
      top: 50%;
      left: 25%;
    }
    &:nth-child(3) {
      top: 75%;
      left: 25%;
    }
    &:nth-child(4) {
      top: 25%;
      left: 75%;
    }
    &:nth-child(5) {
      top: 50%;
      left: 75%;
    }
    &:nth-child(6) {
      top: 75%;
      left: 75%;
    }
  }
  .die-1 {
    .pip {
      display: none;
      &:nth-child(1) {
        display: block;
        top: 50%;
        left: 50%;
      }
    }
  }
  .die-2 {
    .pip {
      display: none;
      &:nth-child(1), &:nth-child(6) {
        display: block;
      }
    }
  }
  .die-3 {
    .pip {
      display: none;
      &:nth-child(1), &:nth-child(6) {
        display: block;
      }
      &:nth-child(2) {
        display: block;
        top: 50%;
        left: 50%;
      }
    }
  }
  .die-4 {
    .pip {
      &:nth-child(2), &:nth-child(5) {
        display: none;
      }
    }
  }
  .die-5 {
    .pip {
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(5) {
        top: 50%;
        left: 50%;
      }
    }
  }
</style>
