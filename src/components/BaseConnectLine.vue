<template>
  <div class="stepper__container--connect-line"></div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .stepper__container--connect-line::before {
    content: '';
    position: absolute;
    height: 2px;
    background-color: getMapColor("black");
    left: 10%;
    right: 10%;
  }
</style>