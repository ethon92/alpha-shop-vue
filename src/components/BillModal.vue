<template>
  <section class="modal" :class="{ 'dark-mode': darkMode }" v-if="bill.isChecked">
    <ul class="bill__list">
      <li class="bill__list--title">稱謂：{{ bill.title }}</li>
      <li class="bill__list--name">姓名：{{ bill.name }}</li>
      <li class="bill__list--phone">電話：{{ bill.phone }}</li>
      <li class="bill__list--email">Email：{{ bill.email }}</li>
      <li class="bill__list--city">縣市：{{ bill.city }}</li>
      <li class="bill__list--address">地址：{{ bill.address }}</li>
      <li class="bill__list--shipping-fee">運送費用：{{ bill.shippingFee }}</li>
      <li class="bill__list--card-name">持卡人姓名：{{ bill.cardName }}</li>
      <li class="bill__list--card-number">卡號：{{ bill.cardNumber }}</li>
      <li class="bill__list--valid-date">有效期限：{{ bill.expDate }}</li>
      <li class="bill__list--verify-number">CVC/CCV：{{ bill.cvv }}</li>
      <li class="bill__list--total-price">總花費：{{ bill.totalPrice }}</li>
      <button class="bill__list--button" @click="closeBill">送出</button>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BillModal',
  props: {
    bill: { 
      Object,
      required: true
    }
  },
  methods: {
    closeBill() {
      this.$emit('after-click')
    }
  },
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

.modal {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  z-index: 999;
  position: relative;
  > .bill__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    border: 1px solid getMapColor($light-mode, "white");
    background-color: getMapColor($light-mode, "white");
    border-radius: 5px;
    padding: 1rem;
    > .bill__list--button {
      margin-top: 1rem;
      border: 1px solid getMapColor($light-mode, "white");
      border-radius: 5px;
      padding: 1rem;
      color: getMapColor($light-mode, "white");
      width: 100%;
      background-color: getMapColor($light-mode, "next-button-color");
      cursor: pointer;
      &:hover {
        box-shadow: 1px 1px 5px getMapColor($light-mode, "light-gray");
      }
    }
  }
}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  background-color: rgba(255, 255, 255, 0.7);

  > .bill__list {
    border: 1px solid getMapColor($dark-mode, "body-background-color");
    background-color: getMapColor($dark-mode, "body-background-color");
    color: getMapColor($dark-mode, "white");

    > .bill__list--button {
      border: 1px solid getMapColor($dark-mode, "body-background-color");
    }
  }
}
</style>