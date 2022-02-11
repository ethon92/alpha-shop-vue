<template>
  <div class="form__shopping-cart">
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
      <div class="shopping-cart__shipping-fee--price">{{ shippingFee ? shippingFee : '免費'}}</div>
    </div>
    <div class="shopping-cart__amount">
      <div class="shopping-cart__amount--title">小計</div>
      <div class="shopping-cart__amount--total">${{ total | addComma}}</div>
    </div>
  </div>
</template>

<script>
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
  // props: {
  //   initialShippingFee: {
  //     type: String,
  //     required: true
  //   }
  // },
  props: {
    fee: {
      type: String
    }
  },
  data() {
    return {
      shoppingCartProducts: [],
      total: 0,
      shippingFee: this.initialShippingFee
    }
  },
  created() {
    this.fetchShoppingCartProduct()
    this.getShippingFee()
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

      this.saveToStorage(this.shoppingCartProducts)
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

      this.saveToStorage(this.shoppingCartProducts)
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

      return this.total
    },
    // 將資料儲存至localStorage中的函式
    saveToStorage(products) {
      localStorage.setItem('shopping-cart-products', JSON.stringify(products))
    },
    getShippingFee() {
      this.shippingFee = JSON.parse(localStorage.getItem('shipping-fee')) || ''
    }
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
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  // 購物籃樣式設定
  .form__shopping-cart {
    border: 1px solid getMapColor('shop-cart-border-color');
    border-radius: 5px;
    background-color: getMapColor('shop-cart-color');
    margin-top: 20%;
    // 商品樣式設定
    > .shopping-cart__product {
      display: flex;
      justify-content: flex-start;
      position: relative;
      color: getMapColor('text-color');
      padding: 1rem;
      > .product__description {
        margin-left: 1rem;
        > .product__description--amount {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          > .product__description--plus, .product__description--minus {
            > button {
              color: getMapColor('black');
              border-radius: 50%;
              border-style: none;
              background-color: getMapColor('shipping-border-color');
              padding: 0.2rem 0.5rem;
              cursor: pointer;
              &:hover {
                box-shadow: 1px 1px 5px getMapColor('light-gray');
              }
            }
          }
        }
      }
      > .product__price {
        position: absolute;
        top: 12%;
        right: 5%;
      }
    }
    // 總金額與運費樣式設定
    > .shopping-cart__shipping-fee, .shopping-cart__amount {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid getMapColor('shop-cart-border-color');
      color: getMapColor('text-color');
      padding: 1rem;
      margin: 1rem;
    }
    > .shopping-cart__title {
      padding: 1rem;
    }
  }
</style>