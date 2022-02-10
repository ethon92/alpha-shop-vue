<template>
  <section class="main__payment-info-form">
    <div class="payment-info-form__container">
      <Stepper :step-infos="stepInfos"/>
      <h3 class="payment-info-form__title">付款資訊</h3>
      <form class="payment-info-form__form-parts">
        <BaseTextInput v-for="textInputValue in textInputValues" :key="textInputValue.id" :text-input-value="textInputValue"/>
      </form>
      <div class="divide-line-wrapper">
        <BaseDivideLine />
      </div>
      <div class="payment-info-form__steps">
        <BaseStepButton v-for="stepButtonValue in stepButtonValues" :key="stepButtonValue.id" :step-button-value="stepButtonValue"/>
      </div>
    </div>
    <div class="payment-info-form__shopping-cart">
      <ShoppingCart :shipping-fee="shippingFee"/>
    </div>
  </section>
</template>

<script>
import Stepper from '../components/Stepper.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import BaseStepButton from '../components/BaseStepButton.vue'
import BaseTextInput from '../components/BaseTextInput.vue'
import BaseDivideLine from '../components/BaseDivideLine.vue'
import {v4 as uuidv4} from 'uuid'


export default {
  name: 'PaymentInfoForm',
  components: {
    Stepper,
    ShoppingCart,
    BaseStepButton,
    BaseTextInput,
    BaseDivideLine
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
      }],
      stepButtonValues: [{
        id: uuidv4(),
        text: '← 上一步',
        classObj: {
          'steps__previous-step': true
        },
        link: '/shipping-form'
      },
      {
        id: uuidv4(),
        text: '確定下單',
        classObj: {
          'steps__next-step': true
        },
        link: '/payment-info-form'
      }],
      textInputValues: [{
        id: uuidv4(),
        classObj: {
          'name': true
        },
        label: '持卡人姓名',
        labelFor: 'name',
        placeholder: 'John Doe'
      },{
        id: uuidv4(),
        classObj: {
          'card-number': true
        },
        label: '卡號',
        labelFor: 'card-number',
        placeholder: '1111 2222 3333 4444'
      },{
        id: uuidv4(),
        classObj: {
          'valid-date': true
        },
        label: '有效期限',
        labelFor: 'valid-date',
        placeholder: 'MM/YY'
      },{
        id: uuidv4(),
        classObj: {
          'verify-number': true
        },
        label: 'CVC/CCV',
        labelFor: 'verify-number',
        placeholder: '123'
      }],
      shippingFee: ''
    }
  },
}
</script>

<style lang="scss">
  @import '../assets/scss/shareColors.scss';
  @import '../assets/scss/shareStyle.scss';

  .main__payment-info-form {
    @extend %mainFrameStyle;

    // stepper的樣式設定
    > .payment-info-form__container > .stepper > .stepper__container > .stepper__container--step {
      &:nth-child(2) {
        > .stepper__container--circle {
          color: getMapColor("white");
          background-color: getMapColor("black");
          border: 1px solid getMapColor("black");
        }
        > .stepper__container--title {
          color: getMapColor("black");
        }
      }
      &:nth-child(3) {
        > .stepper__container--circle {
          color: getMapColor("black");
          border: 1px solid getMapColor("black");
        }
        > .stepper__container--title {
          color: getMapColor("black");
        }
      }
      > .stepper__container--connect-line::before {
        height: 2px;
      }
    }

    // paymentInfoForm的樣式設定
    > .payment-info-form__container {
      > .payment-info-form__form-parts {
        @extend %formPartsShare;
        grid-template-areas:
          "name name name name . ."
          "cardNum cardNum cardNum cardNum . ."
          "validDate validDate validDate verifyNum verifyNum verifyNum"
      }
      > .payment-info-form__form-parts {
        > .name {
          grid-area: name;
        }
        > .card-number {
          grid-area: cardNum;
        }
        > .valid-date {
          grid-area: validDate;
        }
        > .verify-number {
          grid-area: verifyNum;
        }
      }
      > .divide-line-wrapper {
        @extend %divdeLineShareStyle;
        margin-top: 5rem;
      }
      > .payment-info-form__steps {
        @extend %stepShareStyle;
        margin-top: 6.5rem;
      }
      > .payment-info-form__title {
        margin-top: 2rem;
      }
    }

  }

</style>