<template>
  <div class="stepper__container--circle">{{ stepNumber }}</div>
</template>

<script>
export default {
  props: {
    stepNumber: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .stepper__container--circle {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    border: 1px solid getMapColor("stepper-color");
    padding-bottom: 1.5rem;
    text-align: center;
  }
</style>