<template>
  <div class="stepper" :class="{ 'dark-mode': darkMode }">
    <h1 class="stepper__title">結帳</h1>
    <div class="stepper__container" >
      <div class="stepper__container--step" v-for="stepInfo in this.stepInfos" :key="stepInfo.id">
        <BaseCircle :step-number="stepInfo.stepNum"/>
        <div class="stepper__container--title">
          {{ stepInfo.title }}
        </div>
        <div v-if="!isLastConnectLine(stepInfo.id)" class="stepper__container--connect-line-wrapper">
          <BaseConnectLine />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCircle from './BaseCircle.vue'
import BaseConnectLine from './BaseConnectLine.vue'
import { mapState } from 'vuex'

export default {
  components: {
    BaseCircle,
    BaseConnectLine
  },
  methods: {
    isLastConnectLine(id) {
      return id === 3
    }
  },
  computed: mapState(['stepInfos', 'darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

.stepper__container {
  display: flex;
  margin-top: 2rem;
  > .stepper__container--step {
    display: flex;
    align-items: center;
    position: relative;
    flex: 1; // 將每個step的container撐滿剩餘部分，可達到與螢幕自動伸縮
    &:nth-child(1) {
      > .stepper__container--circle {
        background-color: getMapColor($light-mode, "black");
        color: getMapColor($light-mode, "white");
        border: 1px solid getMapColor($light-mode, "black");
      }
      > .stepper__container--title {
        color: getMapColor($light-mode, "black");
      }
    }
    > .stepper__container--title {
      margin-left: 0.5rem;
      color: getMapColor($light-mode, "stepper-color");
    }
    // 將connect line用div包起來後，可達到與螢幕寬度自動伸縮，不用每個斷點去調整長度
    > .stepper__container--connect-line-wrapper {
      width: 50%;
      height: 2px;
      position: relative;
    }
    &:nth-child(2) {
      > .stepper__container--connect-line-wrapper
      > .stepper__container--connect-line::before {
        background-color: getMapColor($light-mode, "stepper-connect-line-color");
      }
    }
  }
}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  > .stepper__title {
    color: getMapColor($dark-mode, "white");
  }

  > .stepper__container {
    > .stepper__container--step {
      &:nth-child(1) {
        > .stepper__container--circle {
          background-color: getMapColor($dark-mode, "stepper-background-color");
          border: 1px solid getMapColor($dark-mode, "body-background-color");
        }

        > .stepper__container--title {
          color: getMapColor($dark-mode, "white");
        }
      }

      > .stepper__container--title {
        color: getMapColor($dark-mode, "stepper-undone-color");
      }

      &:nth-child(2) {
        > .stepper__container--connect-line-wrapper
        > .stepper__container--connect-line::before {
          background-color: getMapColor($dark-mode, "stepper-undone-color");
        }
      }
    }
  }
}
</style>