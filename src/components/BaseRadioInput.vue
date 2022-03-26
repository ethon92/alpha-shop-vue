<template>
  <div class="radio-input-wrapper" :class="{ 'dark-mode': darkMode }">
    <div class="radio-input-wrapper__container" :class="{ active: radioInputValue.isActive }">
      <input type="radio" 
        :id="radioInputValue.radioId" 
        :name="radioInputValue.radioName" 
        :checked="radioInputValue.isChecked" 
        @click="controlRadio(radioInputValue.id)"
      >
      <label class="radio-input-wrapper__description" :for="radioInputValue.labelFor">
        <div class="description__title">{{ radioInputValue.labelTitle }}</div>
        <div class="description__time">{{ radioInputValue.labelTime }}</div>
      </label>
      <div class="radio-input-wrapper__price">{{ radioInputValue.shippingPrice }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseRadioInput',
  props: {
    radioInputValue: {
      type: Object,
      required: true
    },
  },
  methods: {
    controlRadio(id) {
      this.$emit('control-radio', id)
    }
  },
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

.radio-input-wrapper__container {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid getMapColor($light-mode, "shipping-border-color");
  position: relative;
  width: 100%;
  &.active {
    border: 1px solid getMapColor($light-mode, "text-color");
  }
  > .radio-input-wrapper__description {
    margin-left: 1rem;
    cursor: pointer;
    color: getMapColor($light-mode, "text-color");
    > .description__time {
      font-size: 0.8rem;
      color: getMapColor($light-mode, "shipping-text-color");
    }
  }
  > input[type="radio"] {
    -webkit-appearance: none;
    border: 1px solid getMapColor($light-mode, "black");
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    background-color: getMapColor($light-mode, "white");
    &:checked {
      box-shadow: inset 0 0 0 0.3rem getMapColor($light-mode, "radio-checked-color");
    }
  }
  > .radio-input-wrapper__price {
    position: absolute;
    top: 20%;
    right: 5%;
    color: getMapColor($light-mode, "text-color");
  }
}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  > .radio-input-wrapper__container {
    border: 1px solid getMapColor($dark-mode, "radio-wrapper-border-color");
    > .radio-input-wrapper__description {
      > .description__title {
        color: getMapColor($dark-mode, "text-color");
      }

      > .description__time {
        color: getMapColor($dark-mode, "shipping-text-color");
      }
    }

    > .radio-input-wrapper__price {
      color: getMapColor($dark-mode, "text-color");
    }

    &.active {
      border: 1px solid getMapColor($dark-mode, "white");
    }

    > input[type="radio"] {
      background-color: getMapColor($dark-mode, "radio-background-color");
      &:checked {
        box-shadow: inset 0 0 0 0.3rem getMapColor($dark-mode, "radio-checked-color");
        background-color: getMapColor($dark-mode, "white");
      }
    }
  }
}
</style>