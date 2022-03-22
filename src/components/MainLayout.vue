<template>
  <div class="main-layout">
    <Header />
    <Stepper class="main-layout__stepper" :class="{isShippingForm, isPaymentForm}"/>
    <slot></slot>
    <ShoppingCart class="main-layout__shopping-cart" />
    <div class="main-layout__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Stepper from './Stepper.vue'
import ShoppingCart from './ShoppingCart.vue'
import { mapState } from 'vuex'


export default {
  name: 'MainLayout',
  components: {
    Header,
    Stepper,
    Footer,
    ShoppingCart
  },
  computed: mapState(['isShippingForm', 'isPaymentForm'])
}
</script>

<style lang="scss">
@import '../assets/scss/shareColors.scss';

.main-layout {
  position: relative;
  margin-top: 1rem;

  // stepper位置排版
  > .main-layout__stepper {
    width: 40%;
    margin-left: 10rem;
    margin-top: 3rem;

    // stepper第二條連接線初始顏色
    > .stepper__container > .stepper__container--step:last-child > .stepper__container--connect-line::before {
      background-color: getMapColor("stepper-connect-line-color");
    }
  }

  // 當stepper在shipping-form頁面時的樣式設定
  > .isShippingForm {
    > .stepper__container {
      > .stepper__container--step:nth-child(2) {
        > .stepper__container--circle {
          color: getMapColor("black");
          border: 1px solid getMapColor("black");
        }

        > .stepper__container--title {
          color: getMapColor("black");
        }
      }
      > .stepper__container--step:last-child > .stepper__container--connect-line::before {
        background-color: getMapColor("black");
      }
    }
  }

  // 當stepper在payment-form頁面時的樣式設定
  > .isPaymentForm {
    > .stepper__container {
      > .stepper__container--step:nth-child(2) {
      > .stepper__container--circle {
        color: getMapColor("white");
        background-color: getMapColor("black");
        border: 1px solid getMapColor("black");
      }

      > .stepper__container--title {
        color: getMapColor("black");
      }
      }

      > .stepper__container--step:last-child {
        > .stepper__container--circle {
          color: getMapColor("black");
          border: 1px solid getMapColor("black");
        }

        > .stepper__container--title {
          color: getMapColor("black");
        }

        > .stepper__container--connect-line::before {
          background-color: getMapColor("black");
        }
      }
    }
  }

  // shopping-cart位置排版
  > .main-layout__shopping-cart {
    position: absolute;
    top: 10.5rem;
    right: 14.5rem;
  }

  // footer位置排版
  > .main-layout__footer {
    position: absolute;
    top: 50rem;
    width: 100%;
    background-color: getMapColor("footer-background-color");
  }
}
</style>