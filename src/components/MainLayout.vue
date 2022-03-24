<template>
  <div class="main-layout">
    <Header class="main-layout__header"/>
    <Stepper class="main-layout__stepper" :class="{isShippingForm, isPaymentForm}"/>
    <slot></slot>
    <ShoppingCart class="main-layout__shopping-cart" />
    <div class="main-layout__divide-line-wrapper">
      <BaseDivideLine />
    </div>
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
import BaseDivideLine from './BaseDivideLine.vue'
import { mapState } from 'vuex'


export default {
  name: 'MainLayout',
  components: {
    Header,
    Stepper,
    Footer,
    ShoppingCart,
    BaseDivideLine
  },
  computed: mapState(['isShippingForm', 'isPaymentForm'])
}
</script>

<style lang="scss">
@import '../assets/scss/shareColors.scss';

.main-layout {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 1536px; // 整個表單最大的寬度只到1536px

  > .main-layout__header {
    width: 100%;
  }

  // stepper位置排版
  > .main-layout__stepper {
    width: 40%;
    margin-left: 10rem;
    margin-top: 3rem;

    // stepper第二條連接線初始顏色
    > .stepper__container 
    > .stepper__container--step:nth-child(2) 
    > .stepper__container--connect-line-wrapper 
    >.stepper__container--connect-line::before {
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

        > .stepper__container--connect-line-wrapper
        > .stepper__container--connect-line::before {
          background-color: getMapColor("black");
        }
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

      > .stepper__container--connect-line-wrapper
      > .stepper__container--connect-line::before {
        background-color: getMapColor("black");
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
      }
    }
  }

  // footer位置排版
  > .main-layout__footer {
    margin-top: 10rem;
    width: 100%;
    background-color: getMapColor("footer-background-color");
  }

  // 在螢幕寬度小於1200px以前main layout的divide line要隱藏
  > .main-layout__divide-line-wrapper {
    display: none;
  }
}

// 當螢幕寬度大於1536之後，將整個表單置中
@media screen and (min-width: 1536px) {
  .main-layout {
    margin: 1rem auto 0 auto;
  }
}

// 當螢幕寬度小於1200px時的設定
@media screen and (max-width: 1200px) {
  .main-layout {
    justify-content: center;

    > .main-layout__stepper {
      margin: 3rem auto 0 auto;
    }

    > .main-layout__shopping-cart {
      width: 40%;
    }

    > .main-layout__divide-line-wrapper {
      width: 100%;
      margin-top: 5rem;
      display: initial;

      > .divide-line::before {
        width: initial;
        left: 30%;
        right: 30%;
      }
    }
  }
}
</style>