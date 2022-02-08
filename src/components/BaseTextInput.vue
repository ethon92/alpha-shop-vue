<template>
  <div class="text-input-wrapper" :class="textInputValue.classObj">
    <label :for="textInputValue.labelFor">{{ textInputValue.label }}</label>
    <input type="text" :placeholder="textInputValue.placeholder">
  </div>
</template>

<script>
export default {
  name: 'BaseTextInput',
  props: {
    textInputValue: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';
  
  .text-input-wrapper {
    display: flex;
    flex-direction: column;
    > input[type="text"] {
      -webkit-appearance: none;
      padding: 0.8rem;
      border-radius: 5px;
      border: 1px solid getMapColor('input-border-color');
      cursor: pointer;
      background-color: getMapColor('body-background-color');
      &:hover,
      &:focus {
        border: 2px solid getMapColor('text-color');
      }
      &::placeholder {
        color: getMapColor('input-placeholder-color');
      }
    }
  }
</style>