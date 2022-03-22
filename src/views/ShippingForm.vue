<template>
  <section class="main__shipping-form">
    <div class="shipping-form__container">
      <div class="shipping-form__detail">
        <h3 class="shipping-form__title">運送方式</h3>
        <form class="shipping-form__form-parts">
          <BaseRadioInput 
            v-for="radioInputValue in radioInputValues" 
            :key="radioInputValue.id" 
            :radioInputValue="radioInputValue" 
            @control-radio="afterClickRadio" 
          />
          <div class="shipping-form__steps">
            <BaseStepButton 
              v-for="stepButtonValue in stepButtonValues" 
              :key="stepButtonValue.id" 
              :step-button-value="stepButtonValue"
            />
          </div>
        </form>
      </div>
      <div class="divide-line-wrapper">
        <BaseDivideLine />
      </div>
    </div>
  </section>
</template>

<script>
import BaseStepButton from '../components/BaseStepButton.vue'
import BaseRadioInput from '../components/BaseRadioInput.vue'
import BaseDivideLine from '../components/BaseDivideLine.vue'
import {v4 as uuidv4} from 'uuid'
import { storageFunction } from '../utils/mixins'
import { mapMutations } from 'vuex'

export default {
  name: 'ShippingForm',
  mixins: [storageFunction],
  components: {
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
        isActive: true,
        isChecked: true
      },{
        id: uuidv4(),
        radioId: 'shipping-dhl',
        radioName: 'shipping-time',
        labelFor: 'shipping-dhl',
        labelTitle: 'DHL 貨運',
        labelTime: '48小時內送達',
        shippingPrice: '$500',
        isActive: false,
        isChecked: false
      }],
      stepButtonValues: [{
        id: uuidv4(),
        text: '← 上一步',
        classObj: {
          'steps__previous-step': true
        },
        link: '/address-from'
      },
      {
        id: uuidv4(),
        text: '下一步 →',
        classObj: {
          'steps__next-step': true
        },
        link: '/payment-info-form'
      }],
      shippingFee: ''
    }
  },
  methods: {
    ...mapMutations(['setShippingFee', 'setStepInfos', 'setIsShippingForm', 'setIsPaymentForm']),
    afterClickRadio(id) {
      // 運送方式選到時的外框樣式設定以及radio checked屬性設定
      this.radioInputValues = this.radioInputValues.map( radioInputValue => {
        if(radioInputValue.id === id) {
          return {
            ...radioInputValue,
            isActive: true,
            isChecked: true
          }
        }else{
          return {
            ...radioInputValue,
            isActive: false,
            isChecked: false
          }
        }
      })

      // 將radioInputValues儲存至localStorage中
      this.saveToStorage('radio-input-values', JSON.stringify(this.radioInputValues))

      // 利用id尋找出運費
      this.shippingFee = this.radioInputValues.filter(radioInputValue => radioInputValue.id === id)[0].shippingPrice
      
      // 將shippingFee放入store中
      this.setShippingFee(this.shippingFee)

      // 將運費儲存至localStorage
      this.saveToStorage('shipping-fee', this.shippingFee)
    },
  },
  created() {
    this.radioInputValues = JSON.parse(localStorage.getItem('radio-input-values')) || this.radioInputValues
    this.setStepInfos(this.stepInfos)
    this.setIsShippingForm(true)
    this.setIsPaymentForm(false)
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/shareColors.scss';
  @import '../assets/scss/shareStyle.scss';

  .main__shipping-form {
    // shippingForm的樣式設定
    > .shipping-form__container {
      height: 130%;
      > .divide-line-wrapper {
        @extend %divideLineShareStyle;
        margin-top: 8rem;
      }
      > .shipping-form__detail {
        margin-top: 2rem;
        > .shipping-form__form-parts {   
          position: relative;
          > .shipping-form__steps {
            @extend %stepShareStyle;
            position: absolute;
            bottom: -130%;
            width: 100%;
          }
        }
      }
    }
  }
</style>