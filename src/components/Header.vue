<template>
  <header class="navbar" :class="{ 'dark-mode': darkMode }">
    <div 
      class="navbar__hamburger" 
      @click="toggleNavbar">
    </div>
    <ul class="navbar__list">
      <li class="navbar__list--man">男款</li>
      <li class="navbar__list--woman">女款</li>
      <li class="navbar__list-news">最新消息</li>
      <li class="navbar__list--custom-product">客製商品</li>
      <li class="navbar__list--contact">聯絡我們</li>
      <li class="navbar__list--mobile-icon-group">
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
      </li>
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
    },
    // 開啟或關閉navbar選項列表的函式
    toggleNavbar(e) {
      const navbarList = e.target.nextElementSibling
      navbarList.classList.toggle("navbar__list--toggle")
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
  margin: 1rem 12rem 0 10rem;

  > .navbar__list {
    display: flex;
    flex-basis: 25rem;
    justify-content: space-between;
    // 每個選項加上pointer
    > li {
      cursor: pointer;
    }

    > .navbar__list--mobile-icon-group {
      display: none;
    }
  }

  > .navbar__logo {
    flex: 0.5;
  }

  > .navbar__icon-group {
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

  > .navbar__hamburger {
    display: none;
    width: 1rem;
    height: 2px;
    position: relative;
    background-color: getMapColor($light-mode, "black");

    &::before {
      content: '';
      width: 1.5rem;
      height: 2px;
      position: absolute;
      top: -0.5rem;
      background-color: getMapColor($light-mode, "black");
    }

    &::after {
      content: '';
      width: 0.5rem;
      height: 2px;
      position: absolute;
      top: 0.5rem;
      background-color: getMapColor($light-mode, "black");
    }
  }
}

// 當為dark-mode時的顏色設定
.dark-mode {
  color: getMapColor($dark-mode, "white");
  background-color: getMapColor($dark-mode ,"body-background-color");
}

// 當螢幕寬度小於1050px時，要顯示hamburger以及navbar__list變成可隱藏的呈現方式
@media screen and (max-width: 1050px) {
  .navbar {
    margin-left: 12rem;
    position: relative;
    > .navbar__list {
      opacity: 0;
      position: absolute;
      top: 2.5rem;
      left: -1px; // 因為stepper1的圓形邊框會露出來一點，所以要往左移動一些
      width: 100%;
      text-align: center;
      z-index: 999;
      background-color: getMapColor($light-mode, "body-background-color");

      > .navbar__list--man,
      > .navbar__list--woman,
      > .navbar__list--news,
      > .navbar__list--custom-product {
        border-bottom: 1px solid getMapColor($light-mode, "nav-border-color");
      }

      // 每個項目上下都加上距離
      > li {
        padding: 1rem 0;
      }
    }

    > .navbar__hamburger {
      display: block;
    }
    
    > .navbar__list--toggle {
      display: block;
      opacity: 1;
      transition: opacity 0.5s ease-in-out 0.2s; // 控制屬性 持續時間 變化函式 延遲時間
    }
    
  }

  // 當轉換為dark-mode時的顏色設定
  .dark-mode {
    > .navbar__list {
      background-color: getMapColor($dark-mode, "body-background-color");
      color: getMapColor($dark-mode, "text-color");
    }

    > .navbar__hamburger {
      background-color: getMapColor($dark-mode, "white");

      &::before,
      &::after {
        background-color: getMapColor($dark-mode, "white");
      }
    }
  }
}

// 當螢幕寬度小於800px時，icon要放入list中，並且變成可隱藏的呈現方式
@media screen and (max-width: 800px) {
  .navbar {
    > .navbar__icon-group {
      display: none;
    }

    > .navbar__list {
      > .navbar__list--contact {
        border-bottom: 1px solid getMapColor($light-mode, "nav-border-color");
      }
      > .navbar__list--mobile-icon-group {
        display: block;
        > .navbar__icon-group {
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
    }

    > .navbar__logo {
      flex: 0.8;
    }
  }
}
</style>