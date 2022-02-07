<template>
  <section class="main__address-form">
    <div class="address-form__container">
      <Stepper :step-infos="stepInfos"/>
      <form>
        <h3>寄送地址</h3>
        <BaseSelect />
        <BaseTextInput />
        <BaseTextInput />
        <BaseTextInput />
        <BaseSelect />
        <BaseTextInput />
      </form>
      <BaseDivideLine />
      <div>
        <router-link to="/shipping-form">
          <BaseStepButton />
        </router-link>
      </div>
    </div>
    <div class="address-form__shopping-cart">
      <ShoppingCart />
    </div>
  </section>
</template>

<script>
import Stepper from '../components/Stepper.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import BaseSelect from '../components/BaseSelect.vue'
import BaseTextInput from '../components/BaseTextInput.vue'
import BaseStepButton from '../components/BaseStepButton.vue'
import BaseDivideLine from '../components/BaseDivideLine.vue'

export default {
  components: {
    Stepper,
    ShoppingCart,
    BaseSelect,
    BaseTextInput,
    BaseStepButton,
    BaseDivideLine
  },
  data() {
    return {
      stepInfos: [{
          id: 1,
          stepNum: '1', 
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

  .main__address-form {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;

    > .address-form__container > .stepper > .stepper__container > .stepper__container--step {
      &:nth-child(2) > .stepper__container--connect-line::before {
        height: 2px;
      }
    }
    > .address-form__container {
      position: relative;
      border: 1px solid red;
    }
    > .address-form__shopping-cart {
      border: 1px solid black;
    }
  }
</style>