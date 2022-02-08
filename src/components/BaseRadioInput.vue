<template>
  <div class="radio-input-wrapper">
    <div class="radio-input-wrapper__container" :class="{ active: radioInputValue.isActive }">
      <input type="radio" :id="radioInputValue.radioId" :name="radioInputValue.radioName" @click="controlBorderLine(radioInputValue.id)">
      <label class="radio-input-wrapper__description" :for="radioInputValue.labelFor">
        <div class="description__title">{{ radioInputValue.labelTitle }}</div>
        <div class="description__time">{{ radioInputValue.labelTime }}</div>
      </label>
      <div class="radio-input-wrapper__price">{{ radioInputValue.shippingPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseRadioInput',
  props: {
    radioInputValue: {
      type: Object,
      required: true
    },
  },
  methods: {
    controlBorderLine(id) {
      this.$emit('control-border-line', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .radio-input-wrapper__container {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid getMapColor('shipping-border-color');
    position: relative;
    width: 100%;
    &.active {
      border: 1px solid getMapColor('text-color');
    }
    > .radio-input-wrapper__description {
      margin-left: 1rem;
      cursor: pointer;
      color: getMapColor('text-color');
      > .description__time {
        font-size: 0.8rem;
        color: getMapColor('shipping-text-color');
      }
    }
    > input[type="radio"] {
      -webkit-appearance: none;
      border: 1px solid getMapColor('black');
      border-radius: 50%;
      padding: 0.5rem;
      cursor: pointer;
      background-color: getMapColor('white');
      &:checked {
        box-shadow: inset 0 0 0 0.3rem getMapColor('radio-checked-color');
      }
    }
    > .radio-input-wrapper__price {
      position: absolute;
      top: 20%;
      right: 5%;
      color: getMapColor('text-color');
    }
  }
</style>