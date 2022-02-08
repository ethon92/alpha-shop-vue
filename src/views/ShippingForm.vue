<template>
  <section class="main__shipping-form">
    <div class="shipping-form__container">
      <Stepper :step-infos="stepInfos"/>
      <div class="shipping-form__detail">
        <h3 class="shipping-form__title">運送方式</h3>
        <form class="shipping-form__form-parts">
          <BaseRadioInput v-for="radioInputValue in radioInputValues" :key="radioInputValue.id" :radioInputValue="radioInputValue" @control-border-line="afterClickRadio"/>
        </form>
      </div>
      <div class="divide-line-wrapper">
        <BaseDivideLine />
      </div>
      <div class="shipping-form__steps">
        <BaseStepButton v-for="stepButtonValue in stepButtonValues" :key="stepButtonValue.id" :stepButtonValue="stepButtonValue"/>
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
import BaseRadioInput from '../components/BaseRadioInput.vue'
import BaseDivideLine from '../components/BaseDivideLine.vue'
import {v4 as uuidv4} from 'uuid'

export default {
  name: 'ShippingForm',
  components: {
    Stepper,
    ShoppingCart,
    BaseStepButton,
    BaseRadioInput,
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
        stepNum: '2', 
        title: '運送方式'
      },
      {
        id: 3,
        stepNum: '3', 
        title: '付款資訊'
      }],
      radioInputValues: [{
        id: uuidv4(),
        radioId: 'shipping-standard',
        radioName: 'shipping-time',
        labelFor: 'shipping-standard',
        labelTitle: '標準運送',
        labelTime: '約3~7工作天',
        shippingPrice: '免費',
        isActive: false,
      },{
        id: uuidv4(),
        radioId: 'shipping-dhl',
        radioName: 'shipping-time',
        labelFor: 'shipping-dhl',
        labelTitle: 'DHL 貨運',
        labelTime: '48小時內送達',
        shippingPrice: '$500',
        isActive: false
      }],
      stepButtonValues: [{
        id: uuidv4(),
        text: '← 上一步',
        classObj: {
          'steps__previous-step': true
        },
        link: '/'
      },
      {
        id: uuidv4(),
        text: '下一步 →',
        classObj: {
          'steps__next-step': true
        },
        link: '/payment-info-form'
      }]
    }
  },
  methods: {
    afterClickRadio(id) {
      this.radioInputValues = this.radioInputValues.map( radioInputValue => {
        if(radioInputValue.id === id) {
          return {
            ...radioInputValue,
            isActive: true
          }
        }else{
          return {
            ...radioInputValue,
            isActive: false
          }
        }
      })
    }
  }
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

    > .shipping-form__container {
      height: 130%;
      > .divide-line-wrapper {
        margin-top: 5rem;
        > .divide-line::before {
          width: 44.5%;
        }
      }
      > .shipping-form__steps {
        display: flex;
        justify-content: space-between;
        margin-top: 8rem;
        > a {
          flex-basis: 30%;
        }
      }
      > .shipping-form__detail {
        margin-top: 2rem;
      }
    }

    > .shipping-form__shopping-cart {
      border: 1px solid black;
    }
  }
</style>