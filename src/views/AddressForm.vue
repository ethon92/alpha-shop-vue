<template>
  <section class="main__address-form" :class="{ 'dark-mode': darkMode }">
    <div class="address-form__container">
      <h2 class="address-form__title">寄送地址</h2>
      <form class="address-form__form-parts" @submit.prevent.stop="handleSubmit">
        <BaseSelect v-for="selectValue in selectValues" :key="selectValue.id" :select-value="selectValue"/>
        <BaseTextInput v-for="textInputValue in textInputValues" :key="textInputValue.id" :text-input-value="textInputValue"/>
        <div class="address-form__steps">
          <BaseStepButton v-for="stepButtonValue in stepButtonValues" :key="stepButtonValue.id" :step-button-value="stepButtonValue" />
        </div>
      </form>
      <div class="divide-line-wrapper">
        <BaseDivideLine />
      </div>
    </div>
  </section>
</template>

<script>
import BaseStepButton from '../components/BaseStepButton.vue'
import BaseDivideLine from '../components/BaseDivideLine.vue'
import BaseSelect from '../components/BaseSelect.vue'
import BaseTextInput from '../components/BaseTextInput.vue'
import {v4 as uuidv4} from 'uuid'
import { storageFunction } from '../utils/mixins'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AddressForm',
  mixins: [storageFunction],
  components: {
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
          value: 'Mr.'
        },
        {
          id: 2,
          name: '小姐',
          value: 'Miss'
        }],
        selected: []
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
        }],
        selected: []
      }],
      textInputValues: [{
        id: uuidv4(),
        classObj: {
          'name': true
        },
        label: '姓名',
        labelFor: 'name',
        placeholder: '請輸入姓名',
        text: '',
        inputName: 'name',
      },{
        id: uuidv4(),
        classObj: {
          'phone-number': true
        },
        label: '電話',
        labelFor: 'phone',
        placeholder: '請輸入行動電話',
        text: '',
        inputName: 'phone',
      },{
        id: uuidv4(),
        classObj: {
          'email': true
        },
        label: 'Email',
        labelFor: 'email',
        placeholder: '請輸入電子郵件信箱',
        text: '',
        inputName: 'email',
      },{
        id: uuidv4(),
        classObj: {
          'address': true
        },
        label: '地址',
        labelFor: 'address',
        placeholder: '請輸入地址',
        text: '',
        inputName: 'address',
      }],
      stepButtonValues: [{
        id: uuidv4(),
        text: '下一步 →',
        classObj: {
          'steps__next-step': true
        },
        isAddressFromButton: true
      }],
      initialShippingFee: '',
      totalCost: 0
    }
  },
  methods: {
    ...mapMutations(['setStepInfos', 'setStepperStyle', 'setIsShippingForm']),
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      for (let [key,value] of formData) {
        this.saveToStorage(key, value)
      }
      this.$router.push('/shipping-form')
    },
    getAddressForm() {
      this.selectValues[0].selected = localStorage.getItem('title') || 'Mr.'
      this.selectValues[1].selected = localStorage.getItem('city') || 'default'
      this.textInputValues[0].text = localStorage.getItem('name') || ''
      this.textInputValues[1].text = localStorage.getItem('phone') || ''
      this.textInputValues[2].text = localStorage.getItem('email') || ''
      this.textInputValues[3].text = localStorage.getItem('address') || ''
    }
  },
  created() {
    this.getAddressForm()
    this.setStepInfos(this.stepInfos)
    this.setIsShippingForm(false)
  },
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss">
@import '../assets/scss/shareColors.scss';
@import '../assets/scss/shareStyle.scss';

.main__address-form {
  // addressForm的樣式設定
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
      > .address-form__steps {
        position: absolute;
        right: 0;
        top: 125%;
        width: 10rem;
      }
    }
    > .divide-line-wrapper {
      position: relative;
      margin-top: 3rem;
    }
  }

}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  > .address-form__container
  > .address-form__title {
    color: getMapColor($dark-mode, "text-color");
  }
}

// 當螢幕小於1200px時，
// 分隔線與上下一步的設定
@media screen and (max-width: 1200px) {
  .main__address-form > .address-form__container {
    > .address-form__form-parts > .address-form__steps {
      top: 300%;
    }

    > .divide-line-wrapper {
      display: none;
    }
  }
}

// 當螢幕小於800px時表單的設定
@media screen and (max-width: 800px) {
  .main__address-form {
    > .address-form__container
    > .address-form__form-parts {
      > .address-form__steps {
        top: 215%;
      }

      > .address-form__steps {
        width: 100%;
        margin-bottom: 10rem;
      }

      grid-template-columns: 40% 55%;
      grid-template-rows: repeat(5, auto);
      grid-template-areas:
        "title name"
        "phoneNum phoneNum"
        "email email"
        "city city"
        "address address"
    }  
  }
}
</style>