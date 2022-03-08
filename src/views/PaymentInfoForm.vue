<template>
  <section class="main__payment-info-form">
    <div class="payment-info-form__container">
      <Stepper :step-infos="stepInfos"/>
      <h3 class="payment-info-form__title">付款資訊</h3>
      <form class="payment-info-form__form-parts">
        <BaseTextInput 
          v-for="textInputValue in textInputValues" 
          :key="textInputValue.id" 
          :text-input-value="textInputValue"
        />
        <div class="payment-info-form__steps">
          <BaseStepButton 
            v-for="stepButtonValue in stepButtonValues" 
            :key="stepButtonValue.id" 
            :step-button-value="stepButtonValue"
            @handle-click="afterClick"
          />
        </div>
      </form>
      <div class="divide-line-wrapper">
        <BaseDivideLine />
      </div>
    </div>
    <BillModal :bill="bill" class="main__bill" @after-click="handleCloseBill"/>
  </section>
</template>

<script>
import Stepper from '../components/Stepper.vue'
import BaseStepButton from '../components/BaseStepButton.vue'
import BaseTextInput from '../components/BaseTextInput.vue'
import BaseDivideLine from '../components/BaseDivideLine.vue'
import BillModal from '../components/BillModal'
import {v4 as uuidv4} from 'uuid'
import { storageFunction } from '../utils/mixins'


export default {
  name: 'PaymentInfoForm',
  mixins: [storageFunction],
  components: {
    Stepper,
    BaseStepButton,
    BaseTextInput,
    BaseDivideLine,
    BillModal
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
        placeholder: 'John Doe',
        text: '',
        inputName: 'card-name'
      },{
        id: uuidv4(),
        classObj: {
          'card-number': true
        },
        label: '卡號',
        labelFor: 'card-number',
        placeholder: '1111 2222 3333 4444',
        text: '',
        inputName: 'card-number'
      },{
        id: uuidv4(),
        classObj: {
          'valid-date': true
        },
        label: '有效期限',
        labelFor: 'valid-date',
        placeholder: 'MM/YY',
        text: '',
        inputName: 'valid-date'
      },{
        id: uuidv4(),
        classObj: {
          'verify-number': true
        },
        label: 'CVC/CCV',
        labelFor: 'verify-number',
        placeholder: '123',
        text: '',
        inputName: 'verify-number'
      }],
      initialShippingFee: '',
      bill: {
        title: '',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        shippingFee: '',
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
        totalPrice: '',
        isChecked: false
      }
    }
  },
  methods: {
    afterClick(e) {
      const target = e.target
      if (target.matches('.steps__next-step')) {
        const cardName = this.textInputValues[0].text
        const cardNumber = this.textInputValues[1].text
        const validDate = this.textInputValues[2].text
        const verifyNumber = this.textInputValues[3].text

        this.saveToStorage('card-name', cardName)
        this.saveToStorage('card-number', cardNumber)
        this.saveToStorage('valid-date', validDate)
        this.saveToStorage('verify-number', verifyNumber)


        console.log(this.bill)
        this.getBill()
        this.bill.isChecked = true
        
      }
    },
    getPaymentInfoForm() {
      this.textInputValues[0].text = localStorage.getItem('card-name')
      this.textInputValues[1].text = localStorage.getItem('card-number')
      this.textInputValues[2].text = localStorage.getItem('valid-date')
      this.textInputValues[3].text = localStorage.getItem('verify-number')
    },
    getBill() {
      this.bill = {
        ...this.bill,
        title: localStorage.getItem('title'),
        name: localStorage.getItem('name'),
        phone: localStorage.getItem('phone'),
        email: localStorage.getItem('email'),
        city: localStorage.getItem('city'),
        address: localStorage.getItem('address'),
        shippingFee: localStorage.getItem('shipping-fee'),
        cardName: localStorage.getItem('card-name'),
        cardNumber: localStorage.getItem('card-number'),
        expDate: localStorage.getItem('valid-date'),
        cvv: localStorage.getItem('verify-number'),
        totalPrice: localStorage.getItem('total-price')
      }
    },
    handleCloseBill() {
      this.bill.isChecked = false
    }
  },
  created() {
    this.getPaymentInfoForm()
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/shareColors.scss';
  @import '../assets/scss/shareStyle.scss';

  .main__payment-info-form {
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
        position: relative;
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
        > .payment-info-form__steps {
          @extend %stepShareStyle;
          position: absolute;
          bottom: -70%;
          width: 100%;
        }
      }
      > .divide-line-wrapper {
        @extend %divideLineShareStyle;
        margin-top: 5rem;
      }
      > .payment-info-form__title {
        margin-top: 2rem;
      }
    }

    > .main__bill {
      position: fixed;
      top: 0;
      left: 0;
    }
  }

</style>