<template>
  <section class="main__payment-info-form">
    <div class="payment-info-form__container">
      <Stepper :step-infos="stepInfos"/>
      <h3>This is payment-info-form</h3>
      <div>
        <BaseStepButton />
      </div>
    </div>
    <div class="payment-info-form__shopping-cart">
      <ShoppingCart />
    </div>
  </section>
</template>

<script>
import Stepper from '../components/Stepper.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import BaseStepButton from '../components/BaseStepButton.vue'


export default {
  components: {
    Stepper,
    ShoppingCart,
    BaseStepButton
  },
  data() {
    return {
      stepInfos: [{
          id: 1,
          stepNum: '✔', 
          title: '寄送地址'
        },
        {
          id: 2,
          stepNum: '✔', 
          title: '運送方式'
        },
        {
          id: 3,
          stepNum: '3', 
          title: '付款資訊'
        }]
    }
  },
}
</script>

<style lang="scss">
  @import '../assets/scss/shareColors.scss';

  .main__payment-info-form {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;

    > .payment-info-form__container > .stepper > .stepper__container > .stepper__container--step {
      &:nth-child(2) {
        > .stepper__container--circle {
          color: getMapColor("white");
          background-color: getMapColor("black");
          border: 1px solid getMapColor("black");
        }
      }
    }
  }

</style>