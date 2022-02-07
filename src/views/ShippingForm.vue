<template>
  <section class="main__shipping-form">
    <div class="shipping-form__container">
      <Stepper :step-infos="stepInfos"/>
      <h3>This is shipping-form</h3>
      <div>
        <router-link to="/payment-info-form">
          <BaseStepButton />
        </router-link>
      </div>
    </div>
    <div class="shipping-form__shopping-cart">
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
          stepNum: '2', 
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

  .main__shipping-form {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;

    > .shipping-form__container > .stepper > .stepper__container > .stepper__container--step {
      &:nth-child(2) {
        > .stepper__container--circle {
          color: getMapColor("black");
          border: 1px solid getMapColor("black");
        }
      }
    }
  }
</style>