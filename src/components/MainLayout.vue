<template>
  <div class="main-layout" :class="{ 'dark-mode': darkMode }">
    <Header class="main-layout__header" />
    <Stepper 
      class="main-layout__stepper" 
      :class="{ 
        'main-layout__stepper--is-shipping-form': isShippingForm, 
        'main-layout__stepper--is-payment-form': isPaymentForm
      }"
    />
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
  computed: mapState(['isShippingForm', 'isPaymentForm', 'darkMode'])
}
</script>

<style lang="scss">
@import '../assets/scss/shareColors.scss';

.main-layout {
  display: flex;
  flex-wrap: wrap;
  max-width: 1530px; // 整個表單最大的寬度只到1536px

  > .main-layout__header {
    width: 100%;
  }

  // stepper位置排版
  > .main-layout__stepper {
    width: 40%;
    margin-left: 10rem;
    margin-top: 3rem;
  }

  // 當stepper在shipping-form頁面時的樣式設定
  > .main-layout__stepper--is-shipping-form {
    > .stepper__container {
      > .stepper__container--step:nth-child(2) {
        > .stepper__container--circle {
          color: getMapColor($light-mode, "black");
          border: 1px solid getMapColor($light-mode, "black");
        }

        > .stepper__container--title {
          color: getMapColor($light-mode, "black");
        }

        > .stepper__container--connect-line-wrapper
        > .stepper__container--connect-line::before {
          background-color: getMapColor($light-mode, "black");
        }
      }
    }
  }

  // 當stepper在payment-form頁面時的樣式設定
  > .main-layout__stepper--is-payment-form {
    > .stepper__container {
      > .stepper__container--step:nth-child(2) {
      > .stepper__container--circle {
        color: getMapColor($light-mode, "white");
        background-color: getMapColor($light-mode, "black");
        border: 1px solid getMapColor($light-mode, "black");
      }

      > .stepper__container--title {
        color: getMapColor($light-mode, "black");
      }

      > .stepper__container--connect-line-wrapper
      > .stepper__container--connect-line::before {
        background-color: getMapColor($light-mode, "black");
      }
    }

      > .stepper__container--step:last-child {
        > .stepper__container--circle {
          color: getMapColor($light-mode, "black");
          border: 1px solid getMapColor($light-mode, "black");
        }

        > .stepper__container--title {
          color: getMapColor($light-mode, "black");
        }
      }
    }
  }

  // footer位置排版
  > .main-layout__footer {
    margin-top: 10rem;
    width: 100%;
    background-color: getMapColor($light-mode, "footer-background-color");
  }

  // 在螢幕寬度小於1200px以前main layout的divide line要隱藏
  > .main-layout__divide-line-wrapper {
    display: none;
  }
}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  > .main-layout__footer {
    background-color: getMapColor($dark-mode, "footer-background-color");
  }

  // 在shipping-form頁面的顏色設定
  > .main-layout__stepper--is-shipping-form
  > .stepper__container
  > .stepper__container--step:nth-child(2) {
    > .stepper__container--circle {
      color: getMapColor($dark-mode, "white");
      border: 1px solid getMapColor($dark-mode, "white");
    }

    > .stepper__container--title {
      color: getMapColor($dark-mode, "white");
    }

    > .stepper__container--connect-line-wrapper
    > .stepper__container--connect-line::before {
      background-color: getMapColor($dark-mode, "white");
    }
  }

  // 在payment-form頁面的顏色設定
  > .main-layout__stepper--is-payment-form
  > .stepper__container {
    > .stepper__container--step:nth-child(2) {
      > .stepper__container--circle {
        background-color: getMapColor($dark-mode, "stepper-background-color");
      }

      > .stepper__container--title {
        color: getMapColor($dark-mode, "white");
      }

      > .stepper__container--connect-line-wrapper
      > .stepper__container--connect-line::before {
        background-color: getMapColor($dark-mode, "white");
      }
    }

    > .stepper__container--step:nth-child(3) {
      > .stepper__container--circle {
        color: getMapColor($dark-mode, "white");
        border: 1px solid getMapColor($dark-mode, "white");
      }

      > .stepper__container--title {
        color: getMapColor($dark-mode, "white");
      }
    }
  }
}

// 當螢幕寬度大於1540px之後，將整個表單置中
@media screen and (min-width: 1540px) {
  .main-layout {
    margin: 0 auto;
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

// 當螢幕寬度小於1050px時header寬度的設定
@media screen and (max-width: 1050px) {
  .main-layout {
    > .main-layout__header {
      width: 40%;
    }
  }
}

// 當螢幕寬度小於800px時footer隱藏
@media screen and (max-width: 800px) {
  .main-layout {
    margin-bottom: 10rem;
    > .main-layout__footer {
      display: none;
    }
  }
}

// 當螢幕寬度小於650px時從flex變成block的排版
@media screen and (max-width: 650px) {
  .main-layout {
    display: block;

    > .main-layout__stepper {
      width: 100%;
      margin: 0;
      padding: 1rem;
    }

    > .main-layout__shopping-cart {
      width: 92%;
      margin: 1rem;
    }

    > .main-layout__header {
      width: 100%;
    }
  }
}
</style>