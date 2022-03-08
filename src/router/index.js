import Vue from 'vue'
import VueRouter from 'vue-router'
import AddressForm from '../views/AddressForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/address-from'
  },
  {
    path: '/address-from',
    name: 'AddressForm',
    component: AddressForm
  },
  {
    path: '/shipping-form',
    name: 'ShippingForm',
    component: () => import ('../views/ShippingForm'),
  },
  {
    path: '/payment-info-form',
    name: 'PaymentInfoForm',
    component: () => import('../views/PaymentInfoForm')
  },
]

const router = new VueRouter({
  routes
})

export default router
