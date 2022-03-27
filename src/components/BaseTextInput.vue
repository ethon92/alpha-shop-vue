<template>
  <div class="text-input-wrapper" :class="[textInputValue.classObj, { 'dark-mode': darkMode }]">
    <label :for="textInputValue.labelFor">{{ textInputValue.label }}</label>
    <input 
      type="text"
      :name="textInputValue.inputName"
      :placeholder="textInputValue.placeholder" 
      v-model="textInputValue.text"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseTextInput',
  props: {
    textInputValue: {
      type: Object,
      required: true
    }
  },
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

.text-input-wrapper {
  display: flex;
  flex-direction: column;
  > input[type="text"] {
    -webkit-appearance: none;
    margin-top: 0.5rem;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid getMapColor($light-mode, 'input-border-color');
    cursor: pointer;
    background-color: getMapColor($light-mode, 'body-background-color');
    &:hover,
    &:focus {
      border: 2px solid getMapColor($light-mode, 'text-color');
    }
    &::placeholder {
      color: getMapColor($light-mode, 'input-placeholder-color');
    }
  }

  > label {
    color: getMapColor($light-mode, "form-label-color");
  }
}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  > label {
    color: getMapColor($dark-mode, "form-label-color");
  }

  > input[type="text"] {
    border: 1px solid getMapColor($dark-mode, "select-input-border-color");
    color: getMapColor($dark-mode, "text-color");
    background-color: getMapColor($dark-mode, 'body-background-color');

    &:hover,
    &:focus {
      border: 2px solid getMapColor($dark-mode, 'text-color');
    }
    &::placeholder {
      color: getMapColor($light-mode, 'input-placeholder-color');
    }
  }
}
</style>