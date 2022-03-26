<template>
  <header class="navbar" :class="{ 'dark-mode': darkMode }">
    <ul class="navbar__list">
      <li class="navbar__list--man">男款</li>
      <li class="navbar__list--woman">女款</li>
      <li class="navbar__list-news">最新消息</li>
      <li class="navbar__list--custom-product">客製商品</li>
      <li class="navbar__list--contact">聯絡我們</li>
    </ul>
    <div v-if="!darkMode" class="navbar__logo">
      <img src="../assets/images/light-logo.png" alt="light-logo">
    </div>
    <div v-else class="navbar__logo">
      <img src="../assets/images/dark-logo.png" alt="dark-logo">
    </div>
    <div v-if="!darkMode" class="navbar__icon-group">
      <img class="navbar__icon-group--search-icon" src="../assets/images/light-search-icon.png" alt="search-icon">
      <img class="navbar__icon-group--shopCart-icon" src="../assets/images/light-shopCart-icon.png" alt="shopCart-icon">
      <img 
        @click="switchMode" 
        class="navbar__icon-group--darkMode-icon" 
        src="../assets/images/darkMode-icon.png" 
        alt="darkMode-icon"
      >
    </div>
    <div v-else class="navbar__icon-group">
      <img class="navbar__icon-group--search-icon" src="../assets/images/dark-search-icon.png" alt="search-icon">
      <img class="navbar__icon-group--shopCart-icon" src="../assets/images/dark-shopCart-icon.png" alt="shopCart-icon">
      <img 
        @click="switchMode" 
        class="navbar__icon-group--lightMode-icon" 
        src="../assets/images/lightMode-icon.png" 
        alt="lightMode-icon"
      >
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['setDarkMode']),
    // 轉換light/dark模式的函式
    switchMode(e) {
      const target = e.target
      
      if (target.matches('.navbar__icon-group--darkMode-icon')) {
        this.setDarkMode(true)
      } else if (target.matches('.navbar__icon-group--lightMode-icon')) {
        this.setDarkMode(false)
      }
    }
  },
  computed: mapState(['darkMode'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

// 將header改成flexbox可達到與螢幕自動伸縮
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10rem;
  margin-top: 1rem;

  > .navbar__list {
    display: flex;
    flex-basis: 25rem;
    justify-content: space-between;
    // 每個選項加上pointer
    > li {
      cursor: pointer;
    }
  }

  > .navbar__logo {
    flex: 0.5;
  }

  > .navbar__icon-group {
    margin-right: 12rem;
    > .navbar__icon-group--search-icon,
      .navbar__icon-group--shopCart-icon {
        padding-right: 1rem;
      }
    > .navbar__icon-group--search-icon,
      .navbar__icon-group--shopCart-icon,
      .navbar__icon-group--darkMode-icon,
      .navbar__icon-group--lightMode-icon {
        cursor: pointer;
      }
  }
}

// 當為dark-mode時的顏色設定
.dark-mode {
  color: getMapColor($dark-mode, "white");
  background-color: getMapColor($dark-mode ,"body-background-color");
}
</style>