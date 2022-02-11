<template>
  <div id="alpha-shop">
    <main>
      <router-view @pass-shipping-fee="getFee" />
      <ShoppingCart :initial-shipping-fee="initialShippingFee"/>
    </main>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  components: {
    ShoppingCart
  },
  methods: {
    // 將從shipping-form傳出的shipping-fee放入initialShippingFee
    getFee(shippingFee) {
      this.initialShippingFee = shippingFee
    }
  },
  data() {
    return {
      initialShippingFee: ''
    }
  }
}
</script>

<style lang="scss">
  // 載入reset css
  @import './assets/scss/main.scss';
  // 載入共用樣式設定
  @import './assets/scss/shareStyle.scss';

  // 各種form與shopping-cart的排版
  main {
    @extend %mainFrameStyle
  }
</style>


