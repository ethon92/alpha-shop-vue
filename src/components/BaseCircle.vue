<template>
  <div class="stepper__container--circle" :class="{ 'dark-mode': darkMode }">{{ stepNumber }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseCircle',
  props: {
    stepNumber: {
      type: String,
      required: true
    }
  },
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

.stepper__container--circle {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  border: 1px solid getMapColor($light-mode, "stepper-color");
  color: getMapColor($light-mode, "stepper-color");
  padding-bottom: 1.5rem;
  text-align: center;
}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  border: 1px solid getMapColor($dark-mode, "stepper-undone-color");
  color: getMapColor($dark-mode, "stepper-undone-color");
}
</style>