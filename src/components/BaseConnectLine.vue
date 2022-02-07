<template>
  <div class="stepper__container--connect-line"></div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .stepper__container--connect-line::before {
    content: '';
    position: absolute;
    height: 1px;
    background-color: getMapColor("black");
    left: -150%;
    right: 150%;
  }
</style>