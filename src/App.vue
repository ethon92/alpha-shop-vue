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
import { mapState } from 'vuex'

export default {
  components: {
    MainLayout
  },
  computed: mapState(['darkMode']),
  watch: {
    // 利用watch監控darkMode的值，以達到body背景顏色的切換
    darkMode() {
      const body = document.body

      // 當darkMode值為true時的顏色
      if (this.darkMode === true) {
        return body.style.backgroundColor = '#121212'
      } else {
        // 當darkMode值為false時的顏色
        return body.style.backgroundColor = '#fff'
      }
    }
  }
}
</script>

<style lang="scss">
// 載入reset css
@import './assets/scss/main.scss';

// 各種form的樣式設定
main {
  width: 40%;
  margin: 2rem 10rem;
}

@media screen and (max-width: 650px) {
  main {
    width: 100%;
    padding: 1rem;
    margin: 0;
  }
}
</style>


