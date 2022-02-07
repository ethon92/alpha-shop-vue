<template>
  <div class="divide-line"></div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .divide-line::before {
    content: '';
    position: absolute;
    background-color: getMapColor("divide-line-color");
    width: 100%;
    height: 1px;
  }
</style>