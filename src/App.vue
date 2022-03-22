<template>
  <div id="alpha-shop">
    <MainLayout>
      <main>
        <router-view />
      </main>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue'

export default {
  components: {
    MainLayout
  },
}
</script>

<style lang="scss">
  // 載入reset css
  @import './assets/scss/main.scss';

  // 各種form與shopping-cart的排版
  main {
    width: 40%;
  }
</style>


