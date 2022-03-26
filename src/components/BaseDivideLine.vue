<template>
  <div class="divide-line" :class="{ 'dark-mode': darkMode }"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseDivideLine',
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

.divide-line::before {
  content: '';
  position: absolute;
  background-color: getMapColor($light-mode, "divide-line-color");
  width: 100%;
  height: 1px;
}

// 當轉換為dark-mode時的顏色設定
.dark-mode::before {
  background-color: getMapColor($dark-mode, "divide-line-color");
}
</style>