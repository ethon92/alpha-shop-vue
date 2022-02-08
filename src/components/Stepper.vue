<template>
  <div class="stepper">
    <h1>結帳</h1>
     <div class="stepper__container" >
       <div class="stepper__container--step" v-for="stepInfo in stepInfos" :key="stepInfo.id">
        <BaseCircle :step-number="stepInfo.stepNum"/>
        <template v-if="!isFirstConnectLine(stepInfo.id)">
          <BaseConnectLine />
        </template>
        <div class="stepper__container--title">{{ stepInfo.title }}</div>
       </div>
    </div>
  </div>
</template>

<script>
import BaseCircle from './BaseCircle.vue'
import BaseConnectLine from './BaseConnectLine.vue'

export default {
  components: {
    BaseCircle,
    BaseConnectLine
  },
  props: {
    stepInfos: {
      type: Array,
      required: true
    }
  },
  methods: {
    isFirstConnectLine(id) {
      return id === 1
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .stepper__container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    > .stepper__container--step {
      display: flex;
      align-items: center;
      position: relative;
      &:nth-child(1) > .stepper__container--circle {
        background-color: getMapColor("black");
        color: getMapColor("white");
        border: 1px solid getMapColor("black");
      }
      > .stepper__container--circle {
        color: getMapColor("stepper-color");
      }
      > .stepper__container--title {
        margin-left: 0.5rem;
      }
    }
  }
</style>