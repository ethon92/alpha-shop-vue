<template>
  <div class="form__shopping-cart" :class="{ 'dark-mode': darkMode }">
    <h3 class="shopping-cart__title">購物籃</h3>
    <div class="shopping-cart__product" v-for="product in shoppingCartProducts" :key="product.id">
      <img :src="product.image" alt="product-image">
      <div class="product__description">
        <div class="product__description--name">{{ product.name }}</div>
        <div class="product__description--amount">
          <div class="product__description--minus"><button @click="minusQuantity(product.id)">-</button></div>
          <div class="product__description--number">{{ product.quantity }}</div>
          <div class="product__description--plus"><button @click="addQuantity(product.id)">+</button></div>
        </div>
      </div>
      <div class="product__price">${{ product.price | addComma}}</div>
    </div>
    <div class="shopping-cart__shipping-fee">
      <div class="shopping-cart__shipping-fee--title">運費</div>
      <div class="shopping-cart__shipping-fee--price">{{ this.shippingFee ? this.shippingFee : '免費'}}</div>
    </div>
    <div class="shopping-cart__amount">
      <div class="shopping-cart__amount--title">小計</div>
      <div class="shopping-cart__amount--total">${{ total | addComma}}</div>
    </div>
  </div>
</template>

<script>
import { storageFunction } from '../utils/mixins'
import { mapState } from 'vuex'

const dummyData = {
  shoppingCartProducts: [{
    id: 1,
    image: "https://upload.cc/i1/2022/01/05/tqfT6m.png",
    name: "破壞補丁修身牛仔",
    price: 3999,
    quantity: 1,
  },
  {
    id: 2,
    image: "https://upload.cc/i1/2022/01/05/WSRZhy.png",
    name: "刷色直筒牛仔褲",
    price: 1299,
    quantity: 1,
  }],
}

export default {
  name: 'ShoppingCart',
  mixins: [storageFunction],
  data() {
    return {
      shoppingCartProducts: [],
      total: 0
    }
  },
  created() {
    this.fetchShoppingCartProduct()
  },
  methods: {
    // 向API索取購物籃資料的函式
    fetchShoppingCartProduct() {
      // TODO：透過API向伺服器索取購物籃的購物資料

      this.shoppingCartProducts = JSON.parse(localStorage.getItem('shopping-cart-products')) || dummyData.shoppingCartProducts
    },
    // 增加商品數量的函式
    addQuantity(id) {
      this.shoppingCartProducts = this.shoppingCartProducts.map( product => {
        if(product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        } else {
            return product
        }
      })

      this.saveToStorage('shopping-cart-products', JSON.stringify(this.shoppingCartProducts))
    },
    // 減少商品數量的函式
    minusQuantity(id) {
      this.shoppingCartProducts = this.shoppingCartProducts.map( product => {
        if(product.id === id && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1
          }
        } else {
            return product
        }
      })

      this.saveToStorage('shopping-cart-products', JSON.stringify(this.shoppingCartProducts))
    },
    // 計算總金額的函式
    addSum() {
      this.total = 0
      this.shoppingCartProducts.forEach( product => {
        this.total += product.price*product.quantity
      })

      // 將$符號去除
      const fee = Number(this.shippingFee.slice(1))

      if (isNaN(fee)) {
        this.total += 0
      } else {
        this.total += fee
      }

      this.saveToStorage('total-price', this.total)

      return this.total
    },
  },
  watch: {
    // 利用watch監控購物籃與運費變動的函式
    shoppingCartProducts: {
      handler: function() {
        this.addSum()
      },
      deep: true
    },
    shippingFee: {
      handler: function() {
        this.addSum()
      },
    },
    initialShippingFee: {
      handler: function() {
        this.shippingFee = this.initialShippingFee
      }
    }
  },
  filters: {
    // 利用Intl.NumberFormat()將數字加上逗號
    addComma(num) {
      return new Intl.NumberFormat().format(num)
    }
  },
  // 從store中取出shippingFee
  computed: mapState(['shippingFee', 'darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

// 購物籃樣式設定
.form__shopping-cart {
  border: 1px solid getMapColor($light-mode, "shop-cart-border-color");
  border-radius: 5px;
  background-color: getMapColor($light-mode, "shop-cart-color");
  width: 25rem;
  // 商品樣式設定
  > .shopping-cart__product {
    display: flex;
    justify-content: space-between;
    position: relative;
    color: getMapColor($light-mode, "text-color");
    padding: 1rem;
    > .product__description {
      margin-right: 3rem;
      > .product__description--amount {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        > .product__description--plus, .product__description--minus {
          > button {
            color: getMapColor($light-mode, "black");
            border-radius: 50%;
            border-style: none;
            background-color: getMapColor($light-mode, "shipping-border-color");
            padding: 0.2rem 0.5rem;
            cursor: pointer;
            &:hover {
              box-shadow: 1px 1px 5px getMapColor($light-mode, "light-gray");
            }
          }
        }
      }
    }
  }
  // 總金額與運費樣式設定
  > .shopping-cart__shipping-fee, 
    .shopping-cart__amount {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid getMapColor($light-mode, "shop-cart-border-color");
      color: getMapColor($light-mode, "text-color");
      padding: 1rem;
      margin: 1rem;
    }
  > .shopping-cart__title {
    padding: 1rem;
  }
}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  background-color: getMapColor($dark-mode, "shop-cart-color");
  border: 1px solid getMapColor($dark-mode, "shop-cart-border-color");
  color: getMapColor($dark-mode, "text-color");

  > .shopping-cart__product {
    > .product__description {
      color: getMapColor($dark-mode, "text-color");

      > .product__description--amount
      > .product__description--plus
      > button {
        background-color: getMapColor($dark-mode, "shipping-border-color");
      }

      > .product__description--amount
      > .product__description--minus
      > button {
        background-color: getMapColor($dark-mode, "shipping-border-color");
      }
    }

    > .product__price {
      color: getMapColor($dark-mode, "text-color");
    }
  }
  
  > .shopping-cart__shipping-fee,
    .shopping-cart__amount {
      color: getMapColor($dark-mode, "text-color");
      border-top: 1px solid getMapColor($dark-mode, "shop-cart-border-color");
    }
}

// 當寬度小於700px之後，商品名稱與價格間距縮小
@media screen and (max-width: 700px) {
  .form__shopping-cart {
    > .shopping-cart__product {
      > .product__description {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>