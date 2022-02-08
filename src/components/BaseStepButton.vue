<template>
  <button :class="stepButtonValue.classObj">{{ stepButtonValue.text }}</button>
</template>

<script>
export default {
  name: 'BaseStepButton',
  props: {
    stepButtonValue: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .steps__next-step {
    border: 1px solid getMapColor('white');
    border-radius: 5px;
    padding: 1rem;
    color: getMapColor('white');
    width: 150%;
    background-color: getMapColor('next-button-color');
    cursor: pointer;
    &:hover {
      box-shadow: 1px 1px 5px getMapColor('light-gray');
    }
  }
</style>