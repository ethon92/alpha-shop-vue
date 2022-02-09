<template>
  <section class="main__address-form">
    <div class="address-form__container">
      <Stepper :step-infos="stepInfos"/>
      <h3 class="address-form__title">寄送地址</h3>
      <form class="address-form__form-parts">
        <BaseSelect v-for="selectValue in selectValues" :key="selectValue.id" :select-value="selectValue"/>
        <BaseTextInput v-for="textInputValue in textInputValues" :key="textInputValue.id" :text-input-value="textInputValue"/>
      </form>
      <div class="divide-line-wrapper">
        <BaseDivideLine />
      </div>
      <div class="address-form__steps">
        <BaseStepButton v-for="stepButtonValue in stepButtonValues" :key="stepButtonValue.id" :step-button-value="stepButtonValue"/>
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
import BaseStepButton from '../components/BaseStepButton.vue'
import BaseDivideLine from '../components/BaseDivideLine.vue'
import BaseSelect from '../components/BaseSelect.vue'
import BaseTextInput from '../components/BaseTextInput.vue'
import {v4 as uuidv4} from 'uuid'

export default {
  name: 'AddressForm',
  components: {
    Stepper,
    ShoppingCart,
    BaseStepButton,
    BaseDivideLine,
    BaseSelect,
    BaseTextInput
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
      }],
      selectValues: [{
        id: uuidv4(),
        classObj: {
          'title': true
        },
        label: '稱謂',
        labelFor: 'title',
        selectName: 'title',
        selectId: 'title',
        options: [{
          id: 1,
          name: '先生',
          value: 'sir'
        },
        {
          id: 2,
          name: '小姐',
          value: 'miss'
        }]
      },{
        id: uuidv4(),
        classObj: {
          'city': true
        },
        label: '縣市',
        labelFor: 'city',
        selectName: 'city',
        selectId: 'city',
        hasAttributeValue: true,
        options: [{
          id: 1,
          name: '請選擇縣市',
          value: 'default'
        },
        {
          id: 2,
          name: '台北',
          value: 'taipei'
        },
        {
          id: 3,
          name: '新北',
          value: 'new-taipei'
        }]
      }],
      textInputValues: [{
        id: uuidv4(),
        classObj: {
          'name': true
        },
        label: '姓名',
        labelFor: 'name',
        placeholder: '請輸入姓名'
      },{
        id: uuidv4(),
        classObj: {
          'phone-number': true
        },
        label: '電話',
        labelFor: 'phone',
        placeholder: '請輸入行動電話'
      },{
        id: uuidv4(),
        classObj: {
          'email': true
        },
        label: 'Email',
        labelFor: 'email',
        placeholder: '請輸入電子郵件信箱'
      },{
        id: uuidv4(),
        classObj: {
          'address': true
        },
        label: '地址',
        labelFor: 'address',
        placeholder: '請輸入地址'
      }],
      stepButtonValues: [{
        id: uuidv4(),
        text: '下一步 →',
        classObj: {
          'steps__next-step': true
        },
        link: '/shipping-form'
      }]
    }
  },
}
</script>

<style lang="scss">
  @import '../assets/scss/shareColors.scss';
  @import '../assets/scss/shareStyle.scss';

  .main__address-form {
    @extend %mainFrameStyle;

    // stepper2的連接線加粗
    > .address-form__container > .stepper > .stepper__container > .stepper__container--step {
      &:nth-child(2) > .stepper__container--connect-line::before {
        height: 2px;
      }
    }
    > .address-form__container {
      position: relative;
      height: 130%;
      > .address-form__title {
        margin-top: 2rem;
      }
      > .address-form__form-parts {
        @extend %formPartsShare;
        grid-template-areas:
          "title title name name name name"
          "phoneNum phoneNum phoneNum email email email"
          "city city address address address address"
      }
      > .address-form__form-parts {
        > .title {
          grid-area: title;
        }
        > .name {
          grid-area: name;
        }
        > .phone-number {
          grid-area: phoneNum;
        }
        > .email {
          grid-area: email;
        }
        > .city {
          grid-area: city;
        }
        > .address {
          grid-area: address;
        }
      }
      > .divide-line-wrapper {
        margin-top: 5rem;
      }
      > .address-form__steps {
        position: absolute;
        right: 0;
        bottom: 5%;
        width: 30%;
      }
    }
    > .address-form__shopping-cart {
      border: 1px solid black;
    }
  }
</style>