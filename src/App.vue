<template>
  <div id="alpha-shop">
    <main>
      <router-view/>
      <ShoppingCart />
    </main>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  components: {
    ShoppingCart
  },
  props: {
    fee: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  // 載入reset css/共用樣式設定
  @import './assets/scss/main.scss';
  @import './assets/scss/shareStyle.scss';

  main {
    @extend %mainFrameStyle
  }
</style>


