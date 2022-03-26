<template>
  <div id="alpha-shop" :class="{ 'dark-mode': darkMode }">
    <MainLayout>
      <main>
        <router-view />
      </main>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue'
import { mapState } from 'vuex'

export default {
  components: {
    MainLayout
  },
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss">
  // 載入reset css
  @import './assets/scss/main.scss';
  @import './assets/scss/shareColors.scss';

  // 各種form的寬度
  main {
    width: 40%;
  }

  // 當轉換為dark-mode時的背景顏色
  .dark-mode {
    background-color: getMapColor($dark-mode, "body-background-color");
  }
</style>


