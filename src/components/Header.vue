<template>
  <header class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list--man">男款</li>
      <li class="navbar__list--woman">女款</li>
      <li class="navbar__list-news">最新消息</li>
      <li class="navbar__list--custom-product">客製商品</li>
      <li class="navbar__list--contact">聯絡我們</li>
    </ul>
    <div class="navbar__logo">
      <img src="../assets/images/light-logo.png" alt="logo">
    </div>
    <div class="navbar__icon-group">
      <img class="navbar__icon-group--search-icon" src="../assets/images/light-search-icon.png" alt="search-icon">
      <img class="navbar__icon-group--shopCart-icon" src="../assets/images/light-shopCart-icon.png" alt="shopCart-icon">
      <img class="navbar__icon-group--darkMode-icon" src="../assets/images/darkMode-icon.png" alt="darkMode-icon">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
// 將header改成flexbox可達到與螢幕自動伸縮
.navbar {
  display: flex;
  justify-content: space-between;
  margin-left: 10rem;

  > .navbar__list {
    display: flex;
    flex-basis: 25rem;
    justify-content: space-between;
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
  }
}
</style>