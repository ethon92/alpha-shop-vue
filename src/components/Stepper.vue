<template>
  <div class="stepper">
    <h1>結帳</h1>
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
  computed: mapState(['stepInfos'])
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
          background-color: getMapColor("black");
          color: getMapColor("white");
          border: 1px solid getMapColor("black");
        }
        > .stepper__container--title {
          color: getMapColor("black");
        }
      }
      > .stepper__container--circle {
        color: getMapColor("stepper-color");
      }
      > .stepper__container--title {
        margin-left: 0.5rem;
        color: getMapColor("stepper-color");
      }
      // 將connect line用div包起來後，可達到與螢幕寬度自動伸縮，不用每個斷點去調整長度
      > .stepper__container--connect-line-wrapper {
        width: 50%;
        height: 2px;
        position: relative;
      }
    }
  }
</style>