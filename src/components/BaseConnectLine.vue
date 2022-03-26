<template>
  <div class="stepper__container--connect-line" :class="{ 'dark-mode': darkMode }"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseConnectLine',
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

.stepper__container--connect-line::before {
  content: '';
  position: absolute;
  height: 2px;
  background-color: getMapColor($light-mode, "black");
  left: 10%;
  right: 10%;
}

// 當轉換為dark-mode時的顏色設定
.dark-mode::before {
  background-color: getMapColor($dark-mode, "white");
}
</style>